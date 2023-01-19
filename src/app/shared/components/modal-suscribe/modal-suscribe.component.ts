import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/services/base.service';
import { IDataEmail } from '../../interfaces/IDataEmail.interface';

@Component({
  selector: 'app-modal-suscribe',
  templateUrl: './modal-suscribe.component.html',
  styleUrls: ['./modal-suscribe.component.scss'],
})
export class ModalSuscribeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalSuscribeComponent>,
    private formBuilder: FormBuilder,
    private baseService: BaseService
  ) {
    this.buildForm();
  }

  formSuscribe!: FormGroup;

  ngOnInit(): void {}

  buildForm() {
    this.formSuscribe = this.formBuilder.group({
      nombre: ['', Validators.required],
      celular: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      correo: ['', [Validators.required, Validators.email]],
      autoriza: [null, Validators.required],
    });
  }

  validateInput(name: string) {
    if (
      this.formSuscribe.controls[name].invalid &&
      this.formSuscribe.controls[name].touched
    ) {
      return true;
    }

    return false;
  }

  sendEmail() {
    const data: IDataEmail = this.formSuscribe.getRawValue();
    console.log('data: ', data);
  }
}
