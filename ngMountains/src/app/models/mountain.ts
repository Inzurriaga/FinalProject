import { State } from './state';

export class Mountain {
//field
id: number;
name: string;
longitude: number;
latitude: number;
height: number;
state: State;



//constructor

constructor(id?:number, name?:string, longitude?:number, lattitude?:number, height?:number, state?:State) {
  this.id= id;
  this.name= name;
  this.longitude= longitude;
  this.latitude= lattitude;
  this.height= height;
  this.state= state;
}

}
