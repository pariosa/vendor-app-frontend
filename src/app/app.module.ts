import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/homepage.component';
import { AdminEditCategoryComponent } from './Admin/Categories/EditCategory/editcategory.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemsComponent } from './Items/items.component';
import { ItemComponent } from './Items/Item/item.component';
import { AdminNewCategoryComponent } from './Admin/Categories/NewCategory/newcategory.component';
import { AdminPaymentsComponent } from './Admin/Payments/payments.component';
import { AdminOrdersComponent } from './Admin/Orders/orders.component';
import { CategoriesComponent } from './Categories/categories.component';
import { AdminEditItemComponent } from './Admin/Items/EditItem/edititem.component';
import { AdminNewItemComponent } from './Admin/Items/NewItem/newitem.component';
import { EditOrderComponent } from './Orders/Order/EditOrder/editorder.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { AdminLoginComponent } from './Admin/auth/login.component';
import { OrderComponent } from './Orders/Order/order.component';
import { OrdersComponent } from './Orders/orders.component';
import { AdmninEditUserComponent } from './Admin/Users/EditUser/edituser.component';
import { AdminCategoriesComponent } from './Admin/Categories/categories.component';
import { AdmninItemsComponent } from './Admin/Items/items.component';
import { CheckoutComponent } from './Checkout/checkout.component';
import { AdmninPaymentComponent } from './Admin/Payments/Payment/payment.component';
import { AdminUsersComponent } from './Admin/Users/users.component';
import { CartComponent } from './Cart/cart.component';
import { AdminEditOrderComponent } from './Admin/Orders/Order/EditOrder/editorder.component';
import { AdminOrderComponent } from './Admin/Orders/Order/order.component';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
  ],
  declarations: [
    AppComponent, 
    HomepageComponent, 
    ItemsComponent, 
    ItemComponent,
    AdminEditCategoryComponent, 
    AdminNewCategoryComponent,
    CategoriesComponent,
    AdminNewItemComponent,
    AdminEditItemComponent,
    EditOrderComponent, 
    RegisterComponent,
    LoginComponent,
    AdminLoginComponent,
    OrderComponent,
    OrdersComponent,
    EditOrderComponent,
    CategoriesComponent,
    AdminOrdersComponent,   
    AdmninEditUserComponent,
    AdminCategoriesComponent,
    CheckoutComponent,
    AdmninItemsComponent,
    EditOrderComponent,
    AdminOrdersComponent,
    AdminOrderComponent,
    AdmninPaymentComponent,
    CartComponent,
    CheckoutComponent,
    AdminUsersComponent,
    AdminOrdersComponent,
    AdminEditOrderComponent,
    AdminPaymentsComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
