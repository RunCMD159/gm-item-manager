import {Component} from '@angular/core';
import {JsonEditorComponent} from '../json-editor/json-editor.component';
import {FileLoaderComponent} from '../file-loader/file-loader.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {BehaviorSubject} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {jsonrepair} from 'jsonrepair';

@Component({
  selector: 'app-json-editor-manager',
  standalone: true,
  imports: [
    JsonEditorComponent,
    FileLoaderComponent,
    MatDrawerContainer,
    MatDrawerContent,
    MatDrawer,
    AsyncPipe,
    JsonPipe,
    MatButton
  ],
  templateUrl: './json-editor-manager.component.html',
  styleUrl: './json-editor-manager.component.scss'
})
export class JsonEditorManagerComponent {

  fileContent: any | undefined = undefined;
  showPreview = false;
  // @ts-ignore
  private previewSubject: BehaviorSubject<string | undefined> = new BehaviorSubject(undefined);
  preview = this.previewSubject.asObservable();

  whenFileContentLoaded(fileContent: string) {
    if (fileContent) {
      try {
        this.fileContent = JSON.parse(fileContent);
        this.previewSubject.next(this.fileContent);
      } catch {
        console.error('Invalid JSON..repairing...');
        try {
          const repairedJson = jsonrepair(fileContent);
          this.fileContent = JSON.parse(repairedJson);
        } catch {
          throw new Error('Invalid JSON in file content');
        }
      }
    }
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
  }

  whenDataChanged(data: string) {
    this.previewSubject.next(data);
  }

  downloadJson() {
    const jsonString = JSON.stringify(this.previewSubject.getValue());
    const blob = new Blob([jsonString], {type: 'application/json'});
    const file = new File([blob], 'data.json', {type: 'application/json'});

    const url = window.URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
