import {Component, Input} from '@angular/core';
import {AsArrayPipe} from '../pipes/array/as-array.pipe';
import {AsControlPipe} from '../pipes/control/as-control.pipe';
import {AsGroupPipe} from '../pipes/groups/as-group.pipe';
import {ControlComponent} from '../control/control.component';
import {GroupComponent} from '../group/group.component';
import {IsArrayPipe} from '../pipes/array/is-array.pipe';
import {IsGroupPipe} from '../pipes/groups/is-group.pipe';
import {JsonPipe} from '@angular/common';
import {ArrayConfigItem} from '../models/groups/array-config-item.model';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [
    AsArrayPipe,
    AsControlPipe,
    AsGroupPipe,
    ControlComponent,
    IsArrayPipe,
    IsGroupPipe,
    JsonPipe
  ],
  templateUrl: './array.component.html',
  styleUrl: './array.component.scss'
})
export class ArrayComponent {
  @Input() item!: ArrayConfigItem;

}
