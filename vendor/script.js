$(document).ready(function () {
   var selectedSmileyId = 0;
   var selectedSmileyParentId = 0;

   var hidePages = function (event) {
      // document.getElementById('big-smile-section').classList.add("page-visible");
      $('#happiness-metric').hide();
      $('#big-smile-section').show();

      // big smile page
      $('#empowered-women-face').hide();
      $('#icon-actions').hide();

      setTimeout(() => {
      }, 300);

      $('#init-section-header').animate();
   }

   onDrop = function (event) {
      event.preventDefault();
      var smileyElement = document.getElementById(selectedSmileyId);
      var parentElement = document.getElementById(selectedSmileyParentId);
      var clonedElement = smileyElement.cloneNode(true);
      clonedElement.id = smileyElement.id.concat('-cloned');
      event.target.appendChild(smileyElement);
      parentElement.appendChild(clonedElement);
      document.getElementById('smile1').draggable = false;
      document.getElementById('smile2').draggable = false;
      document.getElementById('smile3').draggable = false;
      document.getElementById('women-face').style.background = "url('vendor/images/pops.jpg')";
      document.getElementById('women-face').style.backgroundRepeat = "no-repeat";
      document.getElementById('women-face').style.backgroundPosition = "center";
      setTimeout(function () { hidePages(); }, 800);
   };

   $("#face")
      .on("dragover", () => {
         event.preventDefault();
      })
      .on("drop", onDrop);

   $("#smile2")
      .on("dragenter", (event) => {
         event.preventDefault();
         selectedSmileyId = event.originalEvent.target.id;
         selectedSmileyParentId = document.getElementById(event.originalEvent.target.id).parentNode.id;
      })
      .on("dragover", () => {
         event.preventDefault();
      });

   var init = function (event) {
      $('#pledge-for-child-education').hide();
      $('#big-smile-section').hide();
   }

   init();
});