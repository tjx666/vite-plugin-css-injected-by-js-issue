import { multiple } from './multiple';

export default function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result = multiple(result, a);
    }
    return result;
}
