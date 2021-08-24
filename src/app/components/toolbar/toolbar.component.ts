import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() evChange: EventEmitter<any> = new EventEmitter();
  @Input() set isOpened(data: boolean) {
    if (data) {
      this.isOpen = true;
    } else {
      this.close();
    }
  }

  @Input() id: any;
  @Input() rotate: any;
  @Input() light: any;
  @Input() set hide(data: boolean) {
    if (data) {
      this.isOpen = false;
    }
  }
  
  isOpen: any;

  changeIsOpenState(event: MouseEvent) {
    this.stopEvent(event);
    this.isOpen = !this.isOpen;
    this.evChange.emit(this.id);
  }

  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  close(event?: MouseEvent) {
    if (event) {
      this.stopEvent(event);
    }
    this.isOpen = false;
  }
}
