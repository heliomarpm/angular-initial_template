import { type ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';

import { ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    provideBrowserGlobalErrorListeners(),
    provideRouter(ROUTES, withViewTransitions()),
    provideClientHydration(),
  ],
};
