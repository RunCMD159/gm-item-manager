import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {JsonEditorManagerComponent} from './json-editor-manager/json-editor-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonEditorManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gm-item-manager';

}
