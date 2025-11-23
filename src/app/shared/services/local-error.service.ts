import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export interface LogError {
  Time: string;
  Route: string;
  Message: string;
  User: string;
}

export class LogErrorService {
  private http = inject(HttpClient);

  logError(log: LogError) {
    console.log(log);
    this.http.post('http://your-api-url.com', log).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
