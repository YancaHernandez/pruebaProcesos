import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@akaliia/shared/data-access/auth';
import { SIDEBAR_WIDTH_CONDENSED } from '../../layout.model';

@Component({
  selector: 'layout-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {
  @Input() sidebarType: string;

  user;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser().subscribe(data => {
      this.user = data;
    });
  }

  /**
   * Is sidebar condensed?
   */
  isSidebarCondensed() {
    return this.sidebarType === SIDEBAR_WIDTH_CONDENSED;
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: '/' }
    });
  }
}
