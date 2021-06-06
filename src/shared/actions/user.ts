import * as I from 'shared/interfaces';

export enum UserActions {
    Login = 'User.Login',
    Logout = 'User.Logout',
    Coffe = 'User.Coffe',
}

export interface UserActionsService {
    getCoffe(): void;
    findUser(email: string, password: string): Promise<I.User | boolean | void>;
    UserLogin(
        email: string,
        password: string,
        dispatch: any
    ): Promise<I.User | boolean | void>;
    getUser(): Promise<I.User[]>;
}
