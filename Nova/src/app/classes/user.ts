export class CurrentUser {
  public static username: string | undefined | '';
  public static email: string | undefined | '';
  public static favoriteGenre: string | undefined | '';
  public static state: string | undefined | '';
  public static message: string | undefined | '';
}

export class identifiers {
  public Username: Array<string> | any;
  public State: Array<string> | any;
  public Message: Array<string> | any;
  public FavoriteGenre: Array<string> | any;
  public Email: Array<string> | any;
}

export class profileInfo {
  public Username: string | any;
  public State: string | any;
  public Message: string | any;
  public FavoriteGenre: string | any;
  public Email: string | any;
}
