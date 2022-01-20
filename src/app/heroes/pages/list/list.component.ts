import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HeroesService} from '../../../heroes-data/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Hero} from '../../../heroes-data/hero.types';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  readonly heroes$ = this.heroService.getHeroes$();

  constructor(
    private readonly heroService: HeroesService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  getActiveHero$(): Observable<Hero | undefined> {
    return this.route.paramMap.pipe(
      map(params => parseInt(params.get('id') || '', 10)),
      switchMap(id => this.heroService.getHero$(id))
    )
  }

  onHeroClick(hero: Hero) {
    this.router.navigate(['heroes', hero.id]);
  }

  onDetailsClick(hero: Hero) {
    this.router.navigate(['heroes', hero.id, 'edit']);
  }

}
