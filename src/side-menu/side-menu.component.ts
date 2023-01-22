import {Component, EventEmitter, Output} from '@angular/core';
import { transition, trigger, animate, style } from '@angular/animations'

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations: [
    trigger('menuAnimation', [
        transition(':enter', [
          style({ width: '0' }),
          animate('500ms', style({ width: '300px' }))
        ]),
        transition(':leave', [
          animate('500ms', style({ width: '0' }))
        ])
      ])
  ]
})

export class SideMenuComponent {
  isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
};
