import { Component, OnInit } from '@angular/core';
import { faInstagram, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  fainstagram = faInstagram;
  fawhatsapp = faWhatsapp;
  fatelegram = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
