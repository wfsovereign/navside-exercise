import { Injectable } from '@angular/core';
import { RecruitApi } from '../api/recruit.api';
import { Observable } from 'rxjs';
@Injectable()
export class RecruitService {
  selectedItem: string[] = [];

  constructor(private recruitApi: RecruitApi) {

  }

  getRecruitInfo(): Observable<any> {
    return this.recruitApi.getRecruitInfo();
  }

}
