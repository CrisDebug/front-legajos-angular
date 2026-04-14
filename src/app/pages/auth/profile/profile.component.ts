import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user = {
    username: 'admin',
    email: 'admin@system.com',
    role: 'ADMIN'
  };

}