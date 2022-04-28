import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { FAQ } from 'src/app/models/FAQs';
import { FAQsService } from 'src/app/services/FAQs.service';

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.css']
})
export class FAQsListComponent implements OnInit {
  listFAQs: FAQ[] = [];

  constructor(private _FAQsService: FAQsService) { }

  ngOnInit(): void {
    this.getAllFAQs();
  }

  getAllFAQs() {
    this._FAQsService.getAllFAQs().subscribe(data => {
      console.log(data);
      this.listFAQs = data;
    }, error => {
      console.log(error);
    })
  }
}
