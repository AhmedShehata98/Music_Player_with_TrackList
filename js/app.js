var randomIndex = Math.floor(Math.random() * dataSongs.length)
let indexNumber = randomIndex ;
let audioPlayer = document.querySelector('.AudioPlayerEle');


const tracksItemInList = document.querySelector('.side-menu nav li:first-child a') ,
TracksContainer        = document.querySelector('.track-container') ,
trackBoxInfo           = document.querySelector('.tracks') ,
trackbox_Cover         = document.querySelector('.track .cover img'),
trackbox_Name          = document.querySelector('.track .song-name p'),
trackbox_Artist        = document.querySelector('.track .artist p'),
trackbox_TimeDuration  = document.querySelector('.track .time span'),
themesItemInList       = document.querySelector('.side-menu nav li:last-child a') ,
colorsBoxsInfo         = document.querySelector('.theme') ,
colorsBoxs             = document.querySelector('.theme-preview') ,
mainPlayerBox_Cover    = document.querySelector('.song-cover') ,
mainPlayerBox_Name     = document.querySelector('.song-name-bar p:first-child') ,
mainPlayerBox_Artist   = document.querySelector('.song-name-bar p:last-child') ,
mainPlayerBox_CurrentTime   = document.querySelector('.currentTime') ,
mainPlayerBox_SeekBar       = document.querySelector('#seekbar') ,
mainPlayerBox_TimeDuration  = document.querySelector('.DurationTime') ,
controlBTNs_Backword        = document.querySelector('.backword') ,
controlBTNs_play            = document.querySelector('.play') ,
controlBTNs_pause           = document.querySelector('.pause') ,
controlBTNs_Forward         = document.querySelector('.forward') ,
controlBTNs_VolumeBtn       = document.querySelector('.volume') ,
controlBTNs_VolPanel        = document.querySelector('.vol_panel') ,
controlBTNs_VolSeekBar      = document.querySelector('#volume-control') ,
controlBTNs_VolMute         = document.querySelector('.vol_mute');

window.onload=SETUP_MUSIC_INF(indexNumber);
PLAY();
PAUSE();
SEEKBAR_ACTION();
SONG_BACKWORD_Forward();
CREATE_TRACKS_ELEMENT();
VOL_BTN_ACTIONS();
ASIDE_LIST_ITEMS();
SET_THEMES_COLOR();
REMEMBER_ME();

function SETUP_MUSIC_INF(index){
    mainPlayerBox_SeekBar.value = 0;

    let songDatasArray = dataSongs[index] ;



    mainPlayerBox_Cover.src = songDatasArray.cover ;
    audioPlayer.src = songDatasArray.path;
    mainPlayerBox_Name.innerHTML = songDatasArray.name  ;
    mainPlayerBox_Artist.innerHTML = songDatasArray.artist   ;
    CREATE_TRACKS_ELEMENT();

    // Geting song Duration Time With set interval to fix NaN
    setInterval(()=>{
        // trackbox_TimeDuration.innerHTML = TIME_FORMAT(audioPlayer.duration)
        mainPlayerBox_TimeDuration.innerHTML = TIME_FORMAT(audioPlayer.duration)
    },300)

    setInterval(()=>{
        mainPlayerBox_CurrentTime.innerHTML =TIME_FORMAT(audioPlayer.currentTime);
    },500)
    
}

function TIME_FORMAT(number){
    let min = Math.floor(number / 60);
        if(min <= 10 )
        {
            min = `0${min}` ;
        }
    let sec = Math.floor(number % 60)
        if(sec <= 10)
        {
            sec= `0${sec}` ;

        }
            return `${min} : ${sec}`
}

function PLAY(){
    controlBTNs_play.addEventListener('click',()=>{
        // document.querySelector('.play_paue_container').classList.add('active');
        // audioPlayer.play();
        SET_PLAY_STATUS();
    })
}
function PAUSE(){
    controlBTNs_pause.addEventListener('click',()=>{
        // document.querySelector('.play_paue_container').classList.remove('active');
        // audioPlayer.pause();
        SET_PAUSE_STATUS();
    })
}
function SET_PLAY_STATUS(){
    document.querySelector('.play_paue_container').classList.add('active');
    audioPlayer.play();
}
function SET_PAUSE_STATUS(){
        document.querySelector('.play_paue_container').classList.remove('active');
        audioPlayer.pause();
}

function SEEKBAR_ACTION(){
    setInterval(()=>{
        mainPlayerBox_SeekBar.max = audioPlayer.duration
        mainPlayerBox_SeekBar.value=audioPlayer.currentTime ;
    },500)
    mainPlayerBox_SeekBar.addEventListener('change',()=>{
        audioPlayer.currentTime = mainPlayerBox_SeekBar.value;
    })
}

function SONG_BACKWORD_Forward(){
    controlBTNs_Backword.addEventListener('click',()=>{
        if(indexNumber <= 0 )
        {
            document.querySelector('.backword').classList.add('active')
        }else{
            document.querySelector('.backword').classList.remove('active')
            document.querySelector('.play_paue_container').classList.add('active');
            indexNumber--
            SETUP_MUSIC_INF(indexNumber);
            audioPlayer.play();
        }
    })
    controlBTNs_Forward.addEventListener('click',()=>{
        if(indexNumber >= dataSongs.length -1 )
        {
            document.querySelector('.forward').classList.add('active')
        }else{
            document.querySelector('.forward').classList.remove('active');
            document.querySelector('.play_paue_container').classList.add('active');
            indexNumber++
            SETUP_MUSIC_INF(indexNumber);
            audioPlayer.play();
        }
    })
}

