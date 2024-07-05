import {ControlConfigItem} from '../controls/control-config-item.interface';
import {StructureConfigItem} from './structure-config-item.model';
import {FormGroup} from '@angular/forms';

export class ArrayConfigItem extends StructureConfigItem {
  #formGroup: FormGroup;
  constructor(private readonly _key: string, private readonly _children: (StructureConfigItem | ControlConfigItem)[]) {
    super();
    this.#formGroup = new FormGroup(_children.map(c => {
      return c.getControl();
    }));
  }

  key(): string {
    return this._key;
  }

  children(): (StructureConfigItem | ControlConfigItem)[] {
    return this._children;
  }
  getControl(): FormGroup {
    return this.#formGroup;
  }
  toOutput(): {} {
    return [{[this.key()]: this.children().reduce((acc, currValue) => Object.assign(acc, currValue), {})}];
  }
}
