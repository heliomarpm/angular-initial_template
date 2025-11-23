import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  public expanded = signal(this.localExpanded);
  public screenWidth = signal<number>(window.innerWidth);

  // constructor() {
  //   effect(() => {
  //     console.log("Sidebar Expanded: ", this.expanded());
  //   })
  // }
  private get localExpanded() {
    return localStorage.getItem('sidebarExpanded') !== 'false';
  }

  private set localExpanded(value) {
    localStorage.setItem('sidebarExpanded', String(value));
  }

  public toggleExpand() {
    this.expanded.update((value) => !value);
    this.localExpanded = this.expanded();

    return this.expanded();
  }

  public sizeScreen() {
    if (!this.localExpanded && !this.expanded()) {
      return;
    }

    this.screenWidth.set(window.innerWidth);
    this.screenWidth() < 768 ? this.expanded.set(false) : this.expanded.set(this.localExpanded);
  }

  public initialize() {
    this.sizeScreen();
  }
}
