import { Avatar } from 'components/avatar';

import { render, screen } from '@testing-library/react';

describe('<Avatar/>', () => {
    it('dummy teste', () => {
        const { baseElement } = render(<Avatar />);

        expect(1).toBe(1);
    });
});
