import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule
    ]
})
export class FontAwesomeIconsModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
    }
}