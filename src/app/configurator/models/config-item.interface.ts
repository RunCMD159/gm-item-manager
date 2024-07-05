import {AbstractControl} from '@angular/forms';

export interface ConfigItem {
  toOutput(): {};

  getControl(): AbstractControl;
}
