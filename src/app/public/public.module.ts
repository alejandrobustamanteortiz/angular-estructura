import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";

import { HomeComponent } from "./home/containers/home.component";
import { PublicComponent } from "./public.component";
import { LoginComponent } from "./login/containers/login.component";

import { PublicService } from "./public.service";

@NgModule({

    imports: [PublicRoutingModule, SharedModule],
    declarations:[HomeComponent, PublicComponent, LoginComponent],
    exports:[HomeComponent, PublicComponent, LoginComponent],
    providers:[PublicService]

})

export class PublicModule {

    constructor(){}

}