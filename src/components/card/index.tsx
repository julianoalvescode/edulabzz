import React from 'react';
import { ICard } from 'shared/interfaces';

import * as S from './styles';

import { FormattedMessage } from 'react-intl';
export function Card({ src, onClick }: ICard): React.ReactElement {
    return (
        <>
            <S.Box>
                <S.BoxImg>
                    <img loading="lazy" src={src} alt="Café" />
                </S.BoxImg>
                <S.Details>
                    <h3>
                        <a title="STARBUCKS® Cappuccino® by NESCAFÉ® Dolce Gusto® ">
                            <span className="brand-name">
                                STARBUCKS<sup>®</sup> Cappuccino<sup>®</sup> by
                                NESCAFÉ<sup>®</sup> Dolce Gusto
                                <sup>®</sup>{' '}
                            </span>
                        </a>
                    </h3>
                    <h4>SUAVE E CREMOSO</h4>
                </S.Details>
                {onClick && (
                    <S.Button onClick={() => onClick()}>
                        <FormattedMessage id="drinkingCoffee" />
                    </S.Button>
                )}
            </S.Box>
        </>
    );
}
