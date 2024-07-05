import {Component, Input} from '@angular/core';
import {GroupConfigItem} from '../models/groups/group-config-item.model';
import {AsArrayPipe} from '../pipes/array/as-array.pipe';
import {AsControlPipe} from '../pipes/control/as-control.pipe';
import {AsGroupPipe} from '../pipes/groups/as-group.pipe';
import {IsArrayPipe} from '../pipes/array/is-array.pipe';
import {IsGroupPipe} from '../pipes/groups/is-group.pipe';
import {ArrayComponent} from '../array/array.component';
import {ControlComponent} from '../control/control.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    AsArrayPipe,
    AsControlPipe,
    AsGroupPipe,
    IsArrayPipe,
    IsGroupPipe,
    ArrayComponent,
    ControlComponent
  ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {
  @Input() item!: GroupConfigItem;

}
