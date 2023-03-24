interface DataShape{
    id: number,
    profileimage: string;
    name: string;
    gender: string;
    breed: string;
    age: string;
    activity: string;
    location: string;
}



export const dataProfile: DataShape[] = [
    {
        id: 1,
        profileimage: "./assets/image/profile/Pepito.png",
        name: "Pepito",
        gender: "male",
        breed: "teckel",
        age: "2 years",
        activity: "Love to play in the park",
        location: "Cali, Colombia"
    },
    {
        id: 2,
        profileimage: "./assets/image/profile/Almendra.png",
        name: "Almendra",
        gender: "female",
        breed: "Husky",
        age: "4 years",
        activity: "Loves to chill",
        location: "Cali, Colombia"
    },
    {
        id: 3,
        profileimage: "./assets/image/profile/Josefo.png",
        name: "Josefo",
        gender: "male",
        breed: "Pug",
        age: "1 years",
        activity: "Loves to play with water",
        location: "Cali, Colombia"
    },

]

interface community{
    communityimage: string;
    communityname: string;
    commmunitybreed: string;
}

export const dataCommunity: community[] = [
    {
    communityimage: "./assets/image/my_community/Bluey.png",
    communityname: "Bluey",
    commmunitybreed: "German Shepherd",
},

{
    communityimage: "./assets/image/my_community/Bruno.png",
    communityname: "Bruno",
    commmunitybreed: "Husky",
},

{
    communityimage: "./assets/image/my_community/Kathia.png",
    communityname: "Kathia",
    commmunitybreed: "Chihuahua",
},

]



interface chatlist{
    chatlistimage: string;
    chatlistname: string;
    chatlisttext: string;
    chatlistwhen: string;
}

export const dataChatlist: chatlist[] = [
    {
        chatlistimage: "./assets/image/chat_img/Luna.png",
        chatlistname: "Luna",
        chatlisttext: "Yes, of course",
        chatlistwhen: "Today",
    },
    {
        chatlistimage: "./assets/image/chat_img/Tobbby.png",
        chatlistname: "Tobby",
        chatlisttext: "I'd like to...",
        chatlistwhen: "Yesterday",
    },
    {
        chatlistimage: "./assets/image/chat_img/Lorenzo.png",
        chatlistname: "Lorenzo",
        chatlisttext: "See you!",
        chatlistwhen: "Yesterday",
    },
    {
        chatlistimage: "./assets/image/chat_img/Sofia.png",
        chatlistname: "Sofia",
        chatlisttext: "She loves to play",
        chatlistwhen: "Friday",
    },
]


 

