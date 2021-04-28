export interface IButton {
    type?: 'button' | 'submit';
    message: string;
    onClick?: { (): void };
}
