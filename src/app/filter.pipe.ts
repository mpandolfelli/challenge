import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, category: string, points: number){
        if (items && items.length){
            return items.filter(item =>{
                if (category && item.category.toLowerCase().indexOf(category.toLowerCase()) === -1){
                    return false;
                }
                if (points && item.cost >= points){
                    return false;
                }
                
                return true;
           })
        }
        else{
            return items;
        }
    }
}