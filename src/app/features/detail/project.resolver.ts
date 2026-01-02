import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { ProjectContentService } from "../../core/services/projectContentService.service";
import { IProjectContent } from "../../assets/projectContent/IProjectContent";

export const projectResolver: ResolveFn<IProjectContent | undefined> = (route, state) => {
    const projectContentService = inject(ProjectContentService);
    const id = Number(route.paramMap.get('id'));
    return projectContentService.getProjectContent(id);
};
