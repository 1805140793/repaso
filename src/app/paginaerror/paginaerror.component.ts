import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginaerror',
  templateUrl: './paginaerror.component.html',
  styleUrls: ['./paginaerror.component.css']
})
export class PaginaerrorComponent implements OnInit {

  imagen: string="https://marketerosdehoy.com/wp-content/uploads/2018/10/error-404-1280x720.png"
  constructor() { }

  ngOnInit(): void {
  }

}
