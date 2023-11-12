import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgMapComponent } from './svg-map.component'; // Import SvgMapComponent

const routes: Routes = [
  { path: '', component: SvgMapComponent }, // Set SvgMapComponent as the default route
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

