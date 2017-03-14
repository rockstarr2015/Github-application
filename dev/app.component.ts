import {Component} from 'angular2/core';
import {GitHubOneComponent} from "./Github_one.component";
import {GithubComponent} from "./Github.component";
import {GithubService} from "./githbu.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'my-app',
    template: `

        <github></github>

    `,
    directives:[GithubComponent],
    providers:[GithubService,HTTP_PROVIDERS]


})
export class AppComponent {

}
