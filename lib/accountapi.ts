import { Account, Avatars, Client, Databases, ID, Permission, Query, Role } from "appwrite";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const APPWRITE_PROJECT_ID: string = "648088e725ae5e39d699";
export const APPWRITE_ENDPOINT: string = "https://cloud.appwrite.io/v1";
export const APP_HOSTNAME: string = "http://localhost:3000"
const DATABASE_ID = "64808ff4e102a971fed4";
const USER_COLLECTION_ID = "6480900090a02a55873c";
const PROFILE_COLLECTION_ID = "648090305981ddfb2cb1";
const CARD_COLLECTION_ID = "648ac8999b732d42163a";

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const account = new Account(client);

const database = new Databases(client);

const avatars = new Avatars(client);

// client.subscribe('account', () => {
//     console.log("account changed");
// });

export const Client_Account = account;

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
            type: params.type,
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

    getUserInformation: async(userId: any) => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID,
            [
                Query.equal("userId", [userId]),
            ]
        )
    },

    gettingTypeValue: async (userId: any) => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID,
        [
            Query.equal("userId",[userId]),
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

    addingNewProfile: async (res:any, profileDetails: any) => {
        return await database.createDocument(DATABASE_ID, PROFILE_COLLECTION_ID, ID.unique(), {
            userId: res.$id,
            type: res.type,
            profession: profileDetails.profession,
            organisation: profileDetails.organisation,
            firmType: profileDetails.firmType,
            contactNo: profileDetails.contactNo,
        }, [
            Permission.write(Role.any()),
        ]).then(() => { 
            database.createDocument(DATABASE_ID, CARD_COLLECTION_ID, ID.unique(), {
                userId: res.$id,
            }, [
                Permission.write(Role.any()),
            ]).catch((err: any) => console.log(err))
        }).catch((err: any) => console.log(err))
    },

    updatingSocials: async (userId: any, userSocials: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
        [
            Query.equal("userId", [userId]),
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

    getUserCardDocument: async(userId: any) => {
        return await database.listDocuments(DATABASE_ID, USER_COLLECTION_ID,
            [
                Query.equal("userId", [userId]),
            ]
        )
    },

    fetchingProfile: async (userId: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
            [
                Query.equal("userId", [userId]),
            ]
        )
    },

    fetchingCards: async (userId: any) => {
        return await database.listDocuments(DATABASE_ID, CARD_COLLECTION_ID, 
            [
                Query.equal("userId", [userId]),
            ]
        )
    },

    updatingProfile: async(userId: any, cardInfo: any) => {
        return await database.listDocuments(DATABASE_ID, PROFILE_COLLECTION_ID,
            [
                Query.equal("userId", [userId]),
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

    addingCard: async (userId: any, cardId: any) => {
        return await database.listDocuments(DATABASE_ID, CARD_COLLECTION_ID,
            [
                Query.equal("userId", [userId])
            ]
        ).then((res: any) => {
            database.updateDocument(DATABASE_ID, CARD_COLLECTION_ID, res.documents[0].$id,{
                card1: cardId,
            })
        .then(() => { console.log("updated cards")
            }).catch((err: any) => console.log(err))
        }).catch((err: any) => console.log(err))
    },

    userInitials: async(userName: any) => {
        return avatars.getInitials(userName).href
    },

    userQRCode: async(userId: any) => {
        return avatars.getQR(`${APP_HOSTNAME}/card/${userId}`, 600,3).href;
    }
}