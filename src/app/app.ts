/* eslint-disable @typescript-eslint/member-ordering */

import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AsideComponent, AsideService } from './shared/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AsideComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private asideService = inject(AsideService);

  public asideExpanded = this.asideService.expanded;
  // public screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.asideService.sizeScreen();
  }

  ngOnInit(): void {
    this.asideService.initialize();
  }
}
