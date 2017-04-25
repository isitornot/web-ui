import axios from "axios";

class CommunityService {
    getAll(limit) {
        return axios.get(this.base_url + "/communities", {
            params: {
                limit: limit
            }
        });
    }

    get(slug) {
        return axios.get(`${this.base_url}/communities/${slug}`, {
            validateStatus(status) {
                // 404 Not Found is a legal value, just means that the requested slug doesn't exist
                // We use this to validate potential slugs. Make sure you check response.status!
                return (status >= 200 && status < 300) || (status == 404);
            }
        });
    }

    create(obj) {
        obj.owner = obj.owner || "User1";
        return axios.post(this.base_url + "/communities", obj);
    }

    constructor(base_url) {
        this.base_url = base_url;
    }
}

export default CommunityService;
