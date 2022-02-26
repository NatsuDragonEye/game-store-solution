import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = 'Game Store';
  public headerOptions: string[] = [
    "Jogos",
    "Hardware",
    "Serviços",
    "Notícias",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
