import { Pipe, PipeTransform } from 'angular2/core';
import { CD } from './cd.model';

@Pipe({
  name: "genre"
})
export class GenrePipe implements PipeTransform {
  transform(input: CD[], args) {
    if(args[0] === "All") {
      return input;
    } else {
      return input.filter((cd) => {
        return cd.genre===args[0];
      });
    }
  }
}
