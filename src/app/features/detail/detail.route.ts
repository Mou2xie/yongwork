import { Component, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';
import type { IProjectContent } from "../../assets/projectContent/IProjectContent";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
})
export class Detail {

    private activatedRoute = inject(ActivatedRoute);

    protected pageContent = toSignal(this.activatedRoute.data.pipe(
        map(data => data['projectContent'])
    ), { initialValue: this.activatedRoute.snapshot.data['projectContent'] });
    protected currentIndex = signal(0);


    constructor() {
    }

    protected nextImage() {
        const images = this.pageContent()?.image || [];
        if (images.length === 0) return;
        this.currentIndex.update(i => (i + 1) % images.length);
    }

    protected prevImage() {
        const images = this.pageContent()?.image || [];
        if (images.length === 0) return;
        this.currentIndex.update(i => (i - 1 + images.length) % images.length);
    }


}