import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'event-emitter',
  templateUrl: './event-emitter.html'
})
export class EventEmitterComponent {
  @Output()
  private myEventEmitter: EventEmitter<number>;
  private randomString: number = 0;

  constructor() {
    this.myEventEmitter = new EventEmitter<number>();
  }

  sendMessage(): void {
    this.myEventEmitter.emit(this.randomString++)
  }
}
