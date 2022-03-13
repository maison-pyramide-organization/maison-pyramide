import {Features} from "../Features";
import { Network } from "../Network";

export default class FeatureService {
    static getFeature(id) {
        return Network.fetch(Features.getFeature.url(id), {
            method: Features.getFeature.method,
        });
    }
}
