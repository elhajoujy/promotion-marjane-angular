export interface IUser {
  username :string;
  password :string;
  role :string;
  token :string;
  id :number;

  login(username:string,password:string):boolean;
  logout():void;
  isLogged():boolean;
  getRole():string;

}
