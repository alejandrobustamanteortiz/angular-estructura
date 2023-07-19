import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";

import { HomeComponent } from "./home/containers/home.component";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./login/containers/login.component";

@NgModule({

    imports: [PublicRoutingModule, SharedModule],
    declarations:[HomeComponent, PublicComponent, LoginComponent],
    exports:[HomeComponent, PublicComponent, LoginComponent],
    providers:[]

})

export class PublicModule {

    constructor(){}

}