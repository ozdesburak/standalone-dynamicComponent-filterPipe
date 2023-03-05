import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SearchBoxPipe} from '../utils/pipes/filter';

@Component({
    selector: 'app-widget-one',
    standalone: true,
    // imports: [CommonModule],
    imports: [
        NgIf, NgForOf, FormsModule, SearchBoxPipe
    ],
    template: `
    <h2>widget-one</h2>
    <button  (click)="onButtonClicked()" type="button" class="btn btn-success m-2">{{ name }}</button>
    <span *ngIf="false"> {{name}}   </span>

    <!-- İnput-->

    <div class="col-3" >
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Search</span>
        </div>
        <input [(ngModel)]="term" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
      </div>
    </div>
    <!-- İnput-->

    <p *ngFor="let name of values | searchBox: term">{{name}}</p>

  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetOneComponent implements OnChanges {
    ngOnChanges(changes : SimpleChanges): void {
        console.log('changes are happen');
    }
    // #region  variables
    @Input()name : string | undefined;
    @Output('onClick')buttonClicked = new EventEmitter<any>();
    values : string[] = ['burak', 'asdf', 'bklsd']
    term : string = "";
    // #endregion


    /**================================================================================================
   **                                         Button Click
   *================================================================================================**/
    onButtonClicked() {
        this.buttonClicked.emit(true);
    }
}
