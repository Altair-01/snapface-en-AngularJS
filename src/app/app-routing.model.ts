import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFsComponent } from "./single-fs/single-fs.component";

const routes : Routes = [
    { path: 'facesnaps', component : FaceSnapListComponent},
    { path: '', component : LandingPageComponent},
    { path: 'facesnaps/:id', component : SingleFsComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}