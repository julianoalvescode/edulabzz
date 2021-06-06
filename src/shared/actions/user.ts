import * as I from 'shared/interfaces';

export enum UserActions {
    Login = 'User.Login',
    Logout = 'User.Logout',
    Coffe = 'User.Coffe',
}

export interface UserActionsService {
    getCoffe(): void;
    findUser(email: string, password: string): Promise<I.User | boolean>;
    UserLogin(email: string, password: string): Promise<I.User | boolean>;
    getUser(): Promise<I.User[]>;
}
