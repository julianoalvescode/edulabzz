import React, { Fragment } from 'react';

import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

import * as I from 'shared/interfaces';

const Provider: React.FC<I.Provider> = ({
    children,
    locale = LOCALES.ENGLISH,
}: {
    children: React.ReactNode;
    locale: string;
}) => {
    return (
        <>
            <IntlProvider
                locale={locale}
                textComponent={Fragment}
                messages={messages[locale]}
            >
                {children}
            </IntlProvider>
        </>
    );
};

export default Provider;
