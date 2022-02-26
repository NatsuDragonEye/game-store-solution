import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

// Modules
import { FontAwesomeIconsModule } from './modules/font-awesome-icons.modulest';
import { InternalMaterialModule } from "./modules/ag-material.module";

@NgModule({
    imports: [        
        FormsModule,
        CommonModule,
        
        InternalMaterialModule,
        FontAwesomeIconsModule,        
    ],
    exports: [
        CommonModule,
        FormsModule,

        InternalMaterialModule,
        FontAwesomeIconsModule,
    ]
})
export class SharedModule {

}