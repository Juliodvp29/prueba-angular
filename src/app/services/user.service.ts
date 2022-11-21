import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Data, User } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private message = new ReplaySubject<Data>(1);
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

  public get recibir() {
    return this.message.asObservable()
  }

  public enviar(data: Data): void {
    this.message.next(data);
  }

}
