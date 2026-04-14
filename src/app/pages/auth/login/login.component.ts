import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {

      this.error = '';

      this.router.navigate(['/legajos'], {
        state: {
          user: {
            username: this.username,
            role: 'ADMIN'
          }
        }
      });

    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}