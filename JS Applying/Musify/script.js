console.log("Hello");

// vairable initialization
let songIdx= 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let miniPlay = document.getElementsByClassName("miniPlay");
let songName = document.getElementsByClassName("songName");
let songItem = Array.from(document.getElementsByClassName("songItem"));



let songList = [
    {name:"song name 1", path:"songs/1.mp3", cover:"covers/1.jpg"},
    {name:"song name 2", path:"songs/2.mp3", cover:"covers/2.jpg"},
    {name:"song name 3", path:"songs/3.mp3", cover:"covers/3.jpg"},
    {name:"song name 4", path:"songs/4.mp3", cover:"covers/4.jpg"},
    {name:"song name 5", path:"songs/5.mp3", cover:"covers/5.jpg"},
    {name:"song name 6", path:"songs/6.mp3", cover:"covers/6.jpg"},
    {name:"song name 7", path:"songs/7.mp3", cover:"covers/7.jpg"},
    {name:"song name 8", path:"songs/8.mp3", cover:"covers/8.jpg"},
    {name:"song name 9", path:"songs/9.mp3", cover:"covers/9.jpg"},
    {name:"song name 10", path:"songs/10.mp3", cover:"covers/10.jpg"},

]

//retireving song name and covers
songItem.forEach((element,i) => {
    
    element.getElementsByTagName("img")[0].src = songList[i].cover; 
    element.getElementsByClassName("songName")[0].innerText = songList[i].name;
});


// play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        console.log(audioElement.currentTime)
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIdx).classList.remove("fa-play-circle");
        document.getElementById(songIdx).classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

        document.getElementById(songIdx).classList.remove("fa-pause-circle");
        document.getElementById(songIdx).classList.add("fa-play-circle");

        gif.style.opacity = 0;
    }
})

//Play/Pause for SongList
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('miniPlay')).forEach((element)=>{
        
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })

}

const makeAllPause = ()=>{
    Array.from(document.getElementsByClassName('miniPlay')).forEach((element)=>{
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
    })
}

Array.from(document.getElementsByClassName('miniPlay')).forEach((element) => {
    
    element.addEventListener('click', (e) => {
        if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlays();
            songIdx = parseInt(e.target.id);
            console.log("mini play if",songIdx);
            
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `songs/${songIdx}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            document.getElementById("masterSongName").innerText =  songList[songIdx-1].name;
            gif.style.opacity = 1;
        }   

        else{
            audioElement.pause();
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }

    })
})



// next previous
document.getElementById('next').addEventListener('click', ()=>{
    if(songIdx>=9){
        songIdx = 1;
    }
    else{
        songIdx += 1;
    }
    makeAllPlays();
    document.getElementById(songIdx).classList.remove("fa-play-circle");
    document.getElementById(songIdx).classList.add("fa-pause-circle");
    console.log("next",songIdx);
    audioElement.src = `songs/${songIdx}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    console.log(songList[songIdx-1].name);
    document.getElementById("masterSongName").innerText =  songList[songIdx-1].name;
    gif.style.opacity = 1;

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIdx<=0){
        songIdx = 1;
    }
    else{
        songIdx -= 1;
    }
    console.log("prev",songIdx);
    makeAllPlays();
    document.getElementById(songIdx).classList.remove("fa-play-circle");
    document.getElementById(songIdx).classList.add("fa-pause-circle");
    
    audioElement.src = `songs/${songIdx}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementById("masterSongName").innerText =  songList[songIdx-1].name;
    gif.style.opacity = 1;

})

// listen events 

audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/ 100;
})


