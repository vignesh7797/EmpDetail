import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any) {

    var phone = value.toString();

    var arr = phone.split('');
    if(arr[0] != '+'){
      arr.join('');
      const start = phone.slice(0,3);
      const mid = phone.slice(3,6);
      const end = phone.slice(6,10);

      return `+1 (${start}) ${mid} ${end}`;
    }else{
      phone = phone.slice(3)

      const start = phone.slice(0,3);
      const mid = phone.slice(3,6);
      const end = phone.slice(6,11);

      return `+1 (${start}) ${mid} ${end}`;
    }

    
  }

}
