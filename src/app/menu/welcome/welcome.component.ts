import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-welcome',
  template: `
    <div class="welcome-container" (click)="redirectToMenu()">
      <h1>WELCOME</h1>
      <p>Please touch to start</p>
    </div>
  `,
  styles: [
    `
      .welcome-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f4f4f4;
        text-align: center;
        font-family: Arial, sans-serif;
        cursor: pointer;
        transition: opacity 5.5s ease; /* Añade una animación suave */
      }
      .welcome-container:active {
        opacity: 0.15; /* Reduce la opacidad al hacer clic */
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.5rem;
        color: #666;
      }
    `,
  ],
  
  imports: [],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  redirectToMenu() {
    this.router.navigate(['/menu']); // Redirige al menú principal
  }
}
