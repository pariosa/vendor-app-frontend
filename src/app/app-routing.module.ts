import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Cart/cart.component';
import { CategoriesComponent } from './Categories/categories.component';
import { CheckoutComponent } from './Checkout/checkout.component';
import { HomepageComponent } from './Homepage/homepage.component';
import { ItemsComponent } from './Items/items.component';
import { OrderComponent } from './Orders/Order/order.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path:'home', component: HomepageComponent},
	{ path: 'items', component: ItemsComponent},
	{ path: 'checkout', component: CheckoutComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'orders', component: OrderComponent },
	
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports : [ RouterModule ]
})

export class AppRoutingModule{}
