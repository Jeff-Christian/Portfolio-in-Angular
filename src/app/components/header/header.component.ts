import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor(
    RouterModule: Router,
    AppRoutingModule: AppRoutingModule
  ) { }

  ngOnInit(): void {
  }

}
