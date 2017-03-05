import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Business} from '../business';
import {Category} from '../category';

@Injectable()
export class FireBaseService{
    businesses: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;
    
    constructor(private _af: AngularFire){

    }

    getBusinesses(): FirebaseListObservable<Business[]>{
        this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>;
        return this.businesses;
    }

    getCategories(): FirebaseListObservable<Category[]>{
        this.categories = this._af.database.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categories;
    }
}
