import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditdataService {

  editData = new BehaviorSubject<any>('');

  constructor() {  }

  setData(value){
      this.editData.next(value);
      console.log(this.editData.value);
  }

  getdata(){
    return this.editData.asObservable();
  }


}
