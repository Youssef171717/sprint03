import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pays } from '../model/pays.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-update-pays',
  styles: ``,
  templateUrl: './update-pays.html',
})
export class UpdatePays implements OnInit  {
  @Input()
  pays!: Pays;
  @Input()
  ajout!: boolean;
  @Output()
  paysUpdated = new EventEmitter<Pays>();

   ngOnInit(): void {
    console.log("ngOnInit du composant UpdatePays ", this.pays);
  }
  savePays() {
    this.paysUpdated.emit(this.pays);
  }
}
