import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonFooter,
  IonSpinner,
} from '@ionic/angular/standalone';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  Material,
  Solo,
} from 'src/app/shared/models/calculation-interface.model';
import { FeedbackPage } from '../../feedback/feedback.page';
import { ErrorNotificationPage } from '../../error-notification/error-notification.page';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.page.html',
  styleUrls: ['./input-fields.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonFooter,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
    FeedbackPage,
    ErrorNotificationPage,
  ],
})
export class InputFieldsPage implements OnChanges {
  @Input() selectedType: string | null = null;
  @Input() selectedSubType: string | null = null;
  @Output() fieldValuesChanged = new EventEmitter<{
    [key: string]: string | number;
  }>();

  fields: string[] = [];
  fieldValues: { [key: string]: string | number } = {};
  materiaisDisponiveis: Material[] = [];
  solosDisponiveis: Solo[] = [];
  dropdownFields: string[] = ['Tipo de Solo', 'Material'];

  // Propriedades adicionais para evitar erros
  isLoading: boolean = false;
  feedback: {
    message: string;
    type: 'error' | 'success' | 'info' | 'warning';
  } | null = null;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedType'] || changes['selectedSubType']) {
      this.fields = this.getFields();
      this.initializeFieldValues();
      this.loadOptions();
    }
  }

  getFields(): string[] {
    // Define os campos com base no tipo selecionado
    if (this.selectedType === 'fundacao') {
      switch (this.selectedSubType) {
        case 'Barrete':
          return ['Profundidade', 'Largura', 'Carga Máxima', 'Tipo de Solo'];
        case 'Bloco':
          return ['Dimensões', 'Carga Máxima', 'Material'];
        case 'Estaca':
          return ['Comprimento', 'Diâmetro', 'Tipo de Solo'];
        case 'Estaca Hélice Contínua':
          return ['Comprimento', 'Diâmetro', 'Material', 'Tipo de Solo'];
        case 'Radier':
          return ['Área', 'Espessura', 'Carga Máxima'];
        case 'Sapata Corrida':
          return ['Comprimento', 'Largura', 'Carga'];
        case 'Sapata Rígida':
          return ['Altura', 'Largura', 'Carga Máxima'];
        case 'Tubulão Ar Comprimido':
          return ['Profundidade', 'Pressão Máxima', 'Tipo de Solo'];
        case 'Tubulão Céu Aberto':
          return ['Profundidade', 'Largura', 'Material'];
        case 'Tubulão':
          return ['Profundidade', 'Diâmetro', 'Tipo de Solo'];
        default:
          return ['Profundidade', 'Largura', 'Altura', 'Carga'];
      }
    } else if (this.selectedType === 'estrutura') {
      switch (this.selectedSubType) {
        case 'Pilar':
          return ['Largura', 'Altura', 'Carga'];
        case 'Viga':
          return ['Comprimento', 'Largura', 'Altura', 'Carga'];
        case 'Laje':
          return ['Área', 'Espessura', 'Carga'];
        case 'Arco':
          return ['Raio', 'Largura', 'Altura', 'Carga'];
        case 'Treliça':
          return ['Número de Nós', 'Número de Barras', 'Cargas', 'Restrições'];
        case 'Viga Contínua':
          return ['Comprimento Total', 'Seções', 'Carga'];
        case 'Flecha':
          return ['Comprimento', 'Carga', 'Material'];
        case 'Detalhamento':
          return ['Tipo de Detalhe', 'Dimensões', 'Carga'];
        default:
          return [];
      }
    } else {
      return [];
    }
  }

  onFieldChange(fieldName: string, event: any): void {
    this.fieldValues[fieldName] = event.detail.value;
    this.fieldValuesChanged.emit(this.fieldValues);
  }

  onSelectChange(fieldName: string, event: any): void {
    this.fieldValues[fieldName] = event.detail.value;
    this.fieldValuesChanged.emit(this.fieldValues);
  }

  private initializeFieldValues(): void {
    this.fieldValues = {};
    this.fields.forEach((field) => {
      this.fieldValues[field] = '';
    });
  }

  private loadOptions(): void {
    if (this.fields.includes('Material')) {
      this.apiService.getMateriaisDisponiveis().subscribe(
        (data) => {
          this.materiaisDisponiveis = data.materiais;
        },
        (error: any) => {
          console.error('Erro ao obter materiais disponíveis:', error);
        }
      );
    }

    if (this.fields.includes('Tipo de Solo')) {
      this.apiService.getSolosDisponiveis().subscribe(
        (data) => {
          this.solosDisponiveis = data.solos;
        },
        (error: any) => {
          console.error('Erro ao obter solos disponíveis:', error);
        }
      );
    }
  }

  startLoading(): void {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 2000); // Exemplo de temporizador para simular carregamento
  }
}
