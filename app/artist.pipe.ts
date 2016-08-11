import { Pipe, PipeTransform } from 'angular2/core';
import { CD } from './cd.model';

@Pipe({
  name: "artist"
})
export class ArtistPipe implements PipeTransform {
  transform(input: CD[], args) {
    var term = args[0].toLowerCase();
    if(term === "all") {
      return input;
    } else {
      return input.filter((cd) => {
        return cd.artist.toLowerCase()===term;
      });
    }
  }
}
