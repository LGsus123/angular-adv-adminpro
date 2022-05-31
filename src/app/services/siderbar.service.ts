import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {

  menu: any[] = [
    {
      titulo: 'Dashboard!!!',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/' },
        {titulo: 'ProgresBar', url: 'progress' },
        {titulo: 'Gráficas', url: 'grafica1' },
      ]
      }
  ];
  constructor() { }
}
