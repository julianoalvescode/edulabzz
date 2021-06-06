import * as I from 'shared/interfaces';

export const user = (
    state: I.User | null = null,
    action: { type: 'User.Login' | 'User.Logout' | 'User.Coffe'; data: I.User }
): I.User | null => {
    switch (action.type) {
        case 'User.Login':
            return action.data;
            break;
        case 'User.Logout':
            return (state = null);
            break;
        case 'User.Coffe':
            if (state?.coffe !== undefined) {
                return { ...state, coffe: state?.coffe + 1 };
            } else {
                return state;
            }
            break;
        default:
            return state;
    }
};