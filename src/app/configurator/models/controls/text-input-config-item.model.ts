import {ControlConfigItem} from './control-config-item.interface';
import {FormArray, FormControl} from '@angular/forms';

export class TextInputConfigItem extends ControlConfigItem {
  #controlsArray: FormArray;

  constructor(private readonly _key: string, private readonly _value: any) {
    super();
    this.#controlsArray = new FormArray<FormControl>([
       new FormControl<any>(_key),
      new FormControl<any>(_value)
    ]);
  }

  key(): string {
    return this._key;
  }

  value(): any {
    return this._value;
  }

  getControl(): FormArray<FormControl> {
    return this.#controlsArray;
  }

  toOutput(): { [key: string]: string } {
    return {[this.key()]: this.value()};
  }


}
