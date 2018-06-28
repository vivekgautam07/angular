import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule, 
         MatIconModule, 
         MatListModule,
         MatSelectModule } from '@angular/material';

@NgModule({
          imports: [
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatSelectModule
          ],
          exports:[
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatSelectModule
          ]   
})

export class MaterialModule {


}