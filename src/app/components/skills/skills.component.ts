import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {

    const skillsContent = document.getElementsByClassName('skills-content'), skillsHeader = document.querySelectorAll('.skills-header');

    function toggleSkills(this: any){

      let itemClass = this.parentNode.className

      for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close';
      }

      if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open';
      }

    }

    skillsHeader.forEach((el) =>{
      el.addEventListener('click', toggleSkills)
    })

  }

}
