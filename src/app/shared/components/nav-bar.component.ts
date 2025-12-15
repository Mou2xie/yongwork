import { Component, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";


interface Route {
    path: string;
    label: string;
}

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.html',
    imports: [RouterLink, RouterLinkActive],
})
export class NavBar {
    protected routes: Route[] = [
        { path: '/', label: 'Home' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/about-me', label: 'About Me' },
        { path: '/contact', label: 'Contact' },
    ];

    protected menuFlag = signal<boolean>(false);

    protected toggleMenu() {
        this.menuFlag.update((flag) => !flag);
    }
}
