export interface State {
    language: string;
    user: User | null;

    theme: 'primary' | 'dark';
}

export interface User {
    name: string;
    id: string;
    coffe: number;
    email: string;
    password: string;
    avatar: string;
    cargo: string;
}
