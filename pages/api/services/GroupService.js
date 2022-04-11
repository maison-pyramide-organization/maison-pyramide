import {Group} from "../Group";
import { Network } from "../Network";

export default class GroupServices {
    static getGroup(id) {
        return Network.fetch(Group.getGroup.url, {
            method: Group.getGroup.method,
        });
    }
}
