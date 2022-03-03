<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { APIResponse } from './../../models';
import { HttpService } from './../../services/http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
<<<<<<< Updated upstream
  
  constructor() { }

  ngOnInit(): void {
  }

=======
  public games: Array<Game>;
  private routeSub: Subscription;
  private gameSub: Subscription;
  
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('metacrit',params['game-search']);
      }
      else{
        this.searchGames('metacrit');
      }
    })
  }

  searchGames(sort: string, search?: string):void{
    this.gameSub = this.httpService.getGameList(sort,search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    });
  }

  openGameDetails(id:string){
    //Ruta a details con parametro id
    this.router.navigate(['details',id]);
  }

  ngOnDestroy(){
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
>>>>>>> Stashed changes
}
