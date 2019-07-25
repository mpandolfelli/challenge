import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difference'
})
export class DifferencePipe implements PipeTransform {

  transform(value: any, points: number): any {
    if(value > points){
    	return value - points;
    }
  }

}
