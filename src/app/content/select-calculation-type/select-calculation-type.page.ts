import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar , IonSelect,IonLabel,IonItem,IonCard,IonIcon,IonSelectOption} from '@ionic/angular/standalone';
import { CalculationType } from 'src/app/shared/models/calc-type.model';

@Component({
  selector: 'app-select-calculation-type',
  templateUrl: './select-calculation-type.page.html',
  styleUrls: ['./select-calculation-type.page.scss'],
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
    FormsModule,
  ],
})
export class SelectCalculationTypePage  implements OnInit {
  @Output() typeSelected = new EventEmitter<string>();

  calculationTypes: CalculationType[] = [
    { id: 'fundacao', displayName: 'Fundação' },
    { id: 'estrutura', displayName: 'Estrutura' },
    // Outros tipos podem ser adicionados conforme necessário
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectType(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target?.value ?? '';
    console.log(`Tipo de cálculo selecionado: ${selectedValue}`);
    this.typeSelected.emit(selectedValue);
  }
}


