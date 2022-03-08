import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SearchModule } from './search.module'

const routes: Routes = [
  {
    path: '',
    component: SearchModule
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }