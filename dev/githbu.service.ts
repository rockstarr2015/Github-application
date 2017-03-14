/**
 * Created by anike on 9/8/2016.
 */

import {Injectable} from "angular2/core";
import {Http,Headers} from "angular2/http";
import 'rxjs/add/operator/map';


@Injectable()

export  class GithubService{

  private username = 'git';
  constructor(private _http: Http)
  {
    console.log("Git-hub services is started....");
  }

  getUser()
  {
    return this._http.get('https://api.github.com/users/'+this.username).map(res => res.json());
  }

  getRepos()
  {
    return this._http.get('https://api.github.com/users/'+this.username+'/repos').map(res => res.json());
  }

  getStared()
  {
    return this._http.get('https://api.github.com/users/'+this.username+'/starred').map(res => res.json());
  }

  getFollowers()
  {
    return this._http.get('https://api.github.com/users/'+this.username+'/followers').map(res => res.json());
  }

  updateUsername(username: any)
  {
    this.username = username;
  }


  getFollowings()
  {
    return this._http.get('https://api.github.com/users/'+this.username+'/following').map(res => res.json());
  }
























}

