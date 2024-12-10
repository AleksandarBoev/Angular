import {Component, OnDestroy} from "@angular/core";
import {Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: "app-subject-demo",
  template: `
    <h1>TV Show: Subject and Observable Demo</h1>
    <button (click)="addEpisode()">Add Episode</button>
    <br/>
    <br/>
    <h2>Fanboys</h2>
    <button (click)="subscribeFanboy()">Subscribe</button>
    <button (click)="unsubscribeFanboy()">Unsubscribe</button>
    <br/>
    <br/>
    <h2>Haters</h2>
    <button (click)="subscribeHater()">Subscribe</button>
    <button (click)="unsubscribeHater()">Unsubscribe</button>
    <hr/>
    <button (click)="logEpisodeSubject()">Log Episode Subject</button>
  `
})
export class SubjectComponent implements OnDestroy {
  //-------------------DEMO 5----------------------
  /*
    When subscribing to a subject, you do NOT get all of the "next" values like you would subscribe to a classic Observable.
    Because these values are NOT stored. The moment a value is added, it is broadcasted to all subscribers. And then it is lost.

    So, as a subscriber, the moment you subscribe, you only get the future values, the moment they are added.
   */
  private liveEpisodes = new Subject<string>(); // Observable, which is mutable.
  private episodeCount = 0;

  // Observable to be subscribed to by fans and haters
  getEpisodes(): Observable<string> {
    return this.liveEpisodes.asObservable();
  }

  // Add a new episode
  addEpisode(): void {
    this.episodeCount++;
    const newEpisode = `Episode ${this.episodeCount}`;
    console.log(`New episode streaming live! [${newEpisode}]. Here are the viewer reactions who are watching at this moment: `);
    this.liveEpisodes.next(newEpisode);
  }

  logEpisodeSubject() {
    console.log(this.liveEpisodes);
  }

  private fanboySubscription: Subscription | null = null;
  private haterSubscription: Subscription | null = null;

  // Fanboy subscribes to the TV Show
  subscribeFanboy(): void {
    if (!this.fanboySubscription) {
      this.fanboySubscription = this.getEpisodes().subscribe({
        next: (episode) => console.log(`Fanboy: "I loved ${episode}!"`),
        complete: () => console.log('Fanboy: "No more episodes?!"'),
      });
      console.log('Fanboy subscribed!');
    } else {
      console.log('Fanboy is already subscribed!');
    }
  }

  // Fanboy unsubscribes
  unsubscribeFanboy(): void {
    if (this.fanboySubscription) {
      this.fanboySubscription.unsubscribe();
      this.fanboySubscription = null;
      console.log('Fanboy unsubscribed!');
    }
  }

  // Hater subscribes to the TV Show
  subscribeHater(): void {
    if (!this.haterSubscription) {
      this.haterSubscription = this.getEpisodes().subscribe({
        next: (episode) => console.log(`Hater: "I hated ${episode}!"`),
        complete: () => console.log('Hater: "Good riddance!"'),
      });
      console.log('Hater subscribed!');
    } else {
      console.log('Hater is already subscribed!');
    }
  }

  // Hater unsubscribes
  unsubscribeHater(): void {
    if (this.haterSubscription) {
      this.haterSubscription.unsubscribe();
      this.haterSubscription = null;
      console.log('Hater unsubscribed!');
    }
  }

  // Clean up subscriptions
  ngOnDestroy(): void {
    this.fanboySubscription?.unsubscribe();
    this.haterSubscription?.unsubscribe();
  }
}
// TODO demo for the other types of Subjects!
