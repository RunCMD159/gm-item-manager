import { Pipe, PipeTransform } from '@angular/core';
import {ConfigItem} from '../../models/config-item.interface';
import {GroupConfigItem} from '../../models/groups/group-config-item.model';

@Pipe({
  name: 'asGroup',
  standalone: true
})
export class AsGroupPipe implements PipeTransform {

  transform(value: ConfigItem): GroupConfigItem {
    return value as GroupConfigItem;
  }

}
