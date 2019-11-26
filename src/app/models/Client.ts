import {Analyse} from './Analyse';

export interface Client {
  code: string;
  nom: string;
  prenom: string;
  photo: string;
  analyses: Analyse[];
}
