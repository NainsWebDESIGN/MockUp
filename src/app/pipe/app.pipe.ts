import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Translate'
})
export class TransLatePipe implements PipeTransform {

  transform(value: any, lang: any): any {
    return (!lang || !lang[value]) ? value : lang[value];
  }

}
