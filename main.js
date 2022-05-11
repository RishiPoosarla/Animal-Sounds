dog = 0;
cat = 0;
//https://teachablemachine.withgoogle.com/models/F_hpvLByQ/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/F_hpvLByQ/model.json", modelready);
}
function modelready(){
    classifier.classify(gotresults);
}

function gotresults(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML = "I can Hear: " + results[0].label;
    document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("result_count").innerHTML = "Detected Dog: " + dog + " Detected Cat: " + cat;
    document.getElementById("result_count").style.color = "rgb(" + r + "," + g + "," + b + ")";
  
   img = document.getElementById("animal_img");
    if(results[0].label == "Barking"){
dog++;

img.src = "dog.jpg";
   }
   else if(results[0].label == "Meowing"){
    cat++;
  
    img.src = "cat image.jpg";
       }
       else if(results[0].label == "Roaring"){
        img.src = "lion.jpg";
           } 
           else if(results[0].label == "Mooing"){
            img.src = "cow.jpg";
               } 
               else{
                   img.src = "ear.jpg";
               }
        }
}