import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-select-sub-type',
  templateUrl: './select-sub-type.page.html',
  styleUrls: ['./select-sub-type.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonCard,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicionado para reconhecer componentes personalizados
})
export class SelectSubTypePage implements OnChanges {
  @Input() selectedCategory: string | null = null;
  @Output() subTypeSelected = new EventEmitter<string>();

  subTypes: string[] = [];

  ngOnChanges(): void {
    this.loadSubTypes();
  }

  private loadSubTypes(): void {
    if (this.selectedCategory) {
      if (this.selectedCategory === 'fundacao') {
        this.subTypes = [
          'Barrete',
          'Bloco',
          'Estaca',
          'Estaca Hélice Contínua',
          'Radier',
          'Sapata Corrida',
          'Sapata Rígida',
          'Sapata',
          'Tubulão Ar Comprimido',
          'Tubulão Céu Aberto',
          'Tubulão',
        ];
      } else if (this.selectedCategory === 'estrutura') {
        this.subTypes = [
          'Pilar',
          'Viga',
          'Laje',
          'Arco',
          'Treliça',
          'Viga Contínua',
          'Flecha',
          'Detalhamento',
        ];
      } else {
        this.subTypes = [];
      }
    } else {
      this.subTypes = [];
    }
  }

  onSubTypeSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target?.value ?? '';
    console.log(`Subtipo selecionado: ${selectedValue}`);
    this.subTypeSelected.emit(selectedValue);
  }
}
