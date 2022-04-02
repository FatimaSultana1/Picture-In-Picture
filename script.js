const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to slect media stream,pass to media element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    }
    catch(error) {
        console.log('Whoops, error here '+error);
    }
} 
button.addEventListener('click',async () => {
    //Disable button
    button.disabled=true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled=false;
});

selectMediaStream()