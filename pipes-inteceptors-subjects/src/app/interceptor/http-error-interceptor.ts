import {catchError, throwError} from 'rxjs';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Http error interceptor doing stuff...')
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Unauthorized. Please log in.');
        } else if (error.status === 404) {
          alert('Resource not found.');
        } else if (error.status === 500) {
          alert('Server error. Please try again later.');
        } else {
          alert('An unexpected HTTP error occurred.');
        }
        return throwError(() => error); //error is caught by GlobalErrorHandler and a message is logged to user.
      })
    );
  }
}
