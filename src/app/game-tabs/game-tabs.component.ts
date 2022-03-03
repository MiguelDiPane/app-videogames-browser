import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() gameRating: number;
  @Input() game: Game;

  constructor() { }

  ngOnInit(): void {
  }

    //Retorna el color segun el voto dado al juego
    getColor(value: number):string{
      if(value > 75){
        return '#5ee432';
      }
      else if(value > 50){
        return '#fffa50'; //orange
      }
      else if(value > 30){
        return '#f7aa38';
      }
      else{
        return '#ef4655';
      }
    }
  
}
