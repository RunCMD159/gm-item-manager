import {Pipe, PipeTransform} from '@angular/core';
import {ConfigItem} from '../../models/config-item.interface';
import {ControlConfigItem} from '../../models/controls/control-config-item.interface';

@Pipe({
  name: 'isControl',
  standalone: true
})
export class IsControlPipe implements PipeTransform {

  transform(configItem: ConfigItem): boolean {
    return configItem instanceof ControlConfigItem;
  }

}
