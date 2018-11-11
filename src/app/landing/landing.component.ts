import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  player: YT.Player;

  constructor() { }

  ngOnInit() {}

  private id_SH14: string = 'HC-nruq6dGA';
  private id_SH16: string = 'ZgWVd3GW4Vk';
  private id_SH14_hl: string = 'RkPmmDAIn5c';
  private id_BF: string = 'C_s4dIOXnJY';
 
  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event){
    console.log('player state', event.data);
  }
}
