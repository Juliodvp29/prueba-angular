import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchAllUser, User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
    .pipe(
      map(((result) => {
        const data = result.map((u) => {
          return{
            id: u.id,
            name: u.name,
            username: u.username,
            email: u.email
          }
        })
        return data;
      }))
    )
  }

}
