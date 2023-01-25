import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0573c079-9c5f-4d8e-9a48-60bf37eea154",
    },
});

export const request = {
    DeleteUnfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    PostFollow(id){
        return instance.post(`follow/${id}`)
    },
    GetUsers(page,count){
        return instance.get(`users?page=${page}&count=${count}`)
    },
    GetAuth(){
        return instance.get(`auth/me`)
    },
    GetProfile(userId){
        return instance.get("profile/"+ userId)
    }



};
