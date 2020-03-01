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

  @Input() mountain;
  renderer = new THREE.WebGLRenderer({ alpha: true });
  scene = null;
  camera = null;
  mesh = null;
  lat = null;
  long = null;
  RGBData = null;
  RGBImage = null;
  RGBctx = null;
  SatImage = null;
  orbitControls = null;
  key = "pk.eyJ1IjoiaW56dXJyaWFnYSIsImEiOiJjazB5YmZsdm0wNW1tM2NwMGZ0Z2o5Z3c1In0.5sl6uFI9kbbTD3KqXJYU5Q";
  buffer = null;


  constructor() { }

  ngOnInit(): void {
    console.log("hello im in the mountain model")
    console.log(this.mountain)
    this.long2tile(	-106.8182, 12);
    this.lat2tile( 	39.1863, 12);
    this.initThreeJs();
    this.retrieveRGB();
  }

  long2tile = (lon,zoom) => {
    this.long = (Math.floor((lon+180)/360*Math.pow(2,zoom)));
    console.log(this.long)
  }
  lat2tile = (lat,zoom) => {
    this.lat = (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom)));
    console.log(this.lat)
  }

  retrieveRGB = () => {
      let canvas = document.createElement("canvas");
      canvas.width  = 256;
      canvas.height = 256;
      this.RGBctx = canvas.getContext("2d");
      this.RGBImage = new Image();
      this.RGBImage.crossOrigin='anonymous';
      this.RGBImage.onload = this.retrieveRGBData;
      this.RGBImage.src = `https://api.mapbox.com/v4/mapbox.terrain-rgb/12/${this.long}/${this.lat}.pngraw?access_token=${this.key}`;
  }

  retrieveRGBData = () => {
    this.RGBctx.drawImage(this.RGBImage, 0, 0, 256, 256);
    this.RGBData = this.RGBctx.getImageData(0, 0, 256, 256).data;
    this.createPlane();
  }


  initThreeJs = () => {
    this.renderer.setClearColor( 0xffffff, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 500/500, 1, 1000);
    this.camera.position.z = 400;
    this.orbitControls = new OrbitControls( this.camera, this.renderer.domElement );

  }

  createPlane = () => {
    let loader = new THREE.TextureLoader()
    let geometry = new THREE.PlaneBufferGeometry(255, 255, 255, 255);
    let material;
    loader.load(
      `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/12/${this.long}/${this.lat}?access_token=${this.key}`,
      ( texture ) => {
        material = new THREE.MeshBasicMaterial( {
          map: texture
        } );
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = -1
        this.addEvelation();
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
    for(let i = 0; i < 65536; i++) {
      this.mesh.geometry.getAttribute("position").array[(i * 3) + 2] = ((-10000 + ((this.RGBData[i * 4] * 256 * 256 + this.RGBData[(i * 4) + 1] * 256 + this.RGBData[(i * 4) + 2])* 0.1))/70)
    }

  }

  ngAfterViewInit() {
    this.renderer.setSize(500, 500);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.z += 0.002
    this.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
