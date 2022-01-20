import { Injectable } from '@angular/core';
import {Hero} from './hero.types';
import {BehaviorSubject, Observable} from 'rxjs';
import {data} from './hero.data';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesSubject$ = new BehaviorSubject<Hero[]>(data);

  heroes$ = this.heroesSubject$.asObservable();

  constructor() { }

  getHeroes$(): Observable<Hero[]> {
    return this.heroes$;
  }

  getTopHeroes$(): Observable<Hero[]> {
    return this.getHeroes$().pipe(
      map(heroes => [...heroes].sort((a, b) => b.score - a.score).slice(0, 3))
    );
  }

  updateHero(hero: Hero) {
    const heroes = [...this.heroesSubject$.getValue()];
    const heroIndex = heroes.findIndex(h => hero.id === h.id);
    heroes.splice(heroIndex, 1, hero);

    this.heroesSubject$.next(heroes);
  }

  removeHero(id: number) {
    const heroes = [...this.heroesSubject$.getValue()];
    const heroIndex = heroes.findIndex(h => id === h.id);
    heroes.splice(heroIndex, 1);

    this.heroesSubject$.next(heroes);
  }

  getHero$(id: number): Observable<Hero | undefined> {
    return this.getHeroes$().pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

}
