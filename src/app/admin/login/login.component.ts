import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Necesario para las directivas como *ngIf y *ngFor

@Component({
  standalone: true, // Esto indica que el componente no pertenece a ningún módulo global
  selector: 'app-admin-login',
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <h2>Admin Login</h2>
        <div>
          <label for="username">Username:</label>
          <input id="username" type="text" formControlName="username" />
          <div *ngIf="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
            Username is required.
          </div>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" type="password" formControlName="password" />
          <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
            Password is required.
          </div>
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>
    </div>
  `,
  styles: [
    `
      .login-container {
        width: 300px;
        margin: 0 auto;
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      input {
        display: block;
        width: 100%;
        margin-bottom: 1em;
        padding: 0.5em;
        font-size: 1em;
      }
      button {
        width: 100%;
        padding: 0.5em;
        font-size: 1em;
      }
    `,
  ],
  imports: [ReactiveFormsModule, CommonModule], // Importamos los módulos necesarios
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);
    }
  }
}
