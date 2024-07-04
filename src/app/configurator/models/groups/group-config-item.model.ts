import {ControlConfigItem} from '../controls/control-config-item.interface';
import {StructureConfigItem} from './structure-config-item.model';

export class GroupConfigItem extends StructureConfigItem {
  constructor(private readonly _key: string, private readonly _children: (StructureConfigItem | ControlConfigItem)[]) {
    super();
  }

  key(): string {
    return this._key;
  }

  children(): (StructureConfigItem | ControlConfigItem)[] {
    return this._children;
  }




  toOutput(): {} {
    return {[this.key()]: this.children().map(child => child.toOutput())};
  }
}
