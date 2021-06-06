import * as I from 'shared/actions';

export const theme = (
    state = 'primary',
    action: { type: I.ThemeActions; data: string }
): string => {
    switch (action.type) {
        case 'Theme.Change':
            return action.data;
        default:
            return state;
    }
};
