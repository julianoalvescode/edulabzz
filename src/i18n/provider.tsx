import React, { Fragment } from 'react';

import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

import { IProvider } from 'shared/interfaces';

const Provider: React.FC<IProvider> = ({
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
