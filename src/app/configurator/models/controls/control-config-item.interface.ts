import {ConfigItem} from '../config-item.interface';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

export abstract class ControlConfigItem implements ConfigItem {
  abstract toOutput(): {}

  abstract key(): string;

  abstract value(): any;

  abstract getControl(): FormArray<FormControl>;
}
