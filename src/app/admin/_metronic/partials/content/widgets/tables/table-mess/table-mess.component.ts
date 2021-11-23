import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/entities/message.entity';
import { Messages } from 'src/app/entities/messages.entity';
import { MessageService } from 'src/app/services/message.service';



@Component({
  selector: 'app-table-mess',
  templateUrl: './table-mess.component.html',
  styleUrls: ['./table-mess.component.scss']
})
export class TableMessComponent implements OnInit {

  constructor(private _messageService: MessageService) { }
  tbMess: Messages[];
  count: any;
  count1: any;
  loading = false;
  ngOnInit(): void {
    this.countClaim();
    this.getMess();
  }

  getMess() {
    this.loading = true;
    this._messageService.findAlls().then(
      res => {
        this.loading = false;
        this.tbMess = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }
  countClaim() {
    this.loading = true;
    this._messageService.count().then(res => {
      this.loading = false;

      this.count = res;
      this.count1 = this.count.result;
    },
      error => {
        this.loading = false;

        console.log(error);
      });
  }
}
