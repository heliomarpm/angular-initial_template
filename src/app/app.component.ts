import { Component, HostListener, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AsideComponent } from './shared/components/aside/aside.component';
import { AsideService } from './shared/components/aside/aside.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, AsideComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public asideExpanded = this.asideService.expanded;
	public screenWidth = signal<number>(window.innerWidth);

	constructor(private asideService: AsideService) {}

	@HostListener('window:resize')
	onResize() {
		this.asideService.sizeScreen();
	}

	ngOnInit(): void {
		this.asideService.initialize();
	}
}
