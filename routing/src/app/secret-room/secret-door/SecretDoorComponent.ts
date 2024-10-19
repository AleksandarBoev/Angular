import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secret-door',
  templateUrl: './secret-door.component.html'
})
export class SecretDoorComponent {
  @ViewChild('inputVar', {read: ElementRef}) inputVar: ElementRef | undefined;

  constructor(private router: Router) {
    this.router = router;
  }

  public tryPhrase(): void {
    // @ts-ignore
    const value: string = this.inputVar.nativeElement.value;
    if (value.toLowerCase() === 'mellon') {
      this.router.navigate([ '/secret-room' ])
    }
  }
}
