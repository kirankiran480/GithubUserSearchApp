export class UserData {
    users: User[];
    totalCount: number;
    constructor(response) {
        this.totalCount = response.total_count;
        this.users = response.items.map((item) => {
// tslint:disable-next-line: no-use-before-declare
            return new User(item);
        });
    }
}

export class User {
    login: string;
    profileUrl: string;
    reposUrl: string;
    avatarUrl: string;
    score: number;
    type: string;
    repos?: Repo[];
    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.profileUrl = userResponse.html_url;
        this.reposUrl = userResponse.repos_url;
        this.avatarUrl = userResponse.avatar_url;
        this.score = userResponse.score;
        this.type = userResponse.type;
    }
}

export class Repo {
   fullName: string;
   language: string;
   constructor(response: any) {
     this.fullName = response.full_name;
     this.language = response.language;
   }
}
