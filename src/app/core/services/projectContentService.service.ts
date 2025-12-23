import { Injectable } from "@angular/core";
import type { IProjectContent } from "../../assets/projectContent/IProjectContent";
import { lingoPick } from "../../assets/projectContent/lingoPick.data";
import { speakingPass } from "../../assets/projectContent/SpeakingPass.data";
import { transider } from "../../assets/projectContent/transider.data"
import { horoscopechinois } from "../../assets/projectContent/horoscopechinois.data";
import { grokani } from "../../assets/projectContent/grokani.data";
import { HuLandscaping } from "../../assets/projectContent/HuLandscaping.data";
import { molibb } from "../../assets/projectContent/molibb.data";
import { yongwork } from "../../assets/projectContent/yongwork.data";

@Injectable({
    providedIn: 'root'
})
export class ProjectContentService {

    private readonly _projectContent: IProjectContent[] = [
        lingoPick,
        speakingPass,
        transider,
        horoscopechinois,
        grokani,
        HuLandscaping,
        molibb,
        yongwork,
    ];

    public getProjectContent(id: number): IProjectContent | undefined {
        return this._projectContent.find(item => item.id === id);
    }

}