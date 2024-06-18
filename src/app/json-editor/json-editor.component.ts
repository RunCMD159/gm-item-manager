import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonEditorOptions, NgJsonEditorModule} from 'ang-jsoneditor';
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

  constructor(private http: HttpClient) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    //this.options.mode = 'code'; //set only one mode
  }

  whenJsonChange(data: string) {
    this.dataChanged.emit(data);
  }
}
