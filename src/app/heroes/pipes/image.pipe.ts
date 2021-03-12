import { Pipe, PipeTransform } from '@angular/core';

import { HeroResponse } from '../interfaces/hero-response.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: HeroResponse): string {
    if ( !value.id && !value.alt_img ) {
      return 'assets/no-image.png';
    } else if ( value.alt_img ) {
      return value.alt_img;
    } else {
      return `assets/heroes/${value.id}.jpg`;
    }


  }

}
