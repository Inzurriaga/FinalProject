export class Mountain {
//field
id: number;
name: string;
longitude: number;
lattitude: number;
height: number;



//constructor

constructor(id?:number, name?: string, longitude?:number, lattitude?:number, height?:number) {
  this.id= id;
  this.name = name;
  this.longitude= longitude;
  this.lattitude= lattitude;
  this.height= height;
}

}
