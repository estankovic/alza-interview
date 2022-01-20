import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../heroes-data/heroes.service';
import {Hero} from '../heroes-data/hero.types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  readonly heroes$ = this.heroService.getTopHeroes$();

  constructor(
    private readonly heroService: HeroesService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  onHeroClick(hero: Hero) {
    this.router.navigate(['heroes', hero.id, 'edit']);
  }

}
