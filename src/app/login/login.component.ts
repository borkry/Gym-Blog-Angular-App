import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  providers: [UsersService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form4login: FormGroup;

  constructor(private usersService : UsersService, private http : HttpClient, private router : Router){
    this.form4login = new FormGroup({
      email : new FormControl(),
      password : new FormControl(),
    });
  }

  get email() {
    return this.form4login.get('email');
  }

  get password() {
    return this.form4login.get('password');
  }

  ngOnInit() {
    this.form4login.controls['email'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"),
    ])

    this.form4login.controls['password'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ])
  }

  onSubmit() {
    if (this.form4login.valid) {
      this.usersService.login().subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.email === this.form4login.value.email && a.password === this.form4login.value.password
        });
        if(user){
          alert("Pomyślnie zalogowano!");
          this.usersService.setUser(user);
          console.log(localStorage.getItem('user'));
          this.form4login.reset();
          this.router.navigate(['home']);
        }
        else{
          alert("Nie ma takiego użytkownika!")
        }
      },err=>{
        alert("Coś poszło nie tak");
      })
    }
  }
}
