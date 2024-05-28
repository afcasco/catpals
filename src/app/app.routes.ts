import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {EditComponent} from "./pages/edit/edit.component";
import {LoginComponent} from "./pages/login/login.component";
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = ()=> redirectLoggedInTo(['/private/home'])

export const routes: Routes = [
  {path: '', redirectTo: '/private/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'private', ...canActivate(redirectUnauthorizedToLogin), children: [
      {path: 'home', component: HomeComponent},
      {path: 'aboutus', component: AboutusComponent},
      {path: 'edit/:id', component: EditComponent},
    ]},
  {path: '**', redirectTo: 'login'}
];
