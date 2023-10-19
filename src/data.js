import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Waiting",
            artist: "Kevin Kuh",
            cover: "https://i.scdn.co/image/ab67616d0000b273db3e6023f3b739c706fbf722",
            id: uuidv4(),
            active: true,
            color: ["#7D8FAB", "#FAA96E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23173"
        },
        {
            name: "Lost Woods",
            artist: "Cocabona, Emperose",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/1bcec532a76700819b9ca2853c175cdc54bccb02-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#FEF6C6", "#573C1E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55130"
        },
        {
            name: "Awake",
            artist: "Allem Iversom",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#FF400B","#799398"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8891"
        },
        {
            name: "Nights in West",
            artist: "Ajmw",
            cover: "https://chillhop.com/wp-content/uploads/2023/06/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#DD8D96","#7DCBB3"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8723"
        },
        {
            name: "I Wish It Were (You)",
            artist: "Middle School, Taro",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/1b7f6e07967bf16feaa5628d843466d01a2141fe-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#F93E38","#F09E1D"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7895"
        },
        {
            name: "Reflection",
            artist: "Swørn",
            cover: "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
            id: uuidv4(),
            active: false,
            color: ["#B5679B","#521244"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228"
        },
        {
            name: "It's Okay",
            artist: "Yasper",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#FCBC77","#392E28"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55163"
        },
        {
            name: "Grey",
            artist: "Allem Iversom",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/75d809e774ef1f181bbfc258beb28addd45affc8-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#DF6E32","#807C71"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8307"
        },
        {
            name: "Meadows",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2023/06/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#048484","#FCC99C"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7864"
        },
        {
            name: "Sorry",
            artist: "Swørn",
            cover: "https://i.scdn.co/image/a107c2856862918d8da5249f77ec83bec388d4cf",
            id: uuidv4(),
            active: false,
            color: ["#ABABC9","#E7B853"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8305"
        }
    ];
}

export default chillHop;