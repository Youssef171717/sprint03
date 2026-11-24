import { Pays } from './pays.model';

// Spring Data REST renvoie la liste dans : { _embedded: { pays: [...] } }
export class PaysWrapper {
  _embedded!: { pays: Pays[] };
}
