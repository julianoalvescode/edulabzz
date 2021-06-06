import { toast } from 'react-toastify';
import * as I from 'shared/interfaces';
import * as A from 'shared/actions';

class User implements A.UserActionsService {
    public async getUser(): Promise<I.User[]> {
        const response = await fetch(process.env.REACT_APP_URL_DEV + 'users', {
            method: 'GET',
        });

        console.log(process.env);

        const data = await response.json();

        return data;
    }

    public async getCoffe(): Promise<I.Coffe[]> {
        const response = await fetch(process.env.REACT_APP_URL_DEV + 'coffes', {
            method: 'GET',
        });

        const data = await response.json();

        return data;
    }

    public async findUser(
        email: string,
        password: string
    ): Promise<I.User | boolean> {
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

    public async UserLogin(
        email: string,
        password: string
    ): Promise<I.User | boolean> {
        const response = await this.findUser(email, password);

        if (response) {
            return response;
        } else {
            toast.warn('Usuário não encontrado', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }
    }
}

export const UserService = new User();
