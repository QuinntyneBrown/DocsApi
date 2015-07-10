declare module app.userExperience {

    export interface IUserExperienceModalService {       
        showModal();
    }

    export interface IUserExperienceService {
        save(options: any): ng.IPromise<any>;
        update(options: any): ng.IPromise<any>;
    }

    export interface IUserExperienceManager {
        guid:string;
    }
} 