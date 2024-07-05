import {Component, inject} from '@angular/core';
import {FileLoaderComponent} from './file-loader/file-loader.component';
import {GroupConfigItem} from './models/groups/group-config-item.model';
import {ConfigExtractorService} from './config-extractor.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {BehaviorSubject, debounceTime, distinctUntilChanged} from 'rxjs';
import {IsGroupPipe} from './pipes/groups/is-group.pipe';
import {AsGroupPipe} from './pipes/groups/as-group.pipe';
import {IsArrayPipe} from './pipes/array/is-array.pipe';
import {AsArrayPipe} from './pipes/array/as-array.pipe';
import {AsControlPipe} from './pipes/control/as-control.pipe';
import {GroupComponent} from './group/group.component';
import {ArrayComponent} from './array/array.component';
import {ControlComponent} from './control/control.component';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [
    FileLoaderComponent,
    JsonPipe,
    MatDrawerContent,
    MatDrawerContainer,
    AsyncPipe,
    MatDrawer,
    IsGroupPipe,
    AsGroupPipe,
    IsArrayPipe,
    AsArrayPipe,
    AsControlPipe,
    GroupComponent,
    ArrayComponent,
    ControlComponent,
    ReactiveFormsModule
  ],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {

  private configExtractorService = inject(ConfigExtractorService);
  model = new GroupConfigItem('', []);
  private previewSubject = new BehaviorSubject({});
  preview$ = this.previewSubject.asObservable();
  showPreview = false;

  whenContentLoaded(content: string) {
    const input = JSON.parse(content);
    const result = this.configExtractorService.extractConfig(input);
    this.model = new GroupConfigItem('', result);
    this.model.getControl().valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((x) => this.preparePreview(x));
    this.preparePreview(result);
  }

  private preparePreview(input: any) {
    console.log('preview', input);
    const test = {};
    if (Array.isArray(input)) {
      input.forEach((x: any) => Object.assign(test, x.toOutput()));
      this.previewSubject.next(test);
    } else {
      this.previewSubject.next(input);
    }
  }


  togglePreview() {
    this.showPreview = !this.showPreview;
  }

}
