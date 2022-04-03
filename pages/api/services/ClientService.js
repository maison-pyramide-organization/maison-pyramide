import {Clients} from "../Clients";
import { Network } from "../Network";

export default class ClientService {
    static getClients() {
        return Network.fetch(Clients.getClients.url, {
            method: Clients.getClients.method,
        });
    }
    static getHomeClients() {
        return Network.fetch(Clients.getHomeClients.url, {
            method: Clients.getHomeClients.method,
        });
    }
}
