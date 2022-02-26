import { NgModule } from "@angular/core";

// Modules
import { FontAwesomeIconsModule } from './modules/font-awesome-icons.modulest';
import { InternalMaterialModule } from "./modules/ag-material.module";

@NgModule({
    imports: [
        InternalMaterialModule,
        FontAwesomeIconsModule
    ],
    exports: [
        InternalMaterialModule,
        FontAwesomeIconsModule
    ]
})
export class SharedModule {

}