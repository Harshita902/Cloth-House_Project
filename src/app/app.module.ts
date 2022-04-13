import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WomenproductComponent } from './womenproduct/womenproduct.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MenComponent } from './men/men.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { FusionWearComponent } from './fusion-wear/fusion-wear.component';
import { SleepWearComponent } from './sleep-wear/sleep-wear.component';
import { CustomDirective } from './custom.directive';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WomenproductComponent,
    MenComponent,
    TeamComponent,
    BlogComponent,
    FusionWearComponent,
    SleepWearComponent,
    CustomDirective,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
