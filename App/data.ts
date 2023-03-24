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

const dataProfile: DataShape[] = [
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

export default dataProfile;