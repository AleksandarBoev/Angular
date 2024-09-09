import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LowPriceComponent} from "./low-price/low-price.component";
import {BrowserModule} from "@angular/platform-browser";
import {MidPriceComponent} from "./mid-price/mid-price.component";
import {HighPriceComponent} from "./high-price/high-price.component";

@NgModule({
  declarations: [AppComponent, LowPriceComponent, MidPriceComponent, HighPriceComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
