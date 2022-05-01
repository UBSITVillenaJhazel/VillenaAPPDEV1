import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { FooterComponent } from './footer/footer.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { NewItemsComponent } from './new-items/new-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewListsComponent,
    FooterComponent,
    ViewDetailsComponent,
    ContactSellerComponent,
    MyItemsComponent,
    CreateNewComponent,
    EditItemComponent,
    NewItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]) 
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
