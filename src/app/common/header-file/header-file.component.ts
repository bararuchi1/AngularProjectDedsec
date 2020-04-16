import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-header-file',
  templateUrl: './header-file.component.html',
  styleUrls: ['./header-file.component.css']
})
export class HeaderFileComponent implements OnInit {

home:home ;
  constructor() {
  
  }

  ngOnInit(): void {
   }
  @HostListener("window:scroll")
  scrollFunction() {
    var header = document.getElementById("navbar");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
interface home {
  companyName: string,
  companyLogo: ImageData
}
