import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../types/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [UsersService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Output() userAdded = new EventEmitter<User>();
  form4create: FormGroup;

  constructor(
    private usersService: UsersService
  ) {
    this.form4create = new FormGroup({
      name : new FormControl(),
      surname : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
    });
  }

  get name() {
    return this.form4create.get('name');
  }

  get surname() {
    return this.form4create.get('surname');
  }

  get email() {
    return this.form4create.get('email');
  }

  get password() {
    return this.form4create.get('password');
  }

  ngOnInit() {
    this.form4create.controls['name'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[A-Z].*"),
    ])

    this.form4create.controls['surname'].setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[A-Z].*"),
    ])

    this.form4create.controls['email'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"),
    ])

    this.form4create.controls['password'].setValidators([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ])
  }

  onSubmit() {  
    if (this.form4create.valid) {
      let newUser = new User(
        this.usersService.getNumberOfUsers() + 1,
        this.form4create.value.name,
        this.form4create.value.surname,
        this.form4create.value.email,
        this.form4create.value.password,
      );
    this.usersService.addUser(newUser);
    this.userAdded.emit(newUser);
    this.form4create.reset();
    }
  }
}
