import {Component} from '@angular/core';

@Component({selector: 'nav-header', templateUrl: './nav-header.component.html', styleUrls: ["./nav-header.component.css"]})
export class NavHeaderComponent {
  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;
}