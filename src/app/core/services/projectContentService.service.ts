import { Injectable } from '@angular/core';
import type { IProjectContent } from '../../assets/projectContent/IProjectContent';

// Web products and extensions
import { lingoPick } from '../../assets/projectContent/lingoPick.data';
import { speakingPass } from '../../assets/projectContent/SpeakingPass.data';
import { transider } from '../../assets/projectContent/transider.data';
import { horoscopechinois } from '../../assets/projectContent/horoscopechinois.data';
import { grokani } from '../../assets/projectContent/grokani.data';
import { HuLandscaping } from '../../assets/projectContent/HuLandscaping.data';
import { molibb } from '../../assets/projectContent/molibb.data';
import { yongwork } from '../../assets/projectContent/yongwork.data';

// AI and team projects
import { agentyong } from '../../assets/projectContent/agentyong.data';
import { novaagent } from '../../assets/projectContent/novaagent.data';
import { fixmycity } from '../../assets/projectContent/fixmycity.data';
import { tendermaster } from '../../assets/projectContent/tendermaster.data';

// Automation workflows (supplementary records)
import { tendermaker } from '../../assets/projectContent/tendermaker.data';
import { fortunegenerator } from '../../assets/projectContent/fortunegenerator.data';
import { keywordsExplainer } from '../../assets/projectContent/keywordsexplainer.data';

/**
 * Case-study bodies keyed by project id.
 *
 * Narrative content lives here; names, descriptions, covers, ordering and
 * visibility live in the catalog (`core/data/projectCatalog.data.ts`).
 *
 * `grokani` (id 5) is retained so existing links resolve, but the project is
 * excluded from public lists by its catalog `visibility: false`.
 * Design artifacts (500–505) intentionally have no detail page — their cards
 * link to Figma instead.
 */
@Injectable({
    providedIn: 'root',
})
export class ProjectContentService {
    private readonly _projectContent: IProjectContent[] = [
        // Engineering projects
        novaagent,
        agentyong,
        tendermaster,
        fixmycity,
        speakingPass,
        transider,
        lingoPick,
        molibb,
        horoscopechinois,
        yongwork,
        HuLandscaping,
        // Automation workflows
        tendermaker,
        fortunegenerator,
        keywordsExplainer,
        // Retained for existing links; not publicly listed
        grokani,
    ];

    public getProjectContent(id: number): IProjectContent | undefined {
        return this._projectContent.find((item) => item.id === id);
    }
}
