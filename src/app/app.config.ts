import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation, withHashLocation, withInMemoryScrolling, withPreloading, withRouterConfig, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { Title, provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { IMAGE_CONFIG, registerLocaleData } from '@angular/common';
import localeMx from "@angular/common/locales/es-MX";

registerLocaleData(localeMx)

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withViewTransitions(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    importProvidersFrom(
    ),
    provideAnimations(),
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch(),
    ),
    provideClientHydration(
      withHttpTransferCacheOptions({ includePostRequests: true })
    ),
    { provide: LOCALE_ID, useValue: "es-MX" },
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    },
    Title,
  ]
};
