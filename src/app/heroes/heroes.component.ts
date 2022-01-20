import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../heroes-data/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  readonly heroes$ = this.heroService.getHeroes$();

  constructor(private readonly heroService: HeroesService) { }

  ngOnInit(): void {
  }

}
