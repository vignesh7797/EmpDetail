import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { EmpdataService } from "../share/empdata.service";

@Injectable()

export class UserResolver implements Resolve<Observable<any>>{

    constructor(private empdata: EmpdataService){}
    
    resolve(): Observable<any> {
        return this.empdata.getUsers();
      }
}