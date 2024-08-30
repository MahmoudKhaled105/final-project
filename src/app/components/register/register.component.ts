import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegService } from '../../service/reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private _RegService: RegService, private _Router: Router) {}

  errMess:string='';

  registerFrom: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      ),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      ),
    ]),
    checkbox: new FormControl('', [Validators.required]),
  });

  handeleRegister(): void {
    if (this.registerFrom.valid) {
      this._RegService.registerForm(this.registerFrom.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            //now you navigate user to login page if register is succssful and you can send any thing in url if you want by type in navigate(['', here ])
            this._Router.navigate(['/login'])
          }
        },
        error: (err) => {
          this.errMess = err.error.message;
        },
      });
    }
  }
}
