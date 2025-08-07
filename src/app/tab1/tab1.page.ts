import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1-kit.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    SelectModule,
    MultiSelectModule,
    ListboxModule,
    DatePickerModule,
    CheckboxModule,
    RadioButtonModule,
    ToggleSwitchModule,
    TextareaModule,
    CardModule,
    PanelModule,
    DividerModule,
    ChipModule,
    BadgeModule,
    PasswordModule,
    FloatLabelModule
  ]
})
export class Tab1Page {
  // Form values
  inputValue: string = '';
  numberValue: number | null = null;
  phoneValue: string = '';
  selectedCity: any = null;
  selectedCities: any[] = [];
  selectedOption: any = null;
  dateValue: Date | null = null;
  checkboxValue: boolean = false;
  radioValue: string = 'Chicago';
  switchValue: boolean = false;
  textareaValue: string = '';
  passwordValue: string = '';

  // Dropdown options
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  // Listbox options
  listOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
    { label: 'Option 4', value: 'opt4' },
    { label: 'Option 5', value: 'opt5' }
  ];

  constructor() {}

}
