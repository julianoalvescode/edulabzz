import { IUserActions, IUser } from 'shared/interfaces';

class User implements IUserActions {
    public async getUser(): Promise<IUser[]> {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
        });

        const data = await response.json();

        return data;
    }

    public async UserLogin(
        email: string,
        password: string
    ): Promise<IUser | boolean> {
        const data = await this.getUser();

        const user = data.find(
            (params) => email === params.email && password === params.password
        );

        if (user !== undefined) {
            return user;
        } else {
            return false;
        }
    }
}

export const UserService = new User();
