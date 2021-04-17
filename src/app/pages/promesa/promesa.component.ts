import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  usuarios: any;

  constructor() { }

  ngOnInit(): void {

    
    this.obtenerUsusarios().then(datosUsuarios => {
      this.usuarios = datosUsuarios;
      console.log(this.usuarios);
    });

  }

  obtenerUsusarios() {

    const promesa = new Promise((resolve) =>{

      fetch("https://joelmadrid-app.herokuapp.com/usuarios")
      .then(res => res.json())
      .then(res => resolve(res))

    });

    return promesa;

  }

}
