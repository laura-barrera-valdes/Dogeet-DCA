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
        profileimage: "./assets/teckel.png",
        name: "Pepito",
        gender: "male",
        breed: "teckel",
        age: "2 years",
        activity: "Love to play in the park",
        location: "Cali, Colombia"
    }
]

export default dataProfile;