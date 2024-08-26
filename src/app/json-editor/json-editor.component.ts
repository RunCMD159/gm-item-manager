import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {JsonEditorOptions, NgJsonEditorModule,JsonEditorComponent as EditorComponent} from 'ang-jsoneditor';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-json-editor',
  standalone: true,
  imports: [
    NgJsonEditorModule
  ],
  templateUrl: './json-editor.component.html',
  styleUrl: './json-editor.component.scss'
})
export class JsonEditorComponent {
  public editorOptions: JsonEditorOptions;
  @Input() data!: any;
  @Output() dataChanged = new EventEmitter<string>();

  // @ts-ignore
  @ViewChild('editor', {static: true}) editor: EditorComponent;

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mainMenuBar = true;
    this.editorOptions.navigationBar = true;
    this.editorOptions.statusBar = true;
  }

  changeMode(mode: 'code' | 'text' | 'tree' | 'view') {
    this.editor.setMode(mode)
  }

  whenJsonChange(data: string) {
    this.dataChanged.emit(data);
  }
}
