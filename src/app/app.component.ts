import { Component } from '@angular/core';
import { RecruitService } from './common/service/recruit.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  recruitInfo: Array<any> = [];
  isAllCleared: boolean = false;

  constructor(private recruitService: RecruitService) {

  }

  ngOnInit() {
    this.recruitService.getRecruitInfo().subscribe((response: Response) => {
      this.recruitInfo = response.json();
    });
  }

  clearAll() {
    this.recruitService.selectedItem = [];
  }

}
