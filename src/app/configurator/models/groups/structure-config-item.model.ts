import {ConfigItem} from '../config-item.interface';

export abstract class StructureConfigItem implements ConfigItem {
  abstract toOutput(): {}
}
