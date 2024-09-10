import {Component} from "@angular/core";

@Component({
  selector: 'colored-text',
  templateUrl: './colored-text.html',
  styleUrl: './colored-text.css'
})
export class ColoredTextComponent {
  textSize: string = '38px';
  textColorNumber: number = 2;
}
