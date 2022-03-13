import {Expertise} from "../Expertise";
import { Network } from "../Network";

export default class ExpertiseService {
    static getExpertise() {
        return Network.fetch(Expertise.getExpertise.url, {
            method: Expertise.getExpertise.method,
        });
    }
}
