/**
 * @name decimalToDMS
 * @description Converts decimal degrees to degrees, minutes and seconds. For showcase usage only.
 */

type DMS = {
    degrees: number;
    minutes: number;
    seconds: number;
};

const roundNumber = (value: number, precision: number) => {
    const factor = Math.pow(10, precision || 0);
    return Math.round(value * factor) / factor;
}

export const decimalPrecisionToDMS = (value: number, precision = 5): DMS => {
    const absValue = Math.abs(value);
    const degrees = Math.trunc(absValue);
    const minutes = absValue - degrees * 60;
    const seconds = roundNumber(( minutes - Math.trunc(minutes) ) * 60, precision);

    return {
        degrees,
        minutes,
        seconds,
    }
}