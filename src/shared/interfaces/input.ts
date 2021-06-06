/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface Email {
    placeholder?: string;

    children?: React.ReactChildren;

    register: any;
}
