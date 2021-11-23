import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loadingImg = '../../../../assets/user/images/loading.gif';
  constructor() { }

  ngOnInit(): void {
  }

}
