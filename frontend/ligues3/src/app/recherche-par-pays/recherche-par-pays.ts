import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ligue } from '../model/ligue.model';
import { Pays } from '../model/pays.model';
import { LigueService } from '../services/ligue.service';

@Component({
  selector: 'app-recherche-par-pays',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './recherche-par-pays.html'
})
export class RechercheParPays implements OnInit {

  ligues: Ligue[] = [];
  lesPays: Pays[] = [];
  idPays!: number;

  constructor(private ligueService: LigueService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ligueService.listePays().subscribe(wrapper => {
      this.lesPays = wrapper._embedded.pays;
      this.cdr.markForCheck();
    });
    this.chargerToutesLesLigues();
  }

  chargerToutesLesLigues(): void {
    this.ligueService.listeLigues().subscribe(ligs => {
      this.ligues = ligs;
      this.cdr.markForCheck();
    });
  }

  onChange(): void {
    if (this.idPays) {
      this.ligueService.rechercherParPays(this.idPays).subscribe(ligs => {
        this.ligues = ligs;
        this.cdr.markForCheck();
      });
    } else {
      this.chargerToutesLesLigues();
    }
  }
}
