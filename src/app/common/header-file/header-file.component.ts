import { Component, OnInit, HostListener, Input } from '@angular/core';
import { HeaderElements } from './headerElements';
import { KeyValue } from '@angular/common';
import{Router} from '@angular/router';

@Component({
  selector: 'app-header-file',
  templateUrl: './header-file.component.html',
  styleUrls: ['./header-file.component.css']
})
export class HeaderFileComponent implements OnInit {
  headerList: any;
  home: home;
  message: string;
  constructor(private headerLinks: HeaderElements,private router:Router) {

  }
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  

  ngOnInit(): void {
    console.log(this.headerLinks.getValue());

    this.headerLinks.headerLinkDetails.subscribe(data => {


      this.headerList = data;
      console.log(this.headerList);
    });
    // this.headerList=this.headerLinks.headerLinkDetails.subscribe(data=>{
    //   this.headerList=data;
    // });
    // console.log(this.headerList);


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

  headerFunctions(key: string): void {
    console.log(key);
    if('logOut'==key){
      sessionStorage.removeItem('sessionValue');
      this.router.navigate(['login']);
    }
  }

}


interface home {
  companyName: string,
  companyLogo: ImageData
}
