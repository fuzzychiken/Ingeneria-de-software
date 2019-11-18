import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


import {Usuario} from '../../doggystyle-bo/usuario';



@Component({
  selector: 'doggystyle-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
    constructor(private fb:FormBuilder){};
    formRegistro:FormGroup;
    formChange:Boolean=false;
    formErrors:Boolean=false;
    usuario:Usuario=new Usuario();

    validacion = {
        'nombre': { 'required': 'Nombre Requerido!' },
        'contraseña': { 'required': 'Contraseña Requerido!' },
        'email': { 'required': 'Email Requerido!' }
    };
    ngOnInit(){
     
        this.formularioRegistro();

    }

    formularioRegistro(){
        this.formRegistro=this.fb.group({
            'usuario':[this.usuario.usuario,[Validators.required]],
            'contraseña':[this.usuario.contraseña,[Validators.required]],
            'email':[this.usuario.email,[Validators.required]]
        });
        this.formRegistro.valueChanges.subscribe(data => this.onRegistroValueChanged(data));
        this.onRegistroValueChanged();
        this.formChange = false;

    }

    onRegistroValueChanged(data?: any) {
        this.formChange = true;
        if (!this.formRegistro) { return; }
        const form = this.formRegistro;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validacion[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}