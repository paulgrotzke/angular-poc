import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  authIdenticator = 'Login'
  subscription: Subscription = {} as Subscription

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.authChanged.subscribe(
      () => this.setAuthIdenticator(),
      (err) => console.error(err)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  handleAppAuthState() {
    this.authService.isAuthenticated ? this.authService.logout() : this.router.navigate(['/login'])
  }

  private setAuthIdenticator() {
    this.authIdenticator = this.authService.isAuthenticated ? 'Logout' : 'Login'
  }
}
