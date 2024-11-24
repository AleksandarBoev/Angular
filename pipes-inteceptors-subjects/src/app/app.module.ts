import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomPipe} from './pipes/custom.pipe'
import {AsyncPipeComponent} from './pipes/async-pipe.component';
import {GenerateErrorComponent} from './error-handler/generate-error.component';
import {GlobalErrorHandler} from './error-handler/global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    AsyncPipeComponent,
    GenerateErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
