import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FAQ } from '../models/FAQs';
import { ParsedHostBindings } from '@angular/compiler';
import { Customer } from '../models/customer';

@Injectable({
    providedIn: 'root'
  })
  export class FAQsService {
    url = 'http://localhost:3000/api';
  
    constructor(private http: HttpClient) { }
      
  addFAQ(faq: FAQ): Observable<string> {
    return this.http.post(this.url + '/FAQs', faq, {responseType: 'text'}) ;
  }

  getAllFAQs(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.url + '/FAQs');
  }

  getFAQbyID(id: string): Observable<FAQ> {
    return this.http.get<FAQ>(this.url + '/FAQs/' + id);
  }

  updateFAQ(id: string, faq: FAQ): Observable<string> {
    return this.http.put(this.url + '/FAQs/' + id, faq, {responseType: 'text'});
  }

  deleteFAQ(id: string): Observable<string> {
    return this.http.delete(this.url + '/FAQs/' + id, {responseType: 'text'})
  }
}

