import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecruitApi {

  constructor(private http: Http) {

  }

  getRecruitInfo(): Observable<any> {
    return this.http.get('./assets/recruit-info.json');
  }
}
