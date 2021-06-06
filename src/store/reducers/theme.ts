export const theme = (
    state = 'primary',
    action: { type: 'Theme.Change'; data: string }
): string => {
    switch (action.type) {
        case 'Theme.Change':
            return action.data;
        default:
            return state;
    }
};
