import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prespacePipe'
})
export class PrespacePipePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 0){
      return " " + value;
    }
    return "";
  }

}
