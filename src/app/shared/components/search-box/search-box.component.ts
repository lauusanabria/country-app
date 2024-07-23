import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = 'Search';

  @Output()
  private onValue: EventEmitter<string> = new EventEmitter();

  onSearchBoxChange(value: string): void {
    this.onValue.emit(value);
  }
}
