import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public name: string = ""
  public email: string = ""
  public coment: string = ""

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.recibir.subscribe(data => {
      
        this.name = data.name
        this.email = data.email
        this.coment = data.coment
      
    })
  }

}
