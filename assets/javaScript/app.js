
let header = document.querySelector("header");
let boxup = document.getElementById("up");
let nav = document.querySelectorAll("header .container nav a");
let icone = document.getElementById("icone");
let Form = document.querySelector("footer .container .formContactUs form ");
let formSelect = document.querySelector("footer .container .formContactUs form select");
let mobility = document.querySelectorAll(".Testimonials .container .Mobility div");
let recommendations = document.querySelector(".recommendations");


onscroll = _=>{
  if (scrollY > 0 ) {
    header.style.cssText =
    "background-color:var(--black1); box-shadow:0 0 5px var(--black2);position: fixed;  width: 100%;z-index: 1;";
    boxup.style.cssText ="visibility: visible;";
    icone.style.cssText ="visibility: visible";    
  } else {
    header.style.cssText ="position:static; background-color: ;box-shadow: ";
    boxup.style.cssText ="visibility: hidden";
    icone.style.cssText ="visibility: hidden";
  }
}
nav[0].style.cssText ="background-color:var(--orange)";
nav[0].onclick = _=>{
  nav[0].style.cssText ="background-color:var(--orange)";
  nav[1].style.cssText ="";
  nav[2].style.cssText ="";
  nav[3].style.cssText ="";
  nav[4].style.cssText ="";
  nav[5].style.cssText ="";
}
nav[1].onclick = _=>{
  nav[0].style.cssText ="";
  nav[1].style.cssText ="background-color:var(--orange)";
  nav[2].style.cssText ="";
  nav[3].style.cssText ="";
  nav[4].style.cssText ="";
  nav[5].style.cssText ="";
}
nav[2].onclick = _=>{
  nav[0].style.cssText ="";
  nav[1].style.cssText ="";
  nav[2].style.cssText ="background-color:var(--orange)";
  nav[3].style.cssText ="";
  nav[4].style.cssText ="";
  nav[5].style.cssText ="";
}
nav[3].onclick = _=>{
  nav[0].style.cssText ="";
  nav[1].style.cssText ="";
  nav[2].style.cssText ="";
  nav[3].style.cssText ="background-color:var(--orange)";
  nav[4].style.cssText ="";
  nav[5].style.cssText ="";
}
nav[4].onclick = _=>{
  nav[0].style.cssText ="";
  nav[1].style.cssText ="";
  nav[2].style.cssText ="";
  nav[3].style.cssText ="";
  nav[4].style.cssText ="background-color:var(--orange)";
  nav[5].style.cssText ="";
}
nav[5].onclick = _=>{
  nav[0].style.cssText ="";
  nav[1].style.cssText ="";
  nav[2].style.cssText ="";
  nav[3].style.cssText ="";
  nav[4].style.cssText ="";
  nav[5].style.cssText ="background-color:var(--orange)";
}


Form[5].onclick=_=>{
  
if(Form[0].value==false){
  Form[0].style.cssText="outline: 5px solid red ;"
  alert("The Name field appears to be empty and needs to be filled in!");
}else{
  Form[0].style.outline=""
}

 if(Form[1].value==false){
  Form[1].style.cssText="outline: 5px solid red ;"
  alert("The email field appears to be empty and needs to be filled in!");
}else{
  mobility1[1].style.outline=""
}

 if(Form[2].value==false){
  Form[2].style.cssText="outline: 5px solid red ;"
  alert("The phone field appears to be empty and needs to be filled in!");
}else{
  Form[2].style.outline=""
}

if(formSelect.value==""){
  formSelect.style.cssText="outline: 5px solid red ;"
  alert("The Budget field appears to be empty and needs to be filled in!");
}else{
  formSelect.style.outline=""
}

 if( Form[4].value==false){
  Form[4].style.cssText="outline: 5px solid red ;"
  alert("The message field appears to be empty and needs to be filled in!");
}else{
  Form[4].style.outline=""
}

}

