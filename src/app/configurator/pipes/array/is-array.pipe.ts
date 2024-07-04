import {Pipe, PipeTransform} from '@angular/core';
import {ConfigItem} from '../../models/config-item.interface';
import {ArrayConfigItem} from '../../models/groups/array-config-item.model';

@Pipe({
  name: 'isArray',
  standalone: true
})
export class IsArrayPipe implements PipeTransform {

  transform(configItem: ConfigItem): boolean {
    return configItem instanceof ArrayConfigItem;
  }

}
