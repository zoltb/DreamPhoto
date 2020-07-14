import {Component, HostListener} from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {




  cssStringVar = 'header1';



  public headerScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // const componentPosition = this.el.nativeElement.offsetTop;
    // console.log(componentPosition);
    const num = window.pageYOffset;
    console.log(num);
    if (num > 199) {
      this.headerScrolled = true;
      this.cssStringVar = 'header2';
    } else if (this.headerScrolled && num < 600) {

      this.headerScrolled = false;
      this.cssStringVar = 'header1';
    }
    console.log(this.headerScrolled + 'zzzz' + num);

  }
//
//   document.getElementById("navbar").style.padding = "30px 10px";
// //     document.getElementById("logo").style.fontSize = "25px";
// //   } else {
// //     document.getElementById("navbar").style.padding = "80px 10px";
// //     document.getElementById("logo").style.fontSize = "35px";

}
