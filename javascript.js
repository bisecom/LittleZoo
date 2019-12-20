'use strict';
    
class Animal {
constructor(animalName, animalType) {
this.name = animalName;
this.animalType = animalType;
this.divsArray = ['zoo0', 'zoo1','zoo2','zoo3','zoo4','zoo5'];
this.divLocationName = '';
}

GettinganimalsArray(){
    let animalsArray = [];
    let bearObj = {name: 'bear', path:'https://thumbs2.imgbox.com/b0/0d/7kbdxYAb_t.jpg'};
	let tiggerObj = {name: 'tiger', path:'https://thumbs2.imgbox.com/05/56/uGJDITIR_t.jpg'};
    let elephantObj = {name: 'elephant', path:'https://thumbs2.imgbox.com/f4/d6/qNhnvaZt_t.jpg'};
    let raccoonObj = {name: 'raccoon', path:'https://thumbs2.imgbox.com/07/88/KLwLdQIH_t.jpg'};
    let zebraObj = {name: 'zebra', path:'https://thumbs2.imgbox.com/dc/ac/FCzYNxKS_t.jpg'};
    let foxObj = {name: 'fox', path:'https://thumbs2.imgbox.com/c6/de/SLu0naaD_t.jpg'};
	let giraffeObj = {name: 'giraffe', path:'https://thumbs2.imgbox.com/b9/a2/Nah7xa5W_t.jpg'};
    let hippopotamusObj = {name: 'hippopotamus', path:'https://thumbs2.imgbox.com/09/86/ZHwKWP2C_t.jpg'};
    animalsArray.push(bearObj); animalsArray.push(tiggerObj); animalsArray.push(elephantObj); animalsArray.push(raccoonObj); animalsArray.push(zebraObj); animalsArray.push(foxObj); animalsArray.push(giraffeObj); animalsArray.push(hippopotamusObj); 
    return animalsArray;
}
    
AddingObjToLayout(){
    let i, j;
    let emptyDivIndex = - 1;
    let imagesArray = this.GettinganimalsArray();
    //const elem = document.querySelector("#zoo");
    for(i = 0; i < this.divsArray.length; i++){              //looking for empty  div
        let tempElemToInsert = document.querySelector('#' + this.divsArray[i]);
        if(tempElemToInsert.childNodes.length < 2){
            emptyDivIndex = i; break;  }
        }
    
    if(emptyDivIndex >= 0){
        for(j = 0; j < imagesArray.length; j++){   //looking for proper image path
        if(imagesArray[j].name == this.animalType){
        //alert(animalsArray[i].path);
        break;
            }
        }
            
        let image = document.createElement('img');
        image.src = imagesArray[j].path;
        let src = document.getElementById(this.divsArray[emptyDivIndex]);
        src.appendChild(image);
        
        let containerForParag = document.getElementById(this.divsArray[emptyDivIndex]);
        let parag = document.createElement('p');
        parag.innerHTML =  this.name;
        containerForParag.insertBefore(parag, containerForParag.lastChild); 
        
        let br = document.createElement('br');
        containerForParag.appendChild(br);
        this.divLocationName = this.divsArray[emptyDivIndex];
        this.AddButton(this.divsArray[emptyDivIndex]);
    }
}

AddButton(divId) {
  //Create a button type dynamically.   
  let insertPlace = document.getElementById(divId);
  let element = document.createElement('button');
  let buttonName = document.createTextNode('REMOVE ME');
  element.appendChild(buttonName);
  element.setAttribute("style","font-size:11px; font-weight:bold; color:#389945; width: 115px; height: 20px");
  element.setAttribute("id",this.divLocationName);
  element.onclick = this.RemovingObjFromDiv;
  //element.addEventListener("onclick", this.RemovingObjFromDiv, false);
  insertPlace.appendChild(element);
  }
    
RemovingObjFromDiv(e) {
   
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'BUTTON') {
        let myNode = document.getElementById(e.id);
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }
    
    } 
}
    
findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
}
};

    
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function FormGettingDataAddObj(){
let objDataArray = [];//receiving ListBox value and Animal Name from input
let e = document.getElementById("Animals");

if(e != null && document.getElementById("AnimalName").value != ''){
    //if(strAnimalName != ''){
    let strAnimalValue = e.options[e.selectedIndex].value;
    e = document.getElementById("AnimalName");
    let strAnimalName = e.value;
    objDataArray.push(strAnimalValue); objDataArray.push(strAnimalName);
    let myAnimal = new Animal(strAnimalName, strAnimalValue);
    myAnimal.AddingObjToLayout();
    //}
}
else return;

}
    
FormGettingDataAddObj();
