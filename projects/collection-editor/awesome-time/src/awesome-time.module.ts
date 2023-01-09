import { NgModule } from '@angular/core';
import { CollectionEditorModule } from 'collection-editor';
import { DialCodeModule } from 'collection-editor/dialcode';
import { AwesomeTimeComponent } from './awesome-time.component';

@NgModule({
  declarations: [AwesomeTimeComponent],
  imports: [
    DialCodeModule,
    CollectionEditorModule
  ],
  exports: [AwesomeTimeComponent],
})
export class AwesomeTimeModule {}