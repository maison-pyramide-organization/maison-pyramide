import {Articles} from "../Articles";
import { Network } from "../Network";

export default class ArticleService {
    static getArticles() {
        return Network.fetch(Articles.getArticles.url, {
            method: Articles.getArticles.method,
        });
    }
    static getSideArticles() {
        return Network.fetch(Articles.getSideArticles.url, {
            method: Articles.getSideArticles.method,
        });
    }
}
