export const timeSpan = (
    start: string | number,
    rand?: string | number
): number => {
    const sec = 1000;
    const min = 60 * sec;
    const hour = 60 * min;
    const day = 24 * hour;

    const toMsec = (ts?: string | number) => {
        if (!ts) {
            return 0;
        }
        ts = ts.toString();
        let time = 0;
        ts.split(/(\d+\D+)/)
            .filter((f: string) => f !== '')
            .forEach((e: string) => {
                const t = parseInt(e);
                switch (true) {
                    case e.includes('day') || e.includes('d'):
                        time += t * day;
                        break;
                    case e.includes('hour') || e.includes('h'):
                        time += t * hour;
                        break;
                    case e.includes('min') || e.includes('m'):
                        time += t * min;
                        break;
                    case e.includes('sec') || e.includes('s'):
                        time += t * sec;
                        break;
                    default:
                        break;
                }
            });
        return time;
    };

    return toMsec(start) + toMsec(rand) * Math.random();
};
