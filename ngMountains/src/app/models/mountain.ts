import { State } from './state';
import { MountainClass } from './mountain-class';

export class Mountain {
//field
id: number;
name:String;
longitude: number;
latitude: number;
height: number;
state:State;
mountainClass:MountainClass;



//constructor

constructor(id?:number, longitude?:number, lattitude?:number, height?:number,name?:string,state:State = new State(),mountainClass?:MountainClass) {
  this.id= id;
  this.longitude= longitude;
  this.latitude= lattitude;
  this.height= height;
  this.name=name;
  this.state=state;
  this.mountainClass=mountainClass;
}

}
