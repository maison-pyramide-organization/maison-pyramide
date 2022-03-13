import {Projects} from "../Projects";
import { Network } from "../Network";

export default class ProjectService {
    static getFeaturedProjects() {
        return Network.fetch(Projects.getFeaturedProjects.url, {
            method: Projects.getFeaturedProjects.method,
        });
    }
    static getProjects() {
        return Network.fetch(Projects.getProjects.url, {
            method: Projects.getProjects.method,
        });
    }
}
