export const language = (
    state = 'pt-BR',
    action: { type: 'Language.Change'; data: string }
): string => {
    switch (action.type) {
        case 'Language.Change':
            return action.data;
        default:
            return state;
    }
};
