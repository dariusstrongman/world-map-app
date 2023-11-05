// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'; // Make sure this path is correct

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Use HomePageComponent for the root path
  // { path: 'other', component: OtherComponent }, // Comment out or remove if OtherComponent does not exist
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
