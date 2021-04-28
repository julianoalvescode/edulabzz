export const mobileWidth = 768;
export const mobileSmallScreenWidth = 375;
export const desktopLargeWidth = 1440;

export const mobile = `@media (max-width: ${mobileWidth - 1}px)`;
export const mobileSmall = `@media (max-width: ${
    mobileSmallScreenWidth + 1
}px)`;
export const desktop = `@media (min-width: ${mobileWidth}px)`;
export const desktopLarge = `@media (min-width: ${desktopLargeWidth}px)`;
