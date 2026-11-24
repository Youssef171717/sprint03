import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';
import { Router } from '@angular/router';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-add-ligue',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-ligue.html',

})
export class AddLigueComponent implements OnInit {

  newLigue: Ligue = new Ligue();
  lesPays: Pays[] = [];
  newIdPays!: number;
  message: string = '';

  constructor(
    private ligueService: LigueService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ligueService.listePays().subscribe(wrapper => {
      this.lesPays = wrapper._embedded.pays;
      this.cdr.markForCheck();
    });
  }

  addLigue() {
    const p = this.lesPays.find(x => x.idPays == this.newIdPays);
    if (!p) {
      this.message = 'Veuillez choisir un pays !';
      return;
    }
    this.newLigue.pays = { idPays: p.idPays, nomPays: p.nomPays };
    this.ligueService.ajouterLigue(this.newLigue).subscribe(() => {
      this.router.navigate(['ligues']);
    });
  }

}
