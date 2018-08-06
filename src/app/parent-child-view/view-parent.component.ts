import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ViewChildComponent} from './view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements AfterViewInit {

  @ViewChild(ViewChildComponent)
  private timerComponent: ViewChildComponent;

  // @ViewChild('childA')
  // private timerComponent: ViewChildComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

}
