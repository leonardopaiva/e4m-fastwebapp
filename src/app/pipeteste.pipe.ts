import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeteste'
})
export class PipetestePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
