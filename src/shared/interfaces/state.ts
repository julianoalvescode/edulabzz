export interface IState {
    language: string;
    user: IUser | null;

    theme: 'primary' | 'dark';
}

export interface IUser {
    name: string;
    id: string;
    coffe: number;
    email: string;
    password: string;
    avatar: string;
    cargo: string;
}
