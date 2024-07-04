import {Pipe, PipeTransform} from '@angular/core';
import {ConfigItem} from '../../models/config-item.interface';
import {ControlConfigItem} from '../../models/controls/control-config-item.interface';

@Pipe({
  name: 'asControl',
  standalone: true
})
export class AsControlPipe implements PipeTransform {

  transform(value: ConfigItem): ControlConfigItem {
    return value as ControlConfigItem;
  }

}
