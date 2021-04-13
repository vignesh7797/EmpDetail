import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  empData = new BehaviorSubject<any>([]);
  arr:any[]=[];

  constructor() { }

  setData(value){
    this.arr.push(value)
    this.empData.next(this.arr);
    console.log(value);
  }

  updateData(newValue, oldValue){
    const index = this.arr.indexOf(oldValue);
    this.arr[index] = newValue;
    this.empData.next(this.arr);
  }

  deletedata(value){
    const index = this.arr.indexOf(value);
    this.arr.splice(index, 1);
    this.empData.next(this.arr);
  }

  getdata(){
    return this.empData.asObservable();
  }

}
