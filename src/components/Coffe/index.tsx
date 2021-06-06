import React, { useEffect, useState } from 'react';

import * as S from './styles';

import { useDispatch } from 'react-redux';
import { Card } from 'components';
import { ToastMessage } from 'utils';
import { UserService } from 'services';
import * as I from 'shared/interfaces';
import { Loading } from 'components';

export function Coffe(): React.ReactElement {
    const [listCoffe, SetListCoffe] = useState<I.Coffe[]>([]);
    const [isLoading, SetLoading] = useState<boolean>(false);

    useEffect(() => {
        SetLoading(true);
        setTimeout(async function getCoffe() {
            const coffe = await UserService.getCoffe();
            SetListCoffe(coffe);
            SetLoading(false);
        }, 3000);
    }, []);

    const dispatch = useDispatch();

    const addCoffe = () => {
        dispatch({ type: 'User.Coffe' });
        ToastMessage('Mais um café tomado ☕');
    };

    return (
        <>
            <S.Container>
                {!isLoading ? (
                    listCoffe.map((i) => (
                        <>
                            <Card
                                key={i.id}
                                src={i.imageUrl}
                                onClick={addCoffe}
                            />
                        </>
                    ))
                ) : (
                    <Loading />
                )}
            </S.Container>
        </>
    );
}
