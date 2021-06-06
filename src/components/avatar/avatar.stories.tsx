import React from 'react';
import { text } from '@storybook/addon-knobs';

import * as I from 'shared/interfaces';

import { Avatar } from './index';

import { Provider } from 'react-redux';
import { store } from 'store';

export default {
    component: Avatar,
    title: 'Avatar',
};

export const primary = (): React.ReactElement => {
    const props: I.Avatar = {
        cargo: text('Cargo', 'Dev. Front'),
        nome: text('Nome', 'Juliano Alves'),
        url: text(
            'Url Imagem',
            'https://avatars.githubusercontent.com/u/43914533?v=4'
        ),
    };

    return (
        <Provider store={store}>
            <Avatar url={props.url} cargo={props.cargo} nome={props.nome} />
        </Provider>
    );
};
