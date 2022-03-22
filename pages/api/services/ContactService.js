import {contactUs} from "../Contact";
import { Network } from "../Network";

export default class ProjectService {
    static addContact(data) {
      console.log('???',data);
        return Network.fetch(contactUs.addContact.url, {
            method: contactUs.addContact.method,
            body:JSON.stringify({
                "data": {
                  "type": "item",
                  "attributes": {
                    "email": data.email,
                    "full_name": data.name,
                    "subject": data.subject,
                    "company_name":data.company,
                    "message":data.message,
                    "receiver_email":data.rec_email
                  },
                  "meta":{},
                  "relationships": {
                    "item_type": {
                      "data": {
                        "type": "item_type",
                        "id": "1804882"
                      }
                    }
                  }
                }
              })
        });
    }
}
