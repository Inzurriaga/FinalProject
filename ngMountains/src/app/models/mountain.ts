export class Mountain {
//field
id: number;
name:String;
longitude: number;
latitude: number;
height: number;



//constructor

constructor(id?:number, longitude?:number, lattitude?:number, height?:number,name?:string) {
  this.id= id;
  this.longitude= longitude;
  this.latitude= lattitude;
  this.height= height;
  this.name=name;
}

}
