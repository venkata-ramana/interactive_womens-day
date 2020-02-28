function allowDrop(allowdropevent) {
   allowdropevent.preventDefault();
}

function drag(dragevent) {
   dragevent.dataTransfer.setData("smiley", dragevent.target.id);
   dragevent.dataTransfer.setData("smileyParent", document.getElementById(dragevent.target.id).parentNode.id);
}

function drop(dropevent) {
   dropevent.preventDefault();
   var smileyElement = document.getElementById(dropevent.dataTransfer.getData("smiley"));
   var parentElement = document.getElementById(dropevent.dataTransfer.getData("smileyParent"));
   var clonedElement = smileyElement.cloneNode(true);
   clonedElement.id = smileyElement.id.concat('-cloned');
   dropevent.target.appendChild(smileyElement);
   parentElement.appendChild(clonedElement);
   onDrop();
}

function onDrop() {
   document.getElementById('smile-1').draggable = false;
   document.getElementById('smile-2').draggable = false;
   document.getElementById('smile-3').draggable = false;
   document.getElementById('women-face').style.background = "url('vendor/images/pops.jpg')";
   document.getElementById('women-face').style.backgroundRepeat = "no-repeat";
   document.getElementById('women-face').style.backgroundPosition = "center";
   document.getElementById('big-smile-section').classList.add("page-visible");
   document.getElementById('happiness-metric').style.display = 'none';
}


function init () {
   document.getElementById('pledge-for-child-education').style.display = 'none';
}


init()