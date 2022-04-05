import {Services} from "../Services";
import { Network } from "../Network";

export default class ServiceService {
    static getServices() {
        return Network.fetch(Services.getServices.url, {
            method: Services.getServices.method,
        });
    }
}
