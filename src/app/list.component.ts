import { Component, Input } from '@angular/core';
import { RecruitService } from './common/service/recruit.service';

@Component({
  selector: 'item-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html'
})
export class ItemListComponent {
  @Input() data: Array<any>;

  constructor(private recruitService: RecruitService) {

  }
}
