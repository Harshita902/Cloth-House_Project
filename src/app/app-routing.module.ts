import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FusionWearComponent } from './fusion-wear/fusion-wear.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { SleepWearComponent } from './sleep-wear/sleep-wear.component';
import { TeamComponent } from './team/team.component';
import { WomenproductComponent } from './womenproduct/womenproduct.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'womenproduct',component:WomenproductComponent},
  {path:'cart',component:CartComponent},
  {path:'product',component:ProductsComponent},
  {path:'men',component:MenComponent},
  {path:'team',component:TeamComponent},
  {path:'blog',component:BlogComponent},
  {path:'womenproduct',component:WomenproductComponent},
  {path:'fusionWear',component:FusionWearComponent},
  {path:'sleepWear',component:SleepWearComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
