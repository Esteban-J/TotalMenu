import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-thank-you',
  template: `
    <div class="thank-you-container">
      <h1>Thank you for your purchase!</h1>
      <p>Redirecting to the main menu...</p>
    </div>
  `,
  styles: [
    `
      .thank-you-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f4f4f4;
        text-align: center;
        font-family: Arial, sans-serif;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #4caf50;
      }
      p {
        font-size: 1.5rem;
        color: #666;
      }
    `,
  ],
})
export class ThankYouScreenComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    // Redirige a la pantalla de bienvenida después de 5 segundos
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
}
