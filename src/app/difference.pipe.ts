import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difference'
})
export class DifferencePipe implements PipeTransform {

  transform(value: any, points: number): any {
    console.log(value);
    console.log(points);
    return null;
  }

}
