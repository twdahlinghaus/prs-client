import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { SearchUserPipe } from './search-user.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent} from './product/product-detail/product-detail.component';
import { ProductCreateComponent} from './product/product-create/product-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewItemsComponent } from './request/request-review-items/request-review-items.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    UserEditComponent,
    UserCreateComponent,
    UserLoginComponent,
    BoolDisplayPipe,
    SearchUserPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestLinesComponent,
    RequestReviewItemsComponent,
    RequestReviewListComponent,
    

  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
