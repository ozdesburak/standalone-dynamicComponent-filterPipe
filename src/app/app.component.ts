import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';

const componentsConfig = [
  {
    component: () =>
      import('./widget-one/widget-one.component').then(
        (it) => it.WidgetOneComponent
      ),
    inputs: {
      name: 'windget one - profanis',
    },
  },
  {
    component: () =>
      import('./widget-two/widget-two.component').then(
        (it) => it.WidgetTwoComponent
      ),
    inputs: {
      name: 'widget two profanis',
    },
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 //#region Variable
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
 //#endregion


  /**=======================================================================================================================
   **                                                     Dynamic Create Component
   *=======================================================================================================================**/
  createComponentsBasedOnConfig() {
    componentsConfig.forEach(async (componentConfig) => {
      const componentInstance = await componentConfig.component();
      const componentRef = this.container.createComponent(componentInstance);
      Object.entries(componentConfig.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      });
    });
  }

  
  /**=======================================================================================================================
   **                                                   Create Component
   *=======================================================================================================================**/
  createComponent() {
    this.container.clear();
    const widgetOneRef = this.container.createComponent(WidgetOneComponent);
    widgetOneRef.setInput('name', 'profanis');
    const widgetTwoRef = this.container.createComponent(WidgetTwoComponent);
    widgetTwoRef.setInput('name', 'profanis');
    widgetOneRef.instance.buttonClicked.subscribe((val: any) => console.log('val'));
    // widgetOneRef.changeDetectorRef.detectChanges();    
  }
  
}