/**
 * Backward-compatible re-export.
 *
 * The canonical definition now lives in `src/app/core/models/portfolio.models.ts`
 * so that the project catalog and the case-study body share one set of types.
 * Existing imports of `./IProjectContent` keep working.
 */
export type {
    IProjectContent,
    ProjectLink,
    ProjectStatus,
} from '../../core/models/portfolio.models';
