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
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string
}
