import { NgModule } from "@angular/core";
import { ContadorComponente } from "./components/app.component";

@NgModule({
    declarations:[
        ContadorComponente
    ],
    exports:[
        ContadorComponente
    ]
})

export class CounterModule{

}