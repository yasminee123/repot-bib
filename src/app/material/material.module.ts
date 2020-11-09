import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
const MaterialComponents=[
  MatInputModule,
  MatToolbarModule,
  MatGridListModule,
  MatIconModule,

]
@NgModule({
  
  imports: [ MaterialComponents],
  exports:[ MaterialComponents]
})
export class MaterialModule { }
