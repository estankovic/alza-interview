import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HeroesService} from '../../../heroes-data/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../../../heroes-data/hero.types';
import {map, switchMap, tap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    score: new FormControl(0)
  })

  readonly hero$ = this.route.paramMap.pipe(
    map(params => parseInt(params.get('id') || '', 10)),
    switchMap(id => this.heroService.getHero$(id)),
    tap(hero => {
      if (hero) {
        this.form.setValue(hero);
      }
    })
  );

  constructor(
    private readonly heroService: HeroesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    const hero: Hero = this.form.getRawValue();
    this.heroService.updateHero(hero);

    this.router.navigate(['heroes', hero.id]);
  }
}
