import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HoverDirective} from './utils/hover.directive';
import {SearchPipe} from './utils/search.pipe';
import {PizzaPageComponent} from './pizza-page/pizza-page.component';
import {DrinksPageComponent} from './drinks-page/drinks-page.component';
import {SushiPageComponent} from './sushi-page/sushi-page.component';
import {SaladsPageComponent} from './salads-page/salads-page.component';
import {RouterModule} from '@angular/router';
import {CartPageComponent} from './cart-page/cart-page.component';

const routes = [
  {path: '', component: PizzaPageComponent},
  {path: 'pizza', component: PizzaPageComponent},
  {path: 'sushi', component: SushiPageComponent},
  {path: 'drinks', component: DrinksPageComponent},
  {path: 'salads', component: SaladsPageComponent},
  {path: 'cart', component: CartPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HoverDirective,
    SearchPipe,
    PizzaPageComponent,
    DrinksPageComponent,
    SushiPageComponent,
    SaladsPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
