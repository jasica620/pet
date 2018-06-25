import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import{EditComponent} from './edit/edit.component'
import{NewComponent} from './new/new.component'
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {path: 'pets', component:HomeComponent},
    {path: 'pets/new', component:NewComponent},
    {path: 'pets/:id/edit', component: EditComponent},
    {path: 'pets/:id', component: DetailComponent},
    { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }