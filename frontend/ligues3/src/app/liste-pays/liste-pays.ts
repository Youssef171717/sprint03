import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { LigueService } from '../services/ligue.service';
import { UpdatePays } from '../update-pays/update-pays';

@Component({
  imports: [UpdatePays],
  selector: 'app-liste-pays',
  styles: ``,
  templateUrl: './liste-pays.html',
})

export class ListePays implements OnInit {

  lesPays: Pays[] = [];
  ajout: boolean = true;

  updatedPays: Pays = { idPays: 0, nomPays: "" };

  constructor(private ligueService: LigueService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chargerPays();
  }

  chargerPays() {
    this.ligueService.listePays().subscribe(wrapper => {
      this.lesPays = wrapper._embedded.pays;
      this.cdr.markForCheck();
    });
  }

  paysUpdated(t: Pays) {
    const appel = this.ajout
      ? this.ligueService.ajouterPays(t)
      : this.ligueService.updatePays(t);

    appel.subscribe(() => {
      this.chargerPays();
      this.updatedPays = { idPays: 0, nomPays: "" };
      this.ajout = true;
      this.cdr.markForCheck();
    });
  }

  updatePays(t: Pays) {
    this.updatedPays = { idPays: t.idPays, nomPays: t.nomPays };
    this.ajout = false;
  }
}
