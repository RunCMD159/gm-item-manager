import {Pipe, PipeTransform} from '@angular/core';
import {ConfigItem} from '../../models/config-item.interface';
import {ArrayConfigItem} from '../../models/groups/array-config-item.model';

@Pipe({
  name: 'asArray',
  standalone: true
})
export class AsArrayPipe implements PipeTransform {

  transform(value: ConfigItem): ArrayConfigItem {
    return value as ArrayConfigItem;
  }

}
