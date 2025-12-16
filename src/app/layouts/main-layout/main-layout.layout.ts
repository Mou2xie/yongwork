import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavBar } from "../../shared/components/nav-bar/nav-bar.component";

@Component({
    selector: 'app-main-layout',
    imports: [RouterOutlet, NavBar],
    templateUrl: './main-layout.html',
})
export class MainLayout { }