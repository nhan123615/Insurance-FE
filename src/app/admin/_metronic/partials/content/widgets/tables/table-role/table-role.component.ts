import { Component, OnInit } from '@angular/core';
import { PremiumType } from 'src/app/entities/premium-type.entity';
import { Role } from 'src/app/entities/role.entity';
import { RoleService } from 'src/app/services/role.service copy';


@Component({
  selector: 'app-table-role',
  templateUrl: './table-role.component.html',
  styleUrls: ['./table-role.component.scss']
})
export class TableRoleComponent implements OnInit {

  constructor(private _roleService: RoleService) { }
  tbRoles: Role[];
  count: any;
  count1: any;

  loading = false;
  ngOnInit(): void {
    this.countRole();
    this.getRole();
  }

  getRole() {
    this.loading = true;
    this._roleService.findAll().then(
      res => {
        this.loading = false;
        this.tbRoles = res;
      },
      error => {
        this.loading = false;

        console.error(error);
      }


    );
  }
  countRole() {
    this.loading = true;
    this._roleService.count().then(res => {
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
