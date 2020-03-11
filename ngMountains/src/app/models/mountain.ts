import { State } from './state';
import { MountainClass } from './mountain-class';

export class Mountain {
//field
id: number;
name: string;
longitude: number;
latitude: number;
height: number;
state:State;
mountainClass:MountainClass;



//constructor


constructor(id?:number, longitude?:number, lattitude?:number, height?:number,name:string = "",state:State = new State(),mountainClass:MountainClass = new MountainClass()) {
  this.id= id;
  this.name= name;
  this.longitude= longitude;
  this.latitude= lattitude;
  this.height= height;
  this.name=name;
  this.state=state;
  this.mountainClass=mountainClass;
}

}
