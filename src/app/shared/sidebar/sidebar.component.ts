import { Component, OnInit } from '@angular/core';
import { SiderbarService } from "../../services/siderbar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sidebarService: SiderbarService) {
    this.menuItems = this.sidebarService.menu;
    console.log(this.menuItems);
   }

  ngOnInit(): void {
  }

}
