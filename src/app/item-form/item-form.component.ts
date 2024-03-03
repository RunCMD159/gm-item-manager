import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {map, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private http = inject(HttpClient)

  constructor() {
    this.activatedRoute.data
      .pipe(takeUntilDestroyed(),
        map(config => config['configuration']),
        tap(config =>  this.http.get(config['form'].toString()).subscribe(console.log)))
      .subscribe();
  }
}
