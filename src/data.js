import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Waiting",
            artist: "Kevin Kuh",
            cover: "https://picsum.photos/seed/waiting/500",
            id: uuidv4(),
            active: true,
            color: ["#6e5f4a", "#957b6b"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            name: "Lost Woods",
            artist: "Cocabona, Emperose",
            cover: "https://picsum.photos/seed/lost-woods/500",
            id: uuidv4(),
            active: false,
            color: ["#905b38", "#bdccde"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            name: "Awake",
            artist: "Allem Iversom",
            cover: "https://picsum.photos/seed/awake/500",
            id: uuidv4(),
            active: false,
            color: ["#373422", "#1b7182"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            name: "Nights in West",
            artist: "Ajmw",
            cover: "https://picsum.photos/seed/dawnvalley/500",
            id: uuidv4(),
            active: false,
            color: ["#353728", "#505851"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            name: "I Wish It Were (You)",
            artist: "Middle School, Taro",
            cover: "https://picsum.photos/seed/softmeadow/500",
            id: uuidv4(),
            active: false,
            color: ["#424a55", "#79909e"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
            name: "Reflection",
            artist: "Swørn",
            cover: "https://picsum.photos/seed/reflection/500",
            id: uuidv4(),
            active: false,
            color: ["#626262", "#8a8a8a"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        },
        {
            name: "It's Okay",
            artist: "Yasper",
            cover: "https://picsum.photos/seed/its-okay/500",
            id: uuidv4(),
            active: false,
            color: ["#414648", "#6c7270"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
        },
        {
            name: "Grey",
            artist: "Allem Iversom",
            cover: "https://picsum.photos/seed/grey/500",
            id: uuidv4(),
            active: false,
            color: ["#628b91", "#8ca4b0"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        },
        {
            name: "Meadows",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://picsum.photos/seed/meadows/500",
            id: uuidv4(),
            active: false,
            color: ["#50504a", "#b7b7b7"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        },
        {
            name: "Sorry",
            artist: "Swørn",
            cover: "https://picsum.photos/seed/quietlake/500",
            id: uuidv4(),
            active: false,
            color: ["#416478", "#c3cecd"],
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        }
    ];
}

export default chillHop;
