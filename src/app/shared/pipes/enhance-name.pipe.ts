import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enhanceName'
})
export class EnhanceNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 10 ? `🔥 ${value} 🔥` : value;
  }
}
