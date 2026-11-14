import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleColor'
})
export class CouleurPipe implements PipeTransform {

  transform(title: string): string {
    if (title.length > 10) {
      return 'red';
    } else {
      return 'green';
    }
  }
}