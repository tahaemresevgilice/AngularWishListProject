import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { WishComponent } from './wish/wish.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:WishComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductdetailsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
