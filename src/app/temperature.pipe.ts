import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "temperature",
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number) {
    let val:number;

    if(typeof value === "string") {
      val = Number(value);
    }else{
      val = value;
    }

    const outputTemp = val * (9 / 5) + 32

    return `${outputTemp} °F`;
  }
}
