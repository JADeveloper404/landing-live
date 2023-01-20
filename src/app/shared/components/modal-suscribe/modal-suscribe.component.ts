import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/services/base.service';
import { IDataEmail, Response } from '../../interfaces/IDataEmail.interface';

@Component({
  selector: 'app-modal-suscribe',
  templateUrl: './modal-suscribe.component.html',
  styleUrls: ['./modal-suscribe.component.scss'],
})
export class ModalSuscribeComponent implements OnInit {
  load = false;

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
      indicativo: ['57', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      autoriza: [false, Validators.required],
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

  validateCelIndicativo() {
    if (
      (this.formSuscribe.controls['celular'].invalid &&
        this.formSuscribe.controls['celular'].touched) ||
      (this.formSuscribe.controls['indicativo'].invalid &&
        this.formSuscribe.controls['indicativo'].touched)
    ) {
      return true;
    }

    return false;
  }

  sendEmail() {
    this.load = true;
    const data: IDataEmail = this.formSuscribe.getRawValue();
    delete data.autoriza;

    this.baseService.postMethod('users', data).subscribe((res) => {
      if (res) {
        this.formSuscribe.reset({
          indicativo: '57',
          autoriza: false,
        });
        this.load = false;
      }
    });
  }
}
