import { Component, Input } from '@angular/core';
import { Recruit } from './common/model/recruit';
import { RecruitService } from './common/service/recruit.service';
import * as _ from 'lodash';

@Component({
  selector: 'item-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html'
})
export class ItemListComponent {
  @Input() data: Recruit;
  @Input() isCleared: boolean;
  currentItems: string[] = [];

  constructor(private recruitService: RecruitService) {

  }

  ngOnInit() {
    this.currentItems = this.data.dataList.reduce((pre, cur) => {
      pre.push(cur.id);
      return pre;
    }, []);
  }

  isBlockSelected() {
    return !_.isEmpty(this.recruitService.selectedItem) &&
      _.some(this.currentItems, item => _.includes(this.recruitService.selectedItem, item));
  }

  selectAll() {
    this.toggleSelect(this.currentItems);
  }

  toggleSelect(id) {
    if (typeof id === 'string') {
      if (_.includes(this.recruitService.selectedItem)) {
        _.pull(this.recruitService.selectedItem, id)
      } else {
        this.recruitService.selectedItem.push(id);
      }
    } else if (Array.isArray(id)) {
      if (_.some(this.currentItems, item => _.includes(this.recruitService.selectedItem, item))) {
        this.recruitService.selectedItem = _.without(this.recruitService.selectedItem, ...id);
      } else if (_.xor(this.recruitService.selectedItem, id).length !== 0) {
        id.forEach(ele => {
          this.recruitService.selectedItem.push(ele);
        });
        this.recruitService.selectedItem = _.uniq(this.recruitService.selectedItem);
      }
    }
  }

  isChecked(id) {
    return _.includes(this.recruitService.selectedItem, id);
  }
}
