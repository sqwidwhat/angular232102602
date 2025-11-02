import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  ngOnInit() {
    const registerButton: HTMLElement | null = document.getElementById('register');
    const loginButton: HTMLElement | null = document.getElementById('login');
    const container: HTMLElement | null = document.getElementById('container');

    if (registerButton && loginButton && container) {
      registerButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      loginButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    }
  }
}
