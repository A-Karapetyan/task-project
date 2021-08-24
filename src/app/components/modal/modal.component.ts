import { Component, Input, EventEmitter, Output, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector    : 'app-modal',
  templateUrl : './modal.component.html',
  styleUrls   : ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close: EventEmitter<undefined> = new EventEmitter();

  @Input() alignCenter: boolean = true;

  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      // tslint:disable-next-line: deprecation
      if (event.keyCode === 27) {
        this.close.emit();
      }
    }

  ngOnInit(): void {
    document.body.classList.add('P-hidden');
  }
  
  ngOnDestroy(): void {
    document.body.classList.remove('P-hidden');
    document.body.classList.add('P-initial');
  }
}
