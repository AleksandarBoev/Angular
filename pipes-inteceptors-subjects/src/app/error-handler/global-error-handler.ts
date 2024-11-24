import {ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  // You can add custom error handling logic here
  // For example, send the error to a monitoring service
  handleError(error: any): void {
    if (error instanceof TypeError) {
      this.handleTypeError(error);
    } else {
      this.handleUnknownError(error);
    }

    alert("Sorry, something went wrong");
  }

  private handleTypeError(error: TypeError) {
    console.error('Global error caught | TypeError: ', error);
  }

  private handleUnknownError(error: any) {
    console.error('Global error caught | Unknown error: ', error);
  }
}
