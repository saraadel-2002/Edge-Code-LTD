import { Component } from '@angular/core';

@Component({
  selector: 'app-join-our-team',
  templateUrl: './join-our-team.component.html',
  styleUrls: ['./join-our-team.component.css']
})
export class JoinOurTeamComponent {
  countries: string[] = ['Egypt', 'United State', '', '', ''];
  selectedCountry: string = '';

  isOn = false;

  toggle() {
    console.log(this.isOn ? 'مفعل' : 'مغلق');
  }

}
