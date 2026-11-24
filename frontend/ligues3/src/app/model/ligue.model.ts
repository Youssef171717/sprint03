import { Pays } from "./pays.model";

export class Ligue {
idLigue? : number;
nomLigue? : string;
nbEquipes? : number;
dateCreation? : Date ;
pays!:Pays;
}
