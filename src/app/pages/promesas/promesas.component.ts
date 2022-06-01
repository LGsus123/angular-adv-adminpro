import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
    //this.getUsuarios();
    /*  const promesa = new Promise((resolve, reject) => {
      if(false){
        resolve('Hola Mundo');
      } else {
        reject('nada puede malir sal');
      }
    });

    promesa.then((mensaje) => {
      console.log('Se acaboooo', mensaje);
    })
    .catch( error => console.error('Error en mi promiscua ', error));
    console.log('fin INIINNININININIT'); */
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
   
  }
}
