import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectContentService } from "../../core/services/projectContentService.service";
import type { IProjectContent } from "../../assets/projectContent/IProjectContent";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
})
export class Detail {

    private activatedRoute = inject(ActivatedRoute);
    private projectContentService = inject(ProjectContentService);

    protected pageContent = signal<IProjectContent | undefined>(undefined);
    protected currentIndex = signal(0);


    constructor() {
        const projectId = Number(this.activatedRoute.snapshot.paramMap.get('id')!);
        this.pageContent.set(this.projectContentService.getProjectContent(projectId))
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