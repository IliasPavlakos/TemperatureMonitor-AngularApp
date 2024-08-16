import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "temperature",
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): any {
    let val:number;

    if(typeof value === "string") {
      val = Number(value);
    }else if(typeof value === "number") {
      val = value;
    }else{
      return value;
    }

    let outputTemp : number = val;

    if(inputType === "cel" && outputType === "fah"){
      outputTemp = outputTemp * (9 / 5) + 32
    }else if(inputType === "fah" && outputType === "cel"){
      outputTemp = (outputTemp - 32) * (5 / 9);
    }

    let symbol : '°F' | '°C';
    if(!outputType){
      symbol = inputType === 'cel' ? '°C' : '°F';
    }else{
      symbol = outputType === 'cel' ? '°C' : '°F';
    }


    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
