import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  registerationForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    }, this.passwordMatchingValidator);
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {

    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :

      { notmatched: true }

  };
  //all methods validators
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  };

  get email(){
    return this.registerationForm.get('email') as FormControl;
  };

  get password(){
    return this.registerationForm.get('password') as FormControl;
  };

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  };

  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  };
  onSubmit(){
  console.log(this.registerationForm);
  }
  onBack(){
    this.router.navigate(['/']);
  }
}
