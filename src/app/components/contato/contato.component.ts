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

  copied(){
    let copyText = document.getElementById('btn-email') as HTMLInputElement;

    navigator.clipboard.writeText(copyText.value);

    copyText.classList.add('active');
    window.getSelection()?.removeAllRanges();
    setTimeout(function(){
      copyText.classList.remove('active');
    }, 2500);

  }

}
