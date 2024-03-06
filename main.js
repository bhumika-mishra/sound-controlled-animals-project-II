function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/ryOnZkScD/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}