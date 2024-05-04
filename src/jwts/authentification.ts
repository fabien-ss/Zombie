export interface Authentification {
    login(user: any): any;
    signin(user: any) : any;
    verify(token: string): any;
}