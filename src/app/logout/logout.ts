import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    // Hapus cookie atau token autentikasi
    this.cookieService.delete('auth-token'); // Hapus spesifik token
    this.cookieService.deleteAll(); // Hapus semua cookies

    // Optional: Clear localStorage/sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Arahkan ke halaman login
    this.router.navigate(['/login']);
  }
}
