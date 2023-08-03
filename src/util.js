import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Lost Woods",
            artist: "cocabona, Emperose",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/1bcec532a76700819b9ca2853c175cdc54bccb02-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ["#FEF6C6", "#573C1E"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55130"
        },
        {
            name: "Awake",
            artist: "Allem Iversom",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
            id: uuidv4(),
            active: "false",
            color: ["#FF400B","#799398"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8891"
        },
        {
            name: "It's Okay",
            artist: "Yasper",
            cover: "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
            id: uuidv4(),
            active: "false",
            color: ["#FCBC77","#392E28"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55163"
        },
        {
            name: "Grey",
            artist: "Allem Iversom",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/75d809e774ef1f181bbfc258beb28addd45affc8-1024x1024.jpg",
            id: uuidv4(),
            active: "false",
            color: ["#DF6E32","#807C71"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8307"
        },
        {
            name: "Meadows",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2023/06/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
            id: uuidv4(),
            active: "false",
            color: ["#048484","#FCC99C"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7864"
        }
    ];
}

export default chillHop;