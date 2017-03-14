/**
 * Created by anike on 9/8/2016.
 */
import {Component} from 'angular2/core';
import {GithubService} from "./githbu.service";

@Component({
  selector: 'github',
  templateUrl: 'GithubComponent.html',
  styleUrls:['GithubComponentStyle.css']
})
export class GithubComponent {

  user: any;
  repos: any;
  stared: any;
  followers: any;
  username: any;
  following: any;


  constructor(private _githubservice:GithubService){

    this.user = false;
  }


  search()
  {
    this._githubservice.updateUsername(this.username);

    this._githubservice.getUser().subscribe(user =>{
      this.user = user;
      console.log(user);

    });

    this._githubservice.getRepos()
      .subscribe(repos =>{
        this.repos = repos;

      });

    this._githubservice.getStared().subscribe(stared => {
      this.stared = stared;

    });

    this._githubservice.getFollowers().subscribe(followers =>{
      this.followers = followers;

    });

    this._githubservice.getFollowings().subscribe(following =>{
      this.following = following;
      console.log(following);

    });


  }





}
