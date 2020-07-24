import {Component, HostListener} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cssStringVar = 'header1';

  public headerScrolled = false;
  public headerShrink = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // const componentPosition = this.el.nativeElement.offsetTop;
    // console.log(componentPosition);
    const pageYOffset = window.pageYOffset;

    if (pageYOffset > 330) {
      this.headerScrolled = true;
      this.cssStringVar = 'header2';
    }
    else if (this.headerScrolled && pageYOffset < 600) {
      this.headerScrolled = false;
      this.cssStringVar = 'header1';
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const pageSize= window.innerWidth;
    console.log(innerWidth)
    if (pageSize < 992){
      this.cssStringVar = 'header3';
      this.headerShrink=true;

    }
  }


}
