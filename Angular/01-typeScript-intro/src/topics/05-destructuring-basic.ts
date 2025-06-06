interface AudioPlayer {
    song: string;  
    volume: number;
    duration: number;
    details:Details;
}

interface Details {
    autor: string;
    year: number;
    title: string;
}
 const  audioPlayer: AudioPlayer = {
    song: 'https://www.example.com/audio.mp3',
    volume: 80,
    duration: 300,
    details: {
        autor: 'John Doe',
        year: 2021,
        title: 'My Audio'
    }
 }
const song= "new song";
const autor= "new author";

const{song:anotherSong, duration:duration, details }= audioPlayer;
const {autor:anotherAutor}= details

console.log(song, autor);
console.log(anotherSong, anotherAutor);
console.log(duration);
export{};
