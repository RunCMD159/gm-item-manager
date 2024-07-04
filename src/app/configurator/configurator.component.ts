import {Component, inject} from '@angular/core';
import {FileLoaderComponent} from './file-loader/file-loader.component';
import {GroupConfigItem} from './models/groups/group-config-item.model';
import {ConfigExtractorService} from './config-extractor.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {BehaviorSubject} from 'rxjs';
import {IS_GROUP} from './type-utils';
import {IsGroupPipe} from './pipes/groups/is-group.pipe';
import {AsGroupPipe} from './pipes/groups/as-group.pipe';
import {IsArrayPipe} from './pipes/array/is-array.pipe';
import {AsArrayPipe} from './pipes/array/as-array.pipe';
import {AsControlPipe} from './pipes/control/as-control.pipe';

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
    AsControlPipe
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
    const test = {};
    result.forEach(x => Object.assign(test, x.toOutput()));
    this.previewSubject.next(test);
  }


  togglePreview() {
    this.showPreview = !this.showPreview;
  }

  protected readonly IS_GROUP = IS_GROUP;
}
