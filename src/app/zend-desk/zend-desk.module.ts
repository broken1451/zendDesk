import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxZendeskWebwidgetModule } from 'ngx-zendesk-webwidget';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxZendeskWebwidgetModule
  ],
  exports: [
    NgxZendeskWebwidgetModule
  ]
})
export class ZendDeskModule {

}
