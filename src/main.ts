import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import MyPreset from './mypreset';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    providePrimeNG({
            theme: {
                preset: MyPreset
            }
        }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
