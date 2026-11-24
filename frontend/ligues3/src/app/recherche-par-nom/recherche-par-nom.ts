import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ligue } from '../model/ligue.model';
import { LigueService } from '../services/ligue.service';
import { SearchFilterPipe } from '../search-filter-pipe';


@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchFilterPipe
  ],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {

  ligues: Ligue[] = [];
  searchTerm: string = '';

  constructor(private ligueService: LigueService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.ligueService.listeLigues().subscribe(ligs => {
      this.ligues = ligs;
      this.cdr.markForCheck();
    });
  }

}
