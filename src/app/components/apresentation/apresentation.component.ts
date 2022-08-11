import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { __values } from 'tslib';

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

  active(e: any){
    let activeBtn = e.target;
    let allActive = document.getElementsByClassName('active');
    let btnClass = document.getElementsByClassName('.btn-link');
    let btns = document.querySelectorAll('.btn-link');

    activeBtn.classList.add('active');
    console.log(activeBtn);

    // btns.forEach((btn) => {
    //   btn.classList.remove('active');
    // })

  }

}
