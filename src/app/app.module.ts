import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader,TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { BodyComponent } from './layout/body/body.component';
import { MainComponent } from './layout/main/main.component';
import { SharedModule } from './shared/shared.module';
import { CustomerManagementModule } from './customer-management/customer-management.module';
import { ComplaintManagementModule } from './complaint-management/complaint-management.module';
import { OrderManagementModule } from './order-management/order-management.module';
import { PurchasingManagementModule } from './purchasing-management/purchasing-management.module';
import { WorkingTimeManagementModule } from './working-time-management/working-time-management.module';
import { DeliveryPersonManagementModule } from './delivery-person-management/delivery-person-management.module';
import { ProductManagementModule } from './product-management/product-management.module';

import { LoginService } from './services/login.service';

export function appInitializerFactory(translate: TranslateService, loginService:LoginService){
  return () => {
    //this will get the browser language
    let browserLang=translate.getBrowserLang()

    //this will get the language if i have already store it in storage else it contain null
    let language=loginService.getLanguage();

    //this condition will run if language have some value from local storage
    if(language){

      //this will change the 'en-US' to 'en' bcz otherwise en-US not working
      if(language=='en-US'){
        browserLang='en'
      }

      //if the value is 'tr' or other then this part runs
      else{
        browserLang=language;
      }
    }
    
    if (browserLang) {
      return translate.use(browserLang).toPromise();
    }
    return Promise.resolve(); 
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopNavComponent,
    SideNavComponent,
    BodyComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader:{
          provide:TranslateLoader,
          useFactory:(http: HttpClient) => {return new TranslateHttpLoader(http, '../assets/i18n/', '.json');},
          deps: [HttpClient]
        }
      }
    ),
    BrowserAnimationsModule,
    SharedModule,
    CustomerManagementModule,
    ComplaintManagementModule,
    OrderManagementModule,
    PurchasingManagementModule,
    WorkingTimeManagementModule,
    DeliveryPersonManagementModule,
    ProductManagementModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, LoginService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
