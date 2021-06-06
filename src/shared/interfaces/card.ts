export interface Card {
    src: string;
    onClick?: { (): void };

    key: number | string;
}
