import { Routes } from "@angular/router";
import { AuthPageComponent } from "./auth-page/auth-page.component";

export const AUTH_ROUTES: Routes = [
  { path: '', component: AuthPageComponent},
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
