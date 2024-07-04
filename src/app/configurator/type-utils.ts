import {ConfigItem} from './models/config-item.interface';
import {GroupConfigItem} from './models/groups/group-config-item.model';
import {ArrayConfigItem} from './models/groups/array-config-item.model';
import {ControlConfigItem} from './models/controls/control-config-item.interface';

export const IS_GROUP = (configItem: ConfigItem) => {
  return configItem instanceof GroupConfigItem
}
export const IS_ARRAY = (configItem: ConfigItem) => {
  return configItem instanceof ArrayConfigItem
}
export const IS_CONTROL = (configItem: ConfigItem) => {
  return configItem instanceof ControlConfigItem
}
