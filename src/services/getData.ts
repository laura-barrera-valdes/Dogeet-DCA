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

interface MyProfile{
    mybackground:string;
    myprofileimage: string;
    myname: string;
    mygender: string;
    myage: string;
    mydescription:string;
    mybreed: string;
    myactivity: string;
    mylocation: string;
    
}

export const dataMyprofile: MyProfile[] = [
    {
    mybackground:"./assets/image/my_profile/background.png",
    myprofileimage: "./assets/image/my_profile/Kathia.png",
    myname: "Kathia",
    mygender: "Female",
    myage: "2 years",
    mydescription:"Hi! i’m Kathia, i’m a coquer spaniel little dog and i’m looking for another dog friend to play in afternoons",
    mybreed: "Coquer Spaniel",
    myactivity: "Play with ball",
    mylocation: "Cali, Colombia - Pampalinda",    
    },
    
]

interface Navbar{
    navbarlogo : string;
    navbarhome : string;
    navbarcommunity : string;
    navbarchat : string;
    navbarnotifications : string;
    navbarnameprofile : string;
    navbarprofile : string;
}

export const dataNavbar: Navbar [] = [
    { 
        navbarlogo : "./assets/logo/Dogeet.png",
        navbarhome : "./assets/icon/nav/on/home_on.png",
        navbarcommunity : "./assets/icon/nav/off/my_community_off.png",
        navbarchat : "./assets/icon/nav/off/chats_off.png",
        navbarnotifications : "./assets/icon/nav/bell.png",
        navbarnameprofile : "Kathia",
        navbarprofile : "./assets/image/my_profile/Kathia.png",
    }
]
 
