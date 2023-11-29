import { IUser } from './user.model';

export class ResponsableUser implements IUser {

  username: string;
  password: string;
  role: string;
  token: string;
  id: number;

  constructor(username:string,password:string,role:string,token:string,id:number){
    this.username = username;
    this.password = password;
    this.role = role;
    this.token = token;
    this.id = id;
  }


  login(username: string, password: string): boolean {
    throw new Error("Method not implemented.");
  }
  logout(): void {
    throw new Error("Method not implemented.");
  }
  isLogged(): boolean {
    console.log("logged");
    return false
  }
  getRole(): string {
    throw new Error("Method not implemented.");
  }

}
