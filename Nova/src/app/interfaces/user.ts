export interface newUser {
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  status: string
}

export interface returningUser {
  token: string,
  username: string,
  password: string
}
