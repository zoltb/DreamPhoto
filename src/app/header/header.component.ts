import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerScrolled = false;
  public headerNarrowed = false;
  public headerOnTop = true;

  public yScrollPXLimit = 289;
  public xWidthPXLimit = 992;

  flag = false;
  onImageLoad(e) {
    this.flag = true
  }

  ngOnInit() {
    if (window.innerWidth < 992) {
      this.headerNarrowed = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pageYOffset = window.pageYOffset;

    if (pageYOffset > 0) {
    }
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
      this.headerOnTop = false;
    } else if (this.headerNarrowed && pageSize >= this.xWidthPXLimit) {

      this.headerNarrowed = false;
      this.headerOnTop = true;
    }
  }
}
