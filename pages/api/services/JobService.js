import { Positions } from "../JobPositions";
import { Network } from "../Network";

export default class JobService {
    static getFilledPositions() {
        return Network.fetch(Positions.getFilledPositions.url, {
            method: Positions.getFilledPositions.method,
        });
    }
    static getUnfilledPositions() {
        return Network.fetch(Positions.getUnfilledPositions.url, {
            method: Positions.getUnfilledPositions.method,
        });
    }
}