mobility[0].onclick=_=>{
  recommendations.innerHTML=`
  <div class="recommendation">
    <img src="assets/img/recommendations/Image -2.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>
    <q><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt nostrum quibusdam excepturi
      magnam officia, fugit eum ex quisquam nisi quo porro perferendis reiciendis in officiis adipisci. Nostrum,
      dolore provident!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae facilis deleniti
      aliquid dolores ea vitae consequatur sint sequi, praesentium accusantium fugiat impedit mollitia culpa,
      adipisci debitis quibusdam. Animi, suscipit voluptatum!<br><q>
  </div>

  <div class="recommendation ">
    <img src="assets/img/recommendations/Image -2.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>
    <q><br>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
      deleniti
      atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
      facilis est et expedita distinctio.<br><q>
  </div>

  <div class="recommendation">
    <img src="assets/img/recommendations/image_1.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>

    <q><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur itaque unde quo aut blanditiis
      quaerat fugit reprehenderit in magni. Cupiditate vitae molestiae ad vel pariatur magni unde nostrum
      assumenda totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis molestias dolorum in
      natus reiciendis ratione officiis consequuntur minima! Eum porro nam aliquid ex non? Laudantium suscipit
      doloribus voluptas nemo placeat!<br><q>
  </div>



  `
  mobility[0].style.cssText ="background-color: #FF4900;"
  mobility[1].style.cssText ="background-color: #8C8CA5;"
  mobility[2].style.cssText ="background-color: #8C8CA5;"
}

mobility[1].onclick=_=>{
  recommendations.innerHTML=`
  <div class="recommendation ">
    <img src="assets/img/recommendations/Image -2.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>
    <q><br>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
      deleniti
      atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
      facilis est et expedita distinctio.<br><q>
  </div>

  <div class="recommendation">
    <img src="assets/img/recommendations/image_1.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>

    <q><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur itaque unde quo aut blanditiis
      quaerat fugit reprehenderit in magni. Cupiditate vitae molestiae ad vel pariatur magni unde nostrum
      assumenda totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis molestias dolorum in
      natus reiciendis ratione officiis consequuntur minima! Eum porro nam aliquid ex non? Laudantium suscipit
      doloribus voluptas nemo placeat!<br><q>
  </div>


  <div class="recommendation">
    <img src="assets/img/recommendations/Image -2.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>
    <q><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt nostrum quibusdam excepturi
      magnam officia, fugit eum ex quisquam nisi quo porro perferendis reiciendis in officiis adipisci. Nostrum,
      dolore provident!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae facilis deleniti
      aliquid dolores ea vitae consequatur sint sequi, praesentium accusantium fugiat impedit mollitia culpa,
      adipisci debitis quibusdam. Animi, suscipit voluptatum!<br><q>
  </div>
  `
  mobility[1].style.cssText ="background-color: #FF4900;"
  mobility[0].style.cssText ="background-color: #8C8CA5;"
  mobility[2].style.cssText ="background-color: #8C8CA5;"
}

mobility[2].onclick=_=>{
  recommendations.innerHTML=`

  <div class="recommendation">
    <img src="assets/img/recommendations/image_1.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>

    <q><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur itaque unde quo aut blanditiis
      quaerat fugit reprehenderit in magni. Cupiditate vitae molestiae ad vel pariatur magni unde nostrum
      assumenda totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis molestias dolorum in
      natus reiciendis ratione officiis consequuntur minima! Eum porro nam aliquid ex non? Laudantium suscipit
      doloribus voluptas nemo placeat!<br><q>
  </div>


  <div class="recommendation">
    <img src="assets/img/recommendations/Image -2.png" alt="image_1">
    <h6>John Doe</h6>
    <p>CEO Abc Company</p>
    <q><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt nostrum quibusdam excepturi
      magnam officia, fugit eum ex quisquam nisi quo porro perferendis reiciendis in officiis adipisci. Nostrum,
      dolore provident!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae facilis deleniti
      aliquid dolores ea vitae consequatur sint sequi, praesentium accusantium fugiat impedit mollitia culpa,
      adipisci debitis quibusdam. Animi, suscipit voluptatum!<br><q>
  </div>

  <div class="recommendation ">
  <img src="assets/img/recommendations/Image -2.png" alt="image_1">
  <h6>John Doe</h6>
  <p>CEO Abc Company</p>
  <q><br>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
    deleniti
    atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
    sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
    facilis est et expedita distinctio.<br><q>
</div>

  `

  mobility[2].style.cssText ="background-color: #FF4900;"
  mobility[1].style.cssText ="background-color: #8C8CA5;"
  mobility[0].style.cssText ="background-color: #8C8CA5;"
}

