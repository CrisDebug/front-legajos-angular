import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recovery-password.component.html'
})
export class RecoveryPasswordComponent {

  email: string = '';
  message: string = '';

  sendRecovery() {

    if (!this.email) {
      this.message = 'Ingresa un email válido';
      return;
    }

    // 🔐 simulación
    this.message = 'Se ha enviado un enlace de recuperación a tu email';
  }
}