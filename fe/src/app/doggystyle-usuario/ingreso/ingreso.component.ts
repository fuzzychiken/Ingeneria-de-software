import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


import {Usuario} from '../../doggystyle-bo/usuario';

@Component({
  selector: 'doggystyle-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

    constructor(private fb:FormBuilder){};
    formIngreso:FormGroup;
    formChange:Boolean=false;
    formErrors:Boolean=false;
    usuario:Usuario=new Usuario();

    validacion = {
        'nombre': { 'required': 'Nombre Requerido!' },
        'contraseña': { 'required': 'Contraseña Requerido!' },
    };

    ngOnInit(){
     
        this.formularioIngreso();

    }

    formularioIngreso(){
        this.formIngreso=this.fb.group({
            'usuario':[this.usuario.usuario,[Validators.required]],
            'contraseña':[this.usuario.contraseña,[Validators.required]]
        });
        this.formIngreso.valueChanges.subscribe(data => this.onIngresoValueChanged(data));
        this.onIngresoValueChanged();
        this.formChange = false;

    }

    onIngresoValueChanged(data?: any) {
        this.formChange = true;
        if (!this.formIngreso) { return; }
        const form = this.formIngreso;

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