
export interface IProjectContent {
    id: number;
    projectName: string;
    description: string;
    links: {
        channel: string;
        url: string;
    }[];
    image: string[];
    content: string;
}