import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FormConfiguration} from "./form-configuration.types";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {FormBuilderComponent} from "./form-builder/form-builder.component";

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    FormBuilderComponent,
  ],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private http = inject(HttpClient)

  private formConfigurationSubject: BehaviorSubject<FormConfiguration | undefined> = new BehaviorSubject<FormConfiguration | undefined>(undefined);
  public formConfiguration$ = this.formConfigurationSubject.asObservable();

  constructor() {
    this.activatedRoute.data
      .pipe(takeUntilDestroyed(),
        map(config => config['configuration']),
        map(config => this.http.get(config['form'].toString())
          .subscribe((form) => this.formConfigurationSubject.next(form as FormConfiguration)))
      ).subscribe();
  }
}
