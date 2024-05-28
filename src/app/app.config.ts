import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"testcifo01-ce65e","appId":"1:487906289854:web:23f8fd826d97e7567c96ef","storageBucket":"testcifo01-ce65e.appspot.com","apiKey":"AIzaSyBp_sR23-Pqq7yc0P1L08T6ZapmipgWyVQ","authDomain":"testcifo01-ce65e.firebaseapp.com","messagingSenderId":"487906289854","measurementId":"G-J7FCLCN0SQ"})),
    provideAuth(() => getAuth())]
};
