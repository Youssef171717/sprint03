import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ligue } from '../model/ligue.model';
import { Pays } from '../model/pays.model';
import { PaysWrapper } from '../model/pays-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class LigueService {
  // API REST Spring Boot (RestController)
  apiURL: string = 'http://localhost:8082/api';
  // API Spring Data REST (Pays)
  apiURLPays: string = 'http://localhost:8082/pays';

  constructor(private http: HttpClient) { }

  /* ---------- LIGUES ---------- */
  listeLigues(): Observable<Ligue[]> {
    return this.http.get<Ligue[]>(this.apiURL + '/all');
  }

  ajouterLigue(l: Ligue): Observable<Ligue> {
    return this.http.post<Ligue>(this.apiURL + '/addligue', l);
  }

  supprimerLigue(id: number) {
    return this.http.delete(`${this.apiURL}/delligue/${id}`);
  }

  consulterLigue(id: number): Observable<Ligue> {
    return this.http.get<Ligue>(`${this.apiURL}/getbyid/${id}`);
  }

  updateLigue(l: Ligue): Observable<Ligue> {
    return this.http.put<Ligue>(this.apiURL + '/updateligue', l);
  }

  rechercherParPays(idPays: number): Observable<Ligue[]> {
    return this.http.get<Ligue[]>(`${this.apiURL}/liguespays/${idPays}`);
  }

  rechercherParNom(nom: string): Observable<Ligue[]> {
    return this.http.get<Ligue[]>(`${this.apiURL}/liguesByName/${nom}`);
  }

  /* ---------- PAYS (Spring Data REST) ---------- */
  listePays(): Observable<PaysWrapper> {
    return this.http.get<PaysWrapper>(this.apiURLPays);
  }

  consulterPays(id: number): Observable<Pays> {
    return this.http.get<Pays>(`${this.apiURLPays}/${id}`);
  }

  ajouterPays(p: Pays): Observable<Pays> {
    // on envoie seulement le nom : l'id est généré par MySQL
    return this.http.post<Pays>(this.apiURLPays, { nomPays: p.nomPays });
  }

  updatePays(p: Pays): Observable<Pays> {
    return this.http.put<Pays>(`${this.apiURLPays}/${p.idPays}`, {
      idPays: p.idPays,
      nomPays: p.nomPays
    });
  }
}
