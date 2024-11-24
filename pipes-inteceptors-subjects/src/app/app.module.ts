import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomPipe} from './pipes/custom.pipe'
import {AsyncPipeComponent} from './pipes/async-pipe.component';
import {GenerateErrorComponent} from './error-handler/generate-error.component';
import {GlobalErrorHandler} from './error-handler/global-error-handler';
import {AuthInterceptor} from './interceptor/auth-interceptor';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {InterceptorDemoComponent} from './interceptor/interceptor-demo.component';
import {HttpErrorInterceptor} from './interceptor/http-error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    AsyncPipeComponent,
    GenerateErrorComponent,
    InterceptorDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {
      provide: HTTP_INTERCEPTORS, // Register the interceptor
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, // Register the 2nd interceptor. By registering it secondly, it will run after the 1st one.
      useClass: HttpErrorInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
