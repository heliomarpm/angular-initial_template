import { type ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import StackTrace from 'stacktrace-js';

import { type LogError, LogErrorService } from './local-error.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  router = inject(Router);
  logErrorService = inject(LogErrorService);
  logError: LogError = {
    Message: '',
    Time: '',
    Route: '',
    User: '',
  };

  handleError(error: unknown): void {
    // console.error('An error occurred:', error);
    //throw error (Keep this line uncommented in development  in order to see the error in the console)
    if (error instanceof Error) {
      StackTrace.fromError(error).then((stackframes) => {
        const stringifiedStack = stackframes.map((sf) => sf.toString()).join('\n');
        //  console.error(stringifiedStack);
        console.log('logError is not null');
        this.logError.Message = stringifiedStack;
        this.logError.Time = new Date().toDateString();
        this.logError.Route = this.router.url;
        this.logError.User = 'testUser';
        this.logErrorService.logError(this.logError);
        this.router.navigate(['/error-page']);
      });
    } else {
      console.error('Unknown error:', error);
    }
  }
}
