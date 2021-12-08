import {AbstractControl} from "@angular/forms";

export interface newUser {
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  status: string
}

export interface returningUser {
  username: string,
  email: string,
  state: string,
  favoriteGenre: string,
  message: string,
  firstName: string,
  lastName: string
}

export class CurrentUser {
  public static username: AbstractControl | null;
}
