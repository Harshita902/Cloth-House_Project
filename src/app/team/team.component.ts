import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {
        Sno:1,
        Name:"SELENE LEWI",
        image:"assets/team-member-1.png",
        profile:"DESIGNER"
     },
     {
      Sno:2,
      Name:"STANLEY CLARK",
      image:"assets/team-member-2.png",
      profile:"MANAGER",
     },
     {
      Sno:3,
      Name:"FAYE HARRIS",
      image:"assets/team-member-3.png",
      profile:"PHOTOGRAPHER"
     },
     {
      Sno:4,
      Name:"SELENE LEWI",
      image:"assets/team-member-4.png",
      profile:"STYLIST"
     },
     {
      Sno:5,
      Name:"ARTHUR STEVENS",
      image:"assets/team-member-5.png",
      profile:"TAILOR"
     },
     {
      Sno:6,
      Name:"ELAINE PALMER",
      image:"assets/team-member-6.png",
      profile:"TAILOR"
     }
   ]
   show:boolean=true;
   toogle()
   {
     this.show=!this.show
   }
}


