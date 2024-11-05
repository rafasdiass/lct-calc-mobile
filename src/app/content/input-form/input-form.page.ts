import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel, IonButton, IonFooter, IonCard } from '@ionic/angular/standalone';
import { FeedbackPage } from "../feedback/feedback.page";
import { ErrorNotificationPage } from "../error-notification/error-notification.page";
import { LoadingIndicatorPage } from "../loading-indicator/loading-indicator.page";
import { SelectCalculationTypePage } from "../select-calculation-type/select-calculation-type.page";
import { InputFieldsPage } from "./input-fields/input-fields.page";
import { SelectSubTypePage } from "../select-sub-type/select-sub-type.page";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
  standalone: true,
  imports: [
    IonCard, IonFooter, IonButton, IonLabel, IonItem, IonIcon, IonContent,
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    FeedbackPage, ErrorNotificationPage, LoadingIndicatorPage, 
    SelectCalculationTypePage, InputFieldsPage, SelectSubTypePage
  ],
})
export class InputFormPage {
  isLoading: boolean = false;
  selectedType: string | null = null;
  selectedSubType: string | null = null;
  calculationData: { [key: string]: string | number } = {};
  feedback: { message: string; type: 'success' | 'error' | 'info' } | null = null;
  errorMessage: string = ''; // Propriedade para a mensagem de erro

  onTypeSelected(type: string): void {
    this.selectedType = type;
    this.selectedSubType = null; // Resetar subtipo ao mudar de tipo principal
    console.log(`Tipo de cálculo selecionado: ${type}`);
  }

  startLoading() {
    this.isLoading = true;
  }

  stopLoading() {
    this.isLoading = false;
  }

  onSubTypeSelected(subType: string): void {
    this.selectedSubType = subType;
    console.log(`Subtipo de cálculo selecionado: ${subType}`);
  }

  onFieldValuesChanged(values: { [key: string]: string | number }): void {
    this.calculationData = values;
    console.log('Dados atualizados:', this.calculationData);
  }

  onFeedbackReceived(feedback: { message: string; type: 'success' | 'error' | 'info' }): void {
    this.feedback = feedback;
  }

  setError(message: string): void {
    this.errorMessage = message;
  }
}
