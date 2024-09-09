import {Component} from "@angular/core";

interface Computer {
  CPU: string;
  GPU: string;
  price: number;
}

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html'
})
export class ComputersComponent {
  public computers: Computer[] = [
    {CPU: 'Intel i9 14900 HX', GPU: 'Nvidia 3060', price: 10000},
    {CPU: 'AMD Bulldozer 4000', GPU: 'AMD 480', price: 2500}
  ]
}
