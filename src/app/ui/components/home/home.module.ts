import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:HomeComponent}
    ])
  ]
})
export class HomeModule { }
