import { Query } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from "./accountapi";

export const API_KEY = "ee98264d7c08fd6146e10bfa771e5cef30db7867c4dec106ab5a540643253cbf0f9e3af916c2106870871faf252405947ff0ec7a181d4c7278e22a238bb081c73f898d37bacf6f64287b8170ae0675bb4ab394f18f3b5647779e8688806bd213575531729435b8d20f6322cd4db6c00c07e1648b0c9ec9a29ca07714e2a1b88b";

const sdk = require('node-appwrite');

const client = new sdk.Client();
const users = new sdk.Users(client);

client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(API_KEY)

export const UserAPI = {
    searchUser: async (details: any, setUserNo: any) => {
        return users.list(
            [
                Query.equal("email", [details.email]),
            ]
        ).then((res: any)=> {
            setUserNo(res.total)
        })
    }
}