import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatIconModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule
} from '@angular/material';
const MaterialComponents = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
