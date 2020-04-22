import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "readmore",
})
export class ReadmorePipe implements PipeTransform {
  transform(value: string, link): unknown {
    const regex = /(\[[^\]]*\])$/g;
    const newString = value.replace(regex, `<a href="${link}" target="blank">Read More</a>`);
    return newString;
  }
}
