import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FileInputComponent } from '../../components/file-input/file-input.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FileInputComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  imageURL: string = '';
  uploadForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }
  ngOnInit(): void { }

  showPreview(event: { target: HTMLInputElement; }) {
    if(event.target.files){
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        avatar: file
      });
      const avatar = this.uploadForm.get('avatar');
      if(avatar){
        avatar.updateValueAndValidity()
        const reader = new FileReader();
        reader.onload = () => {
          this.imageURL = reader.result as string;
        }
        reader.readAsDataURL(file)
      }
    }
  }

  removeImage(){
    this.imageURL = '';
  }

  submit() {
    console.log(this.uploadForm.value)
  }

}
