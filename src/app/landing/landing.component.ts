import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  player: YT.Player;

  id_SH14: string = 'HC-nruq6dGA';
  id_SH16: string = 'ZgWVd3GW4Vk';
  id_SH14_hl: string = 'RkPmmDAIn5c';
  id_BF: string = 'C_s4dIOXnJY';

  name: string;
  mail: string;
  textcontent: string;

  constructor() { 
    this.id_SH14 = 'HC-nruq6dGA';
    this.id_SH16 = 'ZgWVd3GW4Vk';
    this.id_SH14_hl = 'RkPmmDAIn5c';
    this.id_BF = 'C_s4dIOXnJY';
  }

  ngOnInit() {}

 
  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event){
    console.log('player state', event.data);
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.mail}. My message is ${this.textcontent}`;
    alert(allInfo);
      
  }
}
