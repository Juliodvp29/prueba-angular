import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: User[] = [];
  public search: string = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
   this.userService.getAllUsers().subscribe((resp: any) => {
     this.users = resp
   })
  }

  onSearchUser(search: string){
    this.search = search;
  }

}
