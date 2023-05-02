interface DataShape {
  id: number;
  profileimage: string;
  name: string;
  gender: string;
  birthdate: string;
  lookingfor: string;
  city: string;
}

export const dataProfile: DataShape[] = [
  {
    id: 1,
    profileimage: "./assets/image/profile/Pepito.png",
    name: "Pepito",
    gender: "Male",
    birthdate: "03/11/2020",
    lookingfor: "Play",
    city: "Cali",
  },
  {
    id: 2,
    profileimage: "./assets/image/profile/Almendra.png",
    name: "Almendra",
    gender: "Female",
    birthdate: "01/01/2019",
    lookingfor: "Coffe",
    city: "Cali",
  },
  {
    id: 3,
    profileimage: "./assets/image/profile/Josefo.png",
    name: "Josefo",
    gender: "Male",
    birthdate: "28/12/2016",
    lookingfor: "Love",
    city: "Cali",
  },
  {
    id: 4,
    profileimage: "./assets/image/profile/Rocky.png",
    name: "Rocky",
    gender: "Male",
    birthdate: "26/03/2020",
    lookingfor: "Play",
    city: "Cali",
  },
];

interface community {
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
];

interface chatlist {
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
];

interface MyProfile {
  mybackground: string;
  myprofileimage: string;
  myname: string;
  mygender: string;
  mybirthdate: string;
  mydescription: string;
  mylookingfor: string;
  mylocation: string;
}

export const dataMyprofile: MyProfile[] = [
  {
    mybackground: "./assets/image/my_profile/background.png",
    myprofileimage: "./assets/image/my_profile/Kathia.png",
    myname: "Kathia",
    mygender: "Female",
    mybirthdate: "03/11/2020",
    mydescription:
      "Hi! i’m Kathia, i’m a coquer spaniel little dog and i’m looking for another dog friend to play in afternoons",
    mylookingfor: "Play",
    mylocation: "Cali",
  },
];

interface Navbar {
  navbarlogo: string;
  navbarhome: string;
  navbarcommunity: string;
  navbarchat: string;
  navbarnotifications: string;
  navbarnameprofile: string;
  navbarprofile: string;
}

export const dataNavbar: Navbar[] = [
  {
    navbarlogo: "./assets/logo/Dogeet.png",
    navbarhome: "./assets/icon/nav/on/home_on.png",
    navbarcommunity: "./assets/icon/nav/off/my_community_off.png",
    navbarchat: "./assets/icon/nav/off/chats_off.png",
    navbarnotifications: "./assets/icon/nav/bell.png",
    navbarnameprofile: "Kathia",
    navbarprofile: "./assets/image/my_profile/Kathia.png",
  },
];

interface DataShadow {
  thetitle: string;
}

export const dataShadowCont: DataShadow[] = [
  {
    thetitle: "My Community",
  },
  {
    thetitle: "Chats",
  },
];
