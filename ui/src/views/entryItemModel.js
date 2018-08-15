import Event from '../utils/event';

export default class EntryItemModel {
  constructor(obj) {
    this.valueChangeObserver = new Event(null);
    Object.keys(obj).forEach((key) => {
      let value;
      Object.defineProperty(this, key, {
        set(newValue) {
          value = newValue;
          this.valueChangeObserver.notify();
        },
        get() {
          return value;
        },
        enumerable: true,
      });
    });
    Object.keys(obj).forEach((key) => {
      this[key] = obj[key];
    });
  }
}