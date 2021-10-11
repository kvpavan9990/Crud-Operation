import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private dataShare: DatashareService) { }

  public bill:number = 0;

  ngOnInit(): void {
    this.bill = this.dataShare.getBillAmonut();
  }

}
