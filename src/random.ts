/**
 * Generate a random value between the two values provided
 */
export default function getRandomValue(min: number, max: number) {
    var difference = Math.abs(max - min);
    return Math.random() * difference + min;
}