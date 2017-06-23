// seperate module for angular 2 material 
import { NgModule } from '@angular/core';
import {MdCardModule, MdGridListModule} from '@angular/material';

@NgModule({
  imports: [MdGridListModule, MdCardModule],
  exports: [MdGridListModule, MdCardModule],
})
export class materialModule{

}