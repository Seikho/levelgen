import {Options} from '../index.d.ts';
import getRandomValue from './random';
import capitalize from './capitalize';

export default function get(options: Options, defaultMinimum: number, defaultMaximum: number) {
    return (dimension: string) => {
        if (options[dimension]) return options[dimension];

        var minProp = `min${capitalize(dimension) }`;
        var maxProp = `max${capitalize(dimension) }`;

        var providedMin = options[minProp];
        var providedMax = options[maxProp];

        if (!providedMin && !providedMax)
            return getRandomValue(defaultMinimum, defaultMaximum);

        if (!providedMin)
            return providedMax;

        if (!providedMax)
            return providedMin;

        return getRandomValue(providedMin, providedMax);
    }
}

