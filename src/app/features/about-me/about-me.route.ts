import { Component } from "@angular/core";
import { Title } from "../../shared/components/title/title.component";
import { ContentSection } from "../../shared/components/content-section/content-section.component";
import { QuestionComponent } from "../../shared/components/question/question.component";


@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.html',
    imports: [Title, ContentSection, QuestionComponent]
})
export class AboutMe {

    protected readonly experience = [
        {
            title: 'Student',
            company: 'Conestoga College',
            date: '2024 - Present',
            description: 'Studying Web and Mobile Application Development. Deepening expertise in modern full-stack ecosystem while actively mastering AI agent development and automation workflows using n8n and LangChain.'
        },
        {
            title: 'Product Owner',
            company: 'Polang Movies',
            date: '2022 - 2024',
            description: 'Led the full product lifecycle of a film marketing platform from concept to launch, acquiring 30,000+ users and executing over 100 screening events. Contributed directly to frontend development to accelerate campaign launches and leveraged technical background to facilitate agile workflows.'
        },
        {
            title: 'Senior Product Manager',
            company: 'Wanda Pictures',
            date: '2018 - 2022',
            description: 'Owned the Wanda Movies WeChat Mini-Program, growing it from scratch to 150,000 DAU. Increased purchase conversion rate from 20% to 30% by redesigning the core ticketing flow and spearheaded a full re-architecture of the online store to achieve a 52% conversion rate.'
        },
        {
            title: 'Product Manager',
            company: 'iQIYI.com',
            date: '2016 - 2017',
            description: 'Shipped key content discovery features and led the product redesign of the iQIYI iPad app to enhance user engagement and experience for a leading streaming media provider.'
        },
        {
            title: 'Product Manager',
            company: 'WeTimes',
            date: '2012 - 2016',
            description: 'Owned the Gewara App ticketing product and contributed to user growth initiatives for the Mobile QQ channel. Designed major summer sales campaigns and contributed to the architecture of the company’s core social middle-platform to improve user retention.'
        }
    ]
}