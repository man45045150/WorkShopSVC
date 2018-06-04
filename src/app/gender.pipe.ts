import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, lang?: any): any {
    if(lang==='th')
      return value==='Miss'?'นาง':'นาย';
    else
      return value
  }

}
