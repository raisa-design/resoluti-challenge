import { Component } from '@angular/core';


import { InputComponent } from '../../components/input/input.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputSelectComponent } from '../../components/input-select/input-select.component';
import { InputOption } from '../../types/InputOption';
import { getBrazilUF } from '../../utils/UF';
import { ButtonVariant } from '../../types/ButtonVariant';
import { Address } from '../../types/Adress';
import { CommonModule } from '@angular/common';
import { Contact } from '../../types/Contact';

@Component({
  selector: 'app-pf-register',
  standalone: true,
  imports: [InputComponent, DividerComponent, ButtonComponent, InputSelectComponent, CommonModule],
  templateUrl: './pf-register.component.html',
  styleUrl: './pf-register.component.css'
})
export class PfRegisterComponent {
  stateList: InputOption[] = getBrazilUF()
  contactTypes: InputOption[] = [{label: 'Email', value: 'email'}, {label: 'Telefone', value: 'phone'}]
  dangerVariant: ButtonVariant = ButtonVariant.danger

  addressList: Address[] = [{
    id: 0,
    cep: 0,
    city: '',
    complement: '',
    number: 0,
    state: '',
    street: ''
  }]

  contactList: Contact[] = [{
    id: 0,
    name: '',
    contact: '',
    type: 'email'
  }]

  addAddress(){
    this.addressList.push({
      id:  Math.floor(Math.random() * 999),
      cep: 0,
      city: '',
      complement: '',
      number: 0,
      state: '',
      street: ''
    });
  }

  removeAddress(removeId: number){
    this.addressList = this.addressList.filter((item) => item.id !== removeId);
  }

  addContact(){
    this.contactList.push({
      id:  Math.floor(Math.random() * 999),
      name: '',
      contact: '',
      type: 'email'
    });
  }

  removeContact(removeId: number){
    this.contactList = this.contactList.filter((item) => item.id !== removeId);
  }
}
