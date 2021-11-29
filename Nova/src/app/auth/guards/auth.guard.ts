@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    //Checks if the user is logged in
    if (this.authService.isLoggedIn()) {
      //if true,we want to redirect the user to our secret page
      this.router.navigate(['/secret-random-number']);
    }
    //can route to the page if the user is not logged in
    return !this.authService.isLoggedIn();
  }
}
