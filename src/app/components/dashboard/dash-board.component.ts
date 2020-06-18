import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as localData from '../../commonData.json';
import{HeaderElements} from '../../common/header-file/headerElements';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  functionList: any;
  sessionList: any;
  jsonVal: any = localData;
  map: any;//={abc:"a"};
  headerList: any;

  constructor(private header:HeaderElements) {

  }

  ngOnInit(): void {
    
    this.sessionList = JSON.parse(sessionStorage.getItem('sessionValue'));
    var role = this.sessionList.userRole;
    //Populate Functions for the role
    this.getFunctionList(role);
    this.getHeaderList(role);
    //this.map={'abc':'bcd'};



  }
  getHeaderList(role: string): void {
    this.headerList = this.jsonVal.default[role].headerList;
  
    this.header.setValue(this.headerList);
    
    
    
  }
  getFunctionList(role: string): void {

    //console.log(role);
    //var role1 = 'DEMO';
    //var role2 = 'ADMIN';
    this.functionList = this.jsonVal.default[role].functionList;
    
    console.log(this.functionList);

    console.log(this.jsonVal.default[role]);
   // console.log(this.map);

  }

}