function CREATE_TRACKS_ELEMENT(){

        TracksContainer.innerHTML='';
    for(let i = 0; i < dataSongs.length -1 ; i++)
    {
        let track = document.createElement("div");
        track.className = "track"
        track.setAttribute('data-MusicSrc',`${dataSongs[i].path}`);
        track.setAttribute('data-cover',`${dataSongs[i].cover}`);
        track.setAttribute('data-Name',`${dataSongs[i].name}`);
        track.setAttribute('data-artist',`${dataSongs[i].artist}`);
        
        let cover = document.createElement('img'),
            name = document.createElement('div'),
            pragraph_name = document.createElement('p'),
            artist = document.createElement('div'),
            pragraph_art = document.createElement('p');
    
            cover.className= 'cover';
                cover.setAttribute('data-MusicSrc',`${dataSongs[i].path}`)
                cover.setAttribute('data-cover',`${dataSongs[i].cover}`);
                cover.setAttribute('data-Name',`${dataSongs[i].name}`);
                cover.setAttribute('data-artist',`${dataSongs[i].artist}`);
            name.className= 'song-name';
                name.setAttribute('data-MusicSrc',`${dataSongs[i].path}`);
                name.setAttribute('data-MusicSrc',`${dataSongs[i].path}`)
                name.setAttribute('data-cover',`${dataSongs[i].cover}`);
                name.setAttribute('data-Name',`${dataSongs[i].name}`);
                name.setAttribute('data-artist',`${dataSongs[i].artist}`);
                pragraph_name.setAttribute('data-MusicSrc',`${dataSongs[i].path}`);
                pragraph_name.setAttribute('data-MusicSrc',`${dataSongs[i].path}`)
                pragraph_name.setAttribute('data-cover',`${dataSongs[i].cover}`);
                pragraph_name.setAttribute('data-Name',`${dataSongs[i].name}`);
                pragraph_name.setAttribute('data-artist',`${dataSongs[i].artist}`);
            artist.className= 'artist';
    
            track.appendChild(cover);
                cover.src = dataSongs[i].cover;
            track.appendChild(name);
                name.appendChild(pragraph_name);
                    pragraph_name.appendChild(document.createTextNode(dataSongs[i].name));
            track.appendChild(artist);
                artist.appendChild(pragraph_art);
                    pragraph_art.appendChild(document.createTextNode(dataSongs[i].artist));
                    // start audio path src set
                    GET_SETUP_INFO(track);
                    
                    // End audio path src set
        TracksContainer.appendChild(track);
    }

}
function GET_SETUP_INFO(track ){
    track.addEventListener('click',(e)=>{
        SET_PLAY_STATUS();
        audioPlayer.src = e.target.getAttribute('data-MusicSrc');
        mainPlayerBox_Cover.src = e.target.getAttribute('data-cover');
        mainPlayerBox_Name.innerHTML = e.target.getAttribute('data-Name');
        mainPlayerBox_Artist.innerHTML = e.target.getAttribute('data-artist');    
        audioPlayer.play();
    })
}

function VOL_BTN_ACTIONS(){
    controlBTNs_VolumeBtn.addEventListener('click',()=>{
        document.querySelector('.right-side-info').classList.toggle('active')
    })
    
    controlBTNs_VolMute.addEventListener('click',()=>{
        
        if(audioPlayer.volume == 1 )
        {
            audioPlayer.volume = 0;
            controlBTNs_VolMute.classList.add('active');
        }else{
            controlBTNs_VolMute.classList.remove('active');
            audioPlayer.volume = 1;
        }
    })
    
    controlBTNs_VolSeekBar.addEventListener('change',()=>{
        audioPlayer.volume = GET_FLOAT(controlBTNs_VolSeekBar.value);
        controlBTNs_VolMute.classList.remove('active');
    })
}
function GET_FLOAT(num){
    let float = `0.${num}`
    if(num <= 0)
    {
        float = num
    }
    if(num >= 99){
        float = '1'
    }
    return Number(float)
}

function ASIDE_LIST_ITEMS(){
    themesItemInList.addEventListener('click',()=>{
        trackBoxInfo.classList.add('active');
        colorsBoxsInfo.classList.add('active')
    })
    tracksItemInList.addEventListener('click',()=>{
        trackBoxInfo.classList.remove('active');
        colorsBoxsInfo.classList.remove('active')
    })
}

function SET_THEMES_COLOR(){
    Array.from(colorsBoxs.children).forEach(color => {
        color.addEventListener('click',(e)=>{
            SAVE_IN_STORAGE(e.target.dataset.clr)
            document.documentElement.style.setProperty('--main-clr',GET_FROM_STORAGE('backgrondColor'))
        })
    });
}

function SAVE_IN_STORAGE(input){
    window.localStorage.setItem('backgrondColor',input);
    
}

function GET_FROM_STORAGE(color){
   return window.localStorage.getItem(color);
}


function REMEMBER_ME(){
    return document.documentElement.style.setProperty('--main-clr',GET_FROM_STORAGE('backgrondColor'));
}