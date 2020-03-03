import { Mountain } from 'src/app/models/mountain';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'app-mountain-model',
  templateUrl: './mountain-model.component.html',
  styleUrls: ['./mountain-model.component.scss']
})
export class MountainModelComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  @Input() mountain: Mountain;
  renderer = new THREE.WebGLRenderer({ alpha: true });
  scene = null;
  camera = null;
  mesh = null;
  lat = null;
  long = null;
  zoom = 12;
  RGBData = null;
  RGBImage = null;
  RGBctx = null;
  SatImage = null;
  orbitControls = null;
  key = "pk.eyJ1IjoiaW56dXJyaWFnYSIsImEiOiJjazB5YmZsdm0wNW1tM2NwMGZ0Z2o5Z3c1In0.5sl6uFI9kbbTD3KqXJYU5Q";
  buffer = null;


  constructor() { }

  ngOnInit(): void {
    this.lat = this.mountain.latitude;
    this.long = this.mountain.longitude;
    this.long2tile(this.long, this.zoom);
    this.lat2tile(this.lat, this.zoom);
    this.initThreeJs();
    this.retrieveRGB();
  }

  long2tile = (lon,zoom) => {
    this.long = (Math.floor((lon+180)/360*Math.pow(2,zoom)));
  }
  lat2tile = (lat,zoom) => {
    this.lat = (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
  }

  retrieveRGB = () => {
      let canvas = document.createElement("canvas");
      canvas.width  = 256;
      canvas.height = 256;
      this.RGBctx = canvas.getContext("2d");
      this.RGBImage = new Image();
      this.RGBImage.crossOrigin='anonymous';
      this.RGBImage.onload = this.retrieveRGBData;
      this.RGBImage.src = `https://api.mapbox.com/v4/mapbox.terrain-rgb/${this.zoom}/${this.long}/${this.lat}.pngraw?access_token=${this.key}`;
  }

  retrieveRGBData = () => {
    this.RGBctx.drawImage(this.RGBImage, 0, 0, 256, 256);
    this.RGBData = this.RGBctx.getImageData(0, 0, 256, 256).data;
    this.createPlane();
  }


  initThreeJs = () => {
    this.renderer.setClearColor( 0xffffff, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 700/500, 1, 1000);
    this.camera.position.z = 0;

  }

  createPlane = () => {
    let loader = new THREE.TextureLoader()
    let geometry = new THREE.PlaneBufferGeometry(255, 255, 255, 255);
    let material;
    loader.load(
      `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/${this.zoom}/${this.long}/${this.lat}?access_token=${this.key}`,
      ( texture ) => {
        material = new THREE.MeshBasicMaterial( {
          map: texture
        } );
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = -1;
        this.mesh.position.z = -400;
        this.mesh.position.y = this.addEvelation()/1.25;
        this.scene.add(this.mesh);
        this.renderer.render(this.scene, this.camera);
        this.animate()
      },
      undefined,
      function ( err ) {
        console.error( 'An error happened.' );
      }
    );
  }

  addEvelation = () => {
    let lowestPoint = ((-10000 + ((this.RGBData[0] * 256 * 256 + this.RGBData[1] * 256 + this.RGBData[2])* 0.1))/20);
    for(let i = 0; i < 65536; i++) {
      let point = ((-10000 + ((this.RGBData[i * 4] * 256 * 256 + this.RGBData[(i * 4) + 1] * 256 + this.RGBData[(i * 4) + 2])* 0.1))/20)
      if(lowestPoint > point) {
        lowestPoint = point
      }
      this.mesh.geometry.getAttribute("position").array[(i * 3) + 2] = point;
    }
    return -lowestPoint;
  }

  ngAfterViewInit() {
    this.renderer.setSize(700, 500);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.z += 0.005
    this.renderer.render(this.scene, this.camera);
  }
}
