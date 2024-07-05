import {Component, Input} from '@angular/core';
import {ControlConfigItem} from '../models/controls/control-config-item.interface';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {
  @Input() item!: ControlConfigItem;

}
