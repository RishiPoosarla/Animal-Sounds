//https://teachablemachine.withgoogle.com/models/F_hpvLByQ/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/F_hpvLByQ/model.json", modelready);
}
function modelready(){
    classifier.classify(gotresults);
}