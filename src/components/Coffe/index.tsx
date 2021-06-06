import React, { useEffect, useState } from 'react';

import * as S from './styles';

import { useDispatch } from 'react-redux';
import { Card } from 'components';
import { ToastMessage } from 'utils';
import { UserService } from 'services';
import * as I from 'shared/interfaces';

export function Coffe({
    SetLoading,
}: {
    SetLoading(data: boolean): void;
}): React.ReactElement {
    const [listCoffe, SetListCoffe] = useState<I.Coffe[]>([]);

    useEffect(() => {
        SetLoading(true);
        setTimeout(async function getCoffe() {
            const coffe = await UserService.getCoffe();
            SetListCoffe(coffe);
            SetLoading(false);
        }, 800);
    }, []);

    const dispatch = useDispatch();

    const addCoffe = () => {
        dispatch({ type: 'User.Coffe' });
        ToastMessage('Mais um café tomado ☕');
    };

    return (
        <>
            <S.Container>
                {listCoffe.map((i) => (
                    <>
                        <Card key={i.id} src={i.imageUrl} onClick={addCoffe} />
                    </>
                ))}
            </S.Container>
        </>
    );
}
