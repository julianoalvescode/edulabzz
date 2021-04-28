import React from 'react';

import { UserService } from 'services';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations';

import { Button } from 'components';
import { Email, Password } from 'components/input';

import Logo from 'static/images/logo.svg';
import * as S from './styles';

import { toast } from 'react-toastify';

import { CSSTransition } from 'react-transition-group';

export const Sign: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: {
        email: string;
        password: string;
    }): Promise<void> => {
        const response = await UserService.UserLogin(data.email, data.password);

        if (response) {
            dispatch({ type: 'User.Login', data: response });
            history.push('/dashboard');
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
        }
    };

    return (
        <>
            <CSSTransition timeout={300}>
                <S.Container>
                    <S.Box>
                        <S.Image
                            title="Logo"
                            loading="lazy"
                            src={Logo}
                            alt="Logo"
                        />
                        <S.Form onSubmit={handleSubmit(onSubmit)}>
                            <Email register={register} />
                            <S.Error>{errors.email?.message}</S.Error>
                            <Password register={register} />
                            <S.Error>{errors.password?.message}</S.Error>
                            <Button message="Login" type="submit" />
                        </S.Form>
                    </S.Box>
                </S.Container>
            </CSSTransition>
        </>
    );
};
