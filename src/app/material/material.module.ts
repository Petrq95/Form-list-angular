import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatIconModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
const MaterialComponents = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
