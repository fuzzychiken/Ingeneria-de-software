import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../doggystyle-bo/usuario';
@Component({
    selector: 'doggystyle-recuperar-contraseña',
    templateUrl: './recuperar-contraseña.component.html',
    styleUrls: ['./recuperar-contraseña.component.css']
})
export class RecuperarContraseñaComponent implements OnInit {
    constructor(private fb: FormBuilder) { } 
    ;
    formRecuperar: FormGroup;
    formChange: Boolean = false;
    formErrors: Boolean = false;
    usuario: Usuario = new Usuario();
    validacion = {
        'email': { 'required': 'Email Requerido!' },
    };
    ngOnInit() {
        this.formularioRecuperar();
    }
    formularioRecuperar() {
        this.formRecuperar = this.fb.group({
            'email': [this.usuario.email, [Validators.required]]
        });
        this.formRecuperar.valueChanges.subscribe(data => this.onRecuperarValueChanged(data));
        this.onRecuperarValueChanged();
        this.formChange = false;
    }
    onRecuperarValueChanged(data?: any) {
        this.formChange = true;
        if (!this.formRecuperar) {
            return;
        }
        const form = this.formRecuperar;
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




