import { Account, Avatars, Client, Databases, ID, Permission, Query, Role } from "appwrite";
import { useRouter } from "next/navigation";

export const APPWRITE_PROJECT_ID: string = "648088e725ae5e39d699";
export const APPWRITE_ENDPOINT: string = "https://cloud.appwrite.io/v1";
export const APP_HOSTNAME: string = "http://localhost:3000"
const DATABASE_ID = "64808ff4e102a971fed4";
const USER_COLLECTION_ID = "6480900090a02a55873c";
const PROFILE_COLLECTION_ID = "648090305981ddfb2cb1";

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

const database = new Databases(client);

const avatars = new Avatars(client);

export const Client_Account = account;
export const TypeValue = localStorage.getItem("typeValue") || ""
export const UserId = localStorage.getItem("userId") || ""
// export const TypeValue = "Individual"
// export const UserId = ""

export const AccountAPI = {
    getAccount: async () => {
        return await account.get();
    },

    deleteSession: async () => {
        return await account.deleteSessions();
    },

    emailLogIn:async (params: any) => {
        return account.createEmailSession(params.email, params.password)
    },

    googleLogIn: async () => {
        return account.createOAuth2Session("google", `${APP_HOSTNAME}/login`);
    },

    emailSignUp: async(params: any) => {
        return account.create(ID.unique(), params.email, params.password, params.name)
    },

    googleSignUp: async() => {
        return account.createOAuth2Session("google", `${APP_HOSTNAME}/signup`);
    },

    createUserDocument: async(params: any) => {
        return await database.createDocument(DATABASE_ID, USER_COLLECTION_ID, ID.unique(), {
            name: params.name,
            userId: params.$id,
            email: params.email,
            type: TypeValue,
        }, 
            [
                Permission.write(Role.any()),
            ]
        )
    },

    getUserDocument: async(params: any) => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID,
            [
                Query.equal("userId", [params.$id]),
            ]
        )
    },

    getUserInformation: async() => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID,
            [
                Query.equal("userId", [UserId]),
            ]
        )
    },

    gettingTypeValue: async () => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID,
        [
            Query.equal("userId",[UserId]),
        ]).then((res: any) => 
            localStorage.setItem("typeValue", res.documents[0].type)
        ).catch((err: any) => console.log(err))
    },
    
    findingUser: async (response: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
            [
                Query.equal("userId", [response.$id]),
            ]
        )
    },

    addingNewProfile: async (res:any) => {
        return await database.createDocument(DATABASE_ID, PROFILE_COLLECTION_ID, ID.unique(), {
            userId: UserId,
            type: TypeValue,
            profession: res.profession,
            organisation: res.organisation,
            firmType: res.firmType,
            contactNo: res.contactNo,
        }, [
            Permission.write(Role.any()),
        ]
        ).then(() => { console.log("created")
        }).catch((err: any) => console.log(err))
    },

    updatingSocials: async (userSocials: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
        [
            Query.equal("userId", [UserId]),
        ]
        ).then((res) => {
            console.log(res.documents[0].$id)
            database.updateDocument(DATABASE_ID, PROFILE_COLLECTION_ID, res.documents[0].$id, {
                socials: userSocials,
            }
            ).then((response: any) => { 
                useRouter().push(response.userId)
            }).catch((err: any) => console.log(err))
        }).catch((err: any) => console.log(err))
    },

    fetchingProfile: async () => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
            [
                Query.equal("userId", [UserId]),
            ]
        )
    },

    updatingProfile: async(cardInfo: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
            [
                Query.equal("userId", [UserId]),
            ]
        ).then((res: any) => {
            database.updateDocument(DATABASE_ID, PROFILE_COLLECTION_ID, res.documents[0].$id, {
                profession: cardInfo.profession,
                organisation: cardInfo.organisation,
                firmType: cardInfo.firmType,
                contactNo: cardInfo.contactNo,
                socials: cardInfo.socials,
            }
            ).then((response: any) => { console.log(response, "updated profile")
            }).catch((err: any) => console.log(err))
        }).catch((err: any) => console.log(err))
    },

    getCardUser: async(cardId: any) => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID, 
            [
                Query.equal("userId", [cardId])
            ]
        )
    },

    gettingCardUserProfile: async (cardId: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
            [
                Query.equal("userId", [cardId])
            ]
        )
    },

    userInitials: async() => {
        return avatars.getInitials().href
    },

    userQRCode: async() => {
        return avatars.getQR(`${APP_HOSTNAME}/card/${UserId}`, 600,3).href;
    }
}