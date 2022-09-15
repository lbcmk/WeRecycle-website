//the amount of roundness around the cards
var roundpx = '1em' //dont use percentage

const itemList = document.querySelector('#item-list');
const dbName = "more_info";

const garbage = "rgb(65, 64, 60)";
const recycling = "rgb(54, 82, 193)";
const compost = "rgb(35, 218, 74)";
const yardwaste = "rgb(141, 110, 99)";


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var nightmode = getCookie("nightmode")

if(nightmode === "true"){
	var checkBox = document.getElementById("myCheck");
	checkBox.checked = true	
}


// create element and render item
function renderItem(doc){  
    let li = document.createElement('li');
    li.setAttribute('data-id', doc.id);
    li.setAttribute('style','pointer-events: none !important;');

    let name = doc.data().name;
    let type = doc.data().type;
    let img_link = doc.data().img;
    let info = doc.data().info;

    let centre = document.createElement('center');

    let mdc_parent = document.createElement('div');
    mdc_parent.setAttribute('class', 'mdl-card-wide mdl-shadow--4dp');
    mdc_parent.setAttribute('style',`pointer-events: none !important; border-radius: ${roundpx} ${roundpx} ${roundpx} ${roundpx}`);


    let mdl_media = document.createElement('div');
    mdl_media.setAttribute('class', 'mdl-card__media');
    
    if (type == 'c')
    {
      mdl_media.setAttribute('style', 'background-color:' + compost + `; border-radius: ${roundpx} ${roundpx} 0px 0px;`);
    } else if (type == 'r')
    {
      mdl_media.setAttribute('style', 'background-color:' + recycling + `; border-radius: ${roundpx} ${roundpx} 0px 0px;`);
    } else if (type == 'g')
    {
      mdl_media.setAttribute('style', 'background-color:' + garbage + `; border-radius: ${roundpx} ${roundpx} 0px 0px;`);
    } else if (type == 'yw')
    {
      mdl_media.setAttribute('style', 'background-color:' + yardwaste + `; border-radius: ${roundpx} ${roundpx} 0px 0px;`);
    }

    let mdl_img = document.createElement('img');
    mdl_img.setAttribute('src', img_link);
    mdl_img.setAttribute('width', '150');
    mdl_img.setAttribute('height', '150');
    mdl_img.setAttribute('border', '0');
    mdl_img.setAttribute('style', 'padding:10px; object-fit: contain;');
    
    mdl_media.appendChild(mdl_img);
    mdc_parent.appendChild(mdl_media);


    let mdl_div_title = document.createElement('div');
    mdl_div_title.setAttribute('class', 'mdl-card__title');

    let mdl_h2_title = document.createElement('h2');
    mdl_h2_title.setAttribute('class', 'mdl-card__title-text');
    mdl_h2_title.textContent = name;


    mdl_div_title.appendChild(mdl_h2_title);
    mdc_parent.appendChild(mdl_div_title);


    let mdl_div_supporting_text = document.createElement('div');
    mdl_div_supporting_text.setAttribute('class', 'mdl-card__supporting-text collapse');
		mdl_div_supporting_text.setAttribute('style', 'text-transform:none;');
    mdl_div_supporting_text.innerText = info;

    mdc_parent.appendChild(mdl_div_supporting_text);


    centre.appendChild(mdc_parent);
    li.appendChild(centre);
    itemList.appendChild(li);  

	checkBoxChecked()

} 

// real time listener
db.collection(dbName).orderBy('name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added' || change.type == 'edited'){
            renderItem(change.doc);
        }
        else if(change.type == 'removed'){
            let li = itemList.querySelector(`[data-id=` + change.doc.id + ']');
            itemList.removeChild(li);
        }
    })
})


// search option

function search() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("item-list");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("mdl-card__title-text")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function checkBoxChecked() {
	var lightbackgroundcolor = "#ffffff"
	var lighttextcolor = "#000000"
	var darkbackgroundcolor = "#212121"
	var darktextcolor = "#ffffff"
	
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var body0 = document.getElementsByTagName("body");
	var body = body0[0]
	var searchbox = document.getElementById("myInput")
	var h1 = document.getElementsByTagName("h1")
	var h5 = document.getElementsByTagName("h5")
	var h6 = document.getElementsByTagName("h6")
	var li = document.getElementsByTagName("li")
	var cardtitle = document.getElementsByClassName("mdl-card__title")
	var cardtext = document.getElementsByClassName("mdl-card__supporting-text collapse")
	var searchtext = document.getElementById("myInput")
	var colourindex = document.getElementsByClassName("modal-content")
	var colourindextext = document.getElementsByClassName("colourmeaningtext")


  if (checkBox.checked == true){
    body.style.backgroundColor = darkbackgroundcolor;
		searchbox.style.backgroundColor = darkbackgroundcolor;
		h1[0].style.color = darktextcolor
		h5[0].style.color = darktextcolor
		h6[0].style.color = darktextcolor
		colourindex[0].style.backgroundColor = darkbackgroundcolor
		for(i=0;i<colourindextext.length;i++)
		colourindextext[i].style.color = darktextcolor
		for(i = 0; i < li.length; i++){
		li[i].style.backgroundColor = darkbackgroundcolor
		cardtitle[i].style.color = darktextcolor
		cardtext[i].style.color = darktextcolor
		}
		document.cookie = "nightmode=true";
  } else {
    body.style.backgroundColor = lightbackgroundcolor;
		searchbox.style.backgroundColor = lightbackgroundcolor;
		h1[0].style.color = lighttextcolor
		h5[0].style.color = lighttextcolor
		h6[0].style.color = lighttextcolor
		colourindex[0].style.backgroundColor = lightbackgroundcolor
		for(i=0;i<colourindextext.length;i++)
		colourindextext[i].style.color = lighttextcolor
		for(i = 0; i < li.length; i++){
		li[i].style.backgroundColor = lightbackgroundcolor
		cardtitle[i].style.color = lighttextcolor
		cardtext[i].style.color = "#646464"
		document.cookie = "nightmode=false";
		}
  }
}