import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialCodeModule } from 'collection-editor/dialcode';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    DialCodeModule,
  ],
  exports: [
    HeaderComponent,
    UserListComponent
  ]
})
export class CollectionEditorModule { }
