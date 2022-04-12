// Cat List
const cats = [{name: "Luna", src: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg", clicked: 0}, {name:"Milo", src: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",clicked: 0},{name: "Oliver", src: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg",clicked: 0},{name: "Leo",src: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",clicked: 0},{name:"Loki", src: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",clicked: 0}]

// loop over the cats in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];

    // We're creating a DOM element for the catLists
    const node = document.createElement("a");
    node.className = "w3-bar-item w3-button w3-hover-white"
    const textnode = document.createTextNode(cat.name);
    node.appendChild(textnode);
    document.getElementById("catList").appendChild(node);
    
    // Cat Container
    const catContainer = document.createElement("div");
    catContainer.id = i
    catContainer.style = "display:none"
  
    // Display cat picture on homepage
    const catDiv = document.createElement("div");
     catDiv.className = "w3-container"
     catDiv.style = "margin-top:80px;"
  
    const catName = document.createElement("h1");
    catName.className = "w3-jumbo"
    catName.innerHTML = `<b>Cat Name: ${cat.name}</b>`
    
    const catCount = document.createElement("h1");
    catCount.className = "w3-xxxlarge w3-text-red"
    catCount.innerHTML = `<b>Clicked: <span id="count-${i}">0</span></b>`
    
    const catPhotoContainer = document.createElement("div");
    catPhotoContainer.className = "w3-row-padding"
    
    const catPhoto = document.createElement("div");
     catPhoto.className = "w3-half"
     catPhoto.innerHTML = `<img src="${cat.src}" style="width:100%">`
     
     const main = document.getElementById("main")
    main.appendChild(catContainer)
    catContainer.appendChild(catDiv);
      catDiv.appendChild(catName)
      catDiv.appendChild(catCount)
    catContainer.appendChild(catPhotoContainer);
      catPhotoContainer.appendChild(catPhoto)
  
catPhoto.addEventListener('click', (function(cat){
  return function() {
     cat.clicked += 1
    catCount.innerHTML = `<b>Clicked: <span id="count-${i}">${cat.clicked}</span></b>`
  } 
  })(cat));
  
  // Display cat photo and other informatin
node.addEventListener('click', (function(i){
  return function() {
    for (var i = 0; i < cats.length; i++){
      document.getElementById(i).style = "display:none"
      document.getElementById("instruction").style = "display:none"
    }
   catContainer.style = "display:block"
  } 
  })(i));
};

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}