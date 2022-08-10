import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css']
})
export class ApresentationComponent implements OnInit {

  faDownload = faDownload;

  constructor() { }

  ngOnInit(): void {
  }

  show(e: any){
    let card = document.querySelector('#hidden');
    card?.setAttribute('id', 'show');
    let sobre = document.querySelector('.sobre') as HTMLBodyElement ;
    sobre.style.fontSize = "13px";
  }

  hidden(e: any){
    let card = document.querySelector('.nav-card');
    card?.setAttribute('id', 'hidden');
    let sobre = document.querySelector('.sobre') as HTMLBodyElement ;
    sobre.style.fontSize = "1em";
  }

}
