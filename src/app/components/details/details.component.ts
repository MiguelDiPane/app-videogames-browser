import { HttpService } from './../../services/http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId: string;
  game: Game;
  routeSub: Subscription;
  gameSub: Subscription;

  constructor(private ActivatedRoute:ActivatedRoute, private httpService:HttpService) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params)=>{
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    })
  }


  getGameDetails(id:string){
    this.gameSub = this.httpService.getGameDetails(id).subscribe((gameResp: Game)=>{
      this.game = gameResp;
      setTimeout(()=> {
        this.gameRating = this.game.metacritic;
      },1000);
    });
  }

  ngOnDestroy(){
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
}
