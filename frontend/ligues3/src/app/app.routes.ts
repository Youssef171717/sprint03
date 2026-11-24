import { Routes } from '@angular/router';
import { LiguesComponent } from './ligues/ligues';
import { AddLigueComponent } from './add-ligue/add-ligue';
import { UpdateLigueComponent } from './update-ligue/update-ligue';
import { RechercheParPays } from './recherche-par-pays/recherche-par-pays';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { ligueGuard } from './ligue-guard';
import { ListePays } from './liste-pays/liste-pays';

export const routes: Routes = [
  { path: 'ligues', component: LiguesComponent },
  { path: 'add-ligue', component: AddLigueComponent ,canActivate:[ligueGuard] },
  {path: "updateLigue/:id", component: UpdateLigueComponent},
  {path: "", redirectTo: "ligues", pathMatch: "full"},
  {path: "rechercheParPays", component : RechercheParPays},
  {path: 'login', component: Login},
  {path: 'rechercheParNom',component: RechercheParNom},
  {path: 'app-forbidden', component: Forbidden},
  { path: 'listePays', component: ListePays },
  
 
];



