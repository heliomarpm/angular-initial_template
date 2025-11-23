import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AsideService } from './aside.service';

@Component({
  selector: 'app-aside',
  imports: [RouterModule, CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  private readonly asideService = inject(AsideService);
  public expanded = this.asideService.expanded;

  protected items = [
    { type: 'route', routeLink: 'dashboard', icon: 'fal fa-home', label: 'Dashboard' },
    { type: 'route', routeLink: 'analyze', icon: 'fal fa-tasks', label: 'Analyze' },
    { type: 'route', routeLink: 'compare', icon: 'fal fa-not-equal', label: 'Compare' },
    { type: 'space' },
    { type: 'separator' },
    { type: 'route', routeLink: 'settings', icon: 'fal fa-cog', label: 'Settings' },
  ];

  public toggleExpand() {
    this.asideService.toggleExpand();
  }
}
