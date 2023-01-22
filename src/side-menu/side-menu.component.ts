import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})

export class SideMenuComponent {
  isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
};
