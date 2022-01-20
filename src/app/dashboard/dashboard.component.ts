import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HeroesService} from '../heroes-data/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  readonly heroes$ = this.heroService.getTopHeroes$();

  constructor(
    private readonly heroService: HeroesService,
  ) { }

  ngOnInit(): void {
  }
}
