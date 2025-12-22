import { Injectable } from "@angular/core";
import type { IProjectContent } from "../../assets/projectContent/IProjectContent";
import { lingoPick } from "../../assets/projectContent/lingoPick.data";


@Injectable({
    providedIn: 'root'
})
export class ProjectContentService {

    private readonly _projectContent: IProjectContent[] = [
        lingoPick
    ];

    public getProjectContent(id: number): IProjectContent | undefined {
        return this._projectContent.find(item => item.id === id);
    }

}