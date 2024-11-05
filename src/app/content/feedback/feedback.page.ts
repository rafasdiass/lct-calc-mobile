import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class FeedbackPage {
  // Propriedades de entrada para controlar as mensagens de feedback
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';

  // Método auxiliar para retornar a classe CSS com base no tipo de mensagem
  getFeedbackClass(): string {
    switch (this.type) {
      case 'success':
        return 'feedback-success';
      case 'error':
        return 'feedback-error';
      case 'warning':
        return 'feedback-warning';
      default:
        return 'feedback-info';
    }
  }

  // Método para verificar se há mensagem a ser exibida
  hasMessage(): boolean {
    return this.message.trim().length > 0;
  }
}
