import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AppConfigService} from "./app-config.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gm-item-manager';
  routes ;

  private appConfig = inject(AppConfigService)

  constructor() {
    this.routes = this.appConfig.routes;
  }
}
