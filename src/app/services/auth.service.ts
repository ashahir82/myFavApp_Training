import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
  ) { }

  login(email:string, password:string) {
    return this.http.post('http://recipes.test/api/auth/login', 
    {email: email, password: password})
    .pipe(
      tap(
        token => {
          this.storage.setItem('token', token)
          .then (
            () => {
              console.log('Berjaya');
            },
            error => console.error('Error Login', error)
          );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        }
      )
    );
  }
}
