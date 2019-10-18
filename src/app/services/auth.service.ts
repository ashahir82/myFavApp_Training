import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Recipe } from '../model/recipes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  private recipes: Recipe[];

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService
  ) { }

  login(email:string, password:string) {
    return this.http.post(this.env.API_URL + '/auth/login', 
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
      ),
    );
  }

  register(fName: string, lName: string, email: string, password: string) {
    return this.http.post(this.env.API_URL + '/auth/register',
      { fName, lName, email, password }
    );
  }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    )
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization' : this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.get(this.env.API_URL + '/auth/logout', { headers })
    .pipe(
      tap (data => {
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );
  }

  getAllRecipes() {
    const headers = new HttpHeaders({
      'Authorization' : this.token['token_type'] + ' ' + this.token['access_token']
    });

    return this.http.get<Recipe[]>(this.env.API_URL + '/recipe', { headers })
    .pipe(
      tap (recipes => {
        return recipes;
      })
    );
  }

  getRecipe(recipeID: string): Observable<Recipe[]> {
    const headers = new HttpHeaders({
      'Authorization' : this.token['token_type'] + ' ' + this.token['access_token']
    });

    return this.http.get<Recipe[]>(this.env.API_URL + '/recipe/' + recipeID, { headers })
    .pipe(
      tap (recipes => {
        return recipes;
      })
    );
  }

  assignLog(url){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + ' ' + this.token["access_token"]
    });

    return this.http.post(url, {headers: headers})
    .pipe(
      tap(data => {
        return data;
      })
    );
  }
}
