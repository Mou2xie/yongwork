import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectContentService } from "../../core/services/projectContentService.service";
import type { IProjectContent } from "../../assets/projectContent/IProjectContent";
import { ContentSection } from "../../shared/components/content-section/content-section.component";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.html',
    imports: [ContentSection]
})
export class Detail {

    private activatedRoute = inject(ActivatedRoute);
    private projectContentService = inject(ProjectContentService);

    protected pageContent = signal<IProjectContent | undefined>(undefined);

    constructor() {
        const projectId = Number(this.activatedRoute.snapshot.paramMap.get('id')!);
        this.pageContent.set(this.projectContentService.getProjectContent(projectId))
    }

}