import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth/auth.service';
import { AppUser } from '../models/AppUser';
@Component({
  selector: 'bs-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgbDropdownModule],
  templateUrl: './bs-navbar.component.html',
  styleUrl: './bs-navbar.component.css'
})
export class BsNavbarComponent {
  user: AppUser| null | undefined;
  constructor(public readonly auth: AuthService) {
    
  }

  async login() {
      this.user = await this.auth.login();
  }
 
  logout() {
    this.auth.logout();
  }

}
