import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';

import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.sevice';
@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-ligues',
  standalone: true,
  templateUrl: './ligues.html',
  styleUrl: './ligues.css'
})
export class LiguesComponent implements OnInit {
  ligues: Ligue[] = []; //un tableau de Ligue

  constructor(
    private ligueService: LigueService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.chargerLigues();
  }

  chargerLigues() {
    this.ligueService.listeLigues().subscribe(ligs => {
      this.ligues = ligs;
      this.cdr.markForCheck(); // Angular zoneless : on prévient Angular que les données ont changé
    });
  }

  supprimerLigue(l: Ligue) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.ligueService.supprimerLigue(l.idLigue!).subscribe(() => {
        this.chargerLigues(); // recharger la liste depuis MySQL
      });
  }
}
