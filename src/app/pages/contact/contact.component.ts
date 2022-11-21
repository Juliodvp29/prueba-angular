import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Regex } from 'src/app/Regex';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { 
    this.validationForm();
  }

  fg!: FormGroup;

  ngOnInit(): void {
  }

  public validationForm(){
    this.fg = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(Regex.PATTERN_EMAIL)]],
      coment: ['', [Validators.required]],
    })
  }

  submit(){
    this.userService.enviar(this.fg.value)
    this.router.navigate(['/data']);
  }

}
