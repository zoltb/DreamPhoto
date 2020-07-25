import {Component, HostListener} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private headerScrolled = false;
  private headerNarrowed = false;
  private yScrollPXLimit = 289;
  private xWidthPXLimit = 992;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pageYOffset = window.pageYOffset;

    if (pageYOffset > this.yScrollPXLimit && !this.headerNarrowed) {
      this.headerScrolled = true;
    }
    else if (this.headerScrolled && pageYOffset <= this.yScrollPXLimit || this.headerNarrowed) {
      this.headerScrolled = false;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const pageSize = window.innerWidth;

    if (pageSize < this.xWidthPXLimit) {
      this.headerNarrowed = true;

    } else if (this.headerNarrowed && pageSize >= this.xWidthPXLimit) {

      this.headerNarrowed = false;
    }
  }




}
