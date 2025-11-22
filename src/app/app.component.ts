/* eslint-disable @typescript-eslint/member-ordering */
import { Component, HostListener, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AsideComponent, AsideService } from './shared/components';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, AsideComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
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
