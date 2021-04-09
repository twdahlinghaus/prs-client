import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlinesCreateComponent} from './requestlines/requestlines-create/requestlines-create.component';
import { RequestlinesEditComponent } from './requestlines/requestlines-edit/requestlines-edit.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewItemsComponent } from './request/request-review-items/request-review-items.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'products/list', component: ProductListComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'requests/create', component: RequestCreateComponent},
  { path: 'requests/list', component: RequestListComponent},
  { path: 'requests/detail/:id', component: RequestDetailComponent},
  { path: 'requests/edit/:id', component: RequestEditComponent},
  { path: 'requests/request-lines/:id', component: RequestLinesComponent},
  { path: 'requestlines/requestlines-create', component: RequestlinesCreateComponent},
  { path: 'requestlines/requestlines-edit/:id', component: RequestlinesEditComponent},
  { path: 'requests/request-review-list', component: RequestReviewListComponent},
  { path: 'requests/request-review-items/:id', component: RequestReviewItemsComponent},
  


  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
