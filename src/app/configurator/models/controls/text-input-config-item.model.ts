import {ControlConfigItem} from './control-config-item.interface';

export class TextInputConfigItem extends ControlConfigItem {
  constructor(private readonly _key: string, private readonly _value: any) {
    super()
  }

  key(): string {
    return this._key;
  }

  value(): any {
    return this._value;
  }

  toOutput(): {[key:string]:string} {
    return {[this.key()]:this.value()};
  }



}
