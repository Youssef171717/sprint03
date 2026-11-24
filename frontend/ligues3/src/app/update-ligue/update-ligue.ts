import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LigueService } from '../services/ligue.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pays } from '../model/pays.model';
@Component({
  selector: 'app-update-ligue',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-ligue.html',
  styles: ``
})
export class UpdateLigueComponent implements OnInit {

  lesPays: Pays[] = [];
  updatedPaysId!: number;
  currentLigue = new Ligue();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ligueService: LigueService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ligueService.listePays().subscribe(wrapper => {
      this.lesPays = wrapper._embedded.pays;
      this.cdr.markForCheck();
    });
    this.ligueService.consulterLigue(this.activatedRoute.snapshot.params['id'])
      .subscribe(l => {
        this.currentLigue = l;
        this.updatedPaysId = l.pays.idPays;
        this.cdr.markForCheck();
      });
  }

  updateLigue() {
    const p = this.lesPays.find(x => x.idPays == this.updatedPaysId);
    if (p)
      this.currentLigue.pays = { idPays: p.idPays, nomPays: p.nomPays };
    this.ligueService.updateLigue(this.currentLigue).subscribe(() => {
      this.router.navigate(['ligues']);
    });
  }
}
