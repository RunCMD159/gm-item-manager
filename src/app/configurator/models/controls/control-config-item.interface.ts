import {ConfigItem} from '../config-item.interface';

export abstract class ControlConfigItem implements ConfigItem {
  abstract toOutput(): {}
  abstract key():string;
  abstract value(): any;
}
