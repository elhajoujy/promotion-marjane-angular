
import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService  implements IUser{

  constructor(){
  }
  username!: string;
  password!: string;
  role!: string;
  token!: string;
  id!: number;

  login(username: string, password: string): boolean {
    throw new Error('Method not implemented.');
  }
  logout(): void {
    throw new Error('Method not implemented.');
  }
  isLogged(): boolean {
    console.log('not looged');
   return true;
  }
  getRole(): string {
    throw new Error('Method not implemented.');
  }


}
