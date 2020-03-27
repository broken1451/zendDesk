import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxZendeskWebwidgetModule, NgxZendeskWebwidgetConfig } from 'ngx-zendesk-webwidget';
import { HttpClientModule } from '@angular/common/http';

// accountUrl: 'https://broken1451.github.io/PortafolioAngular/#/home';


// export class ZendeskConfig extends NgxZendeskWebwidgetConfig {
//   accountUrl = 'broken1451.zendesk.com';
//   callback(zE) {
//     // You can call every command you want in here
//     zE('webWidget', 'show');
//   }
// }

// tslint:disable-next-line: member-ordering
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxZendeskWebwidgetModule.forRoot(ZendeskConfig)

  ],
  exports: [
    // NgxZendeskWebwidgetModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


