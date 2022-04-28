import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FAQ } from 'src/app/models/FAQs';
import { FAQsService } from 'src/app/services/FAQs.service'

@Component({
  selector: 'app-faq-profile',
  templateUrl: './faq-profile.component.html',
  styleUrls: ['./faq-profile.component.css']
})
export class FAQProfileComponent implements OnInit {
  faq: FAQ | undefined;
  FAQForm: FormGroup;
  title = "FAQ Information";
  _id: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private _FAQsService: FAQsService,
              private aRouter: ActivatedRoute) { 
    this.FAQForm = this.fb.group({
      _id: ['', Validators.required],
      questionText: ['', Validators.required],
      answerText: ['', Validators.required],
      customerName: ['', Validators.required],
      creationDate: [],
      questionPossition: ['', Validators.required],
    });

  this._id = this.aRouter.snapshot.paramMap.get('_id');
  console.log(this._id);
}

  ngOnInit(): void {
    this.getFAQInfo();
  }

  getFAQInfo() {
    if(this._id !== 'add-faq' && this._id !== null) {
      this.title = "EDITABLE INFORMATION"
      this._FAQsService.getFAQbyID(this._id).subscribe(data => {
        this.faq = data;
        this.FAQForm.setValue({
          _id: data._id,
          questionText: data.questionText,
          answerText: data.answerText,
          customerName: data.customer.customerName,
          creationDate: data.creationDate,
          questionPossition: data.questionPossition,
        })
      })
    }
  }

  deleteFAQ() {
    if(confirm("Are you sure to delete the FAQ?")) {
      if (this._id !== null) {
        this._FAQsService.deleteFAQ(this._id).subscribe(data => {
          console.log("FAQ deleted");
        }, error => {
          console.log(error);
        });
      }
    }
    else {
      this.router.navigate(['/list-faqs', this._id]);
    }
  }
}
