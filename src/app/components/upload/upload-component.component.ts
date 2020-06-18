import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent implements OnInit {
  @Input() progress;

  @Output() uploadedImage = new EventEmitter<any>();
  constructor() {

  }

  ngOnInit(): void {
  }
  onFileUpload(event) {
    console.log(event);
    
    const file = event.target.files[0];
    this.uploadedImage.emit(file);
  }
  // onTextChange(event){
  //   const file = event.taget.files[0];
  //   event.uploadedImage.emit(file);
  // }
}
