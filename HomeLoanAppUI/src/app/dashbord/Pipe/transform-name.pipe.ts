import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformName'
})
export class TransformNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value=='re'){return  'Relational Executive'}
       else if(value=='oe'){ return 'Opratinal Executive'}
       else if(value=='cm'){ return 'Creadit Maneger'}
       else if(value=='ah'){ return 'Area Head'}
       return ''
  }

}
