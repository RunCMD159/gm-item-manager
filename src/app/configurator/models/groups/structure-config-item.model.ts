import {ConfigItem} from '../config-item.interface';
import {ControlConfigItem} from '../controls/control-config-item.interface';
import {AbstractControl, FormGroup} from '@angular/forms';

export abstract class StructureConfigItem implements ConfigItem {
  abstract toOutput(): {}

  abstract key(): string

  abstract children(): (StructureConfigItem | ControlConfigItem)[]

  abstract getControl(): AbstractControl;

}
