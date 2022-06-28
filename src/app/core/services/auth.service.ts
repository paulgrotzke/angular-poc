import { catchError, map, Observable, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { EventEmitter, Injectable, Output } from '@angular/core'

type UserLogin = {
  username: string
  password: string
}

@Injectable()
export class AuthService {
  authUrl = ''
  isAuthenticated = false

  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private http: HttpClient) {}

  login(data: UserLogin): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/login', data).pipe(
      map((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn
        this.authEvent(isLoggedIn)
        return isLoggedIn
      }),
      catchError(this.handleError)
    )
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/logout', null).pipe(
      map((isLoggedOut) => {
        this.isAuthenticated = !isLoggedOut
        this.authEvent(isLoggedOut)
        return isLoggedOut
      }),
      catchError(this.handleError)
    )
  }

  private authEvent(authStatus: boolean) {
    this.authChanged.emit(authStatus)
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => console.error(error))
  }
}
