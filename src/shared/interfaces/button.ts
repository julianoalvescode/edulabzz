export interface Button {
    type?: 'button' | 'submit';
    message: string;
    onClick?: { (): void };
}
