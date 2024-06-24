import {ControlConfigItem} from '../controls/control-config-item.interface';
import {StructureConfigItem} from './structure-config-item.model';

export class ArrayConfigItem extends StructureConfigItem {
  constructor(private readonly _key: string, private readonly _children: (StructureConfigItem | ControlConfigItem)[]) {
    super();
  }

  get key(): string {
    return this._key;
  }

  get children(): (StructureConfigItem | ControlConfigItem)[] {
    return this._children;
  }

  toOutput(): {} {
    return {[this.key]:this.children.map(child =>child.toOutput())};
  }
}