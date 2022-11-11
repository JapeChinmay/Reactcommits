import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL

  return search.substring(11,search.length);
  // Place holder for functionality to work in the Stubs
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call

  let adventureDetailsAPI=config.backendEndpoint+"/adventures/detail?adventure="+adventureId;
  console.log(adventureDetailsAPI);
  try{
    const response = await fetch(adventureDetailsAPI);
    const data = await response.json();
    return data;
  }
  catch(err){
    console.log("ERROR : "+err);
    return null;
  }

  // Place holder for functionality to work in the Stubs
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM

  const advNameEl=document.getElementById('adventure-name');
  advNameEl.textContent=adventure.name;
  const advSubTitleEl=document.getElementById('adventure-subtitle');
  advSubTitleEl.textContent=adventure.subtitle;
  const advContentEl=document.getElementById('adventure-content');
  advContentEl.textContent=adventure.content;
  
  // Images 
  // const advImgDiv=document.getElementById('photo-gallery');
  // adventure.images.forEach((img)=>{
  //   const newImageEl=document.createElement('img');
  //   newImageEl.setAttribute('class','activity-card-image');
  //   newImageEl.src=img;
  //   advImgDiv.appendChild(newImageEl);
  // })

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  const advImgDiv=document.getElementById('photo-gallery');
  const newCarouselEl=document.createElement('div');
//  new comment
  newCarouselEl.innerHTML=
      
  `
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" id="caraousel-main">
        <div class="carousel-item active">
          <img src=${img} class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
`


  images.forEach((img)=>{
    const getMainDivEl=document.getElementById('caraousel-main');
    const newDivEl=document.createElement('div');
    newDivEl.setAttribute('class','carousel-item');
    const imgCarousel=document.createElement('img');
    imgCarousel.setAttribute('class','d-block w-100');
    img.src=img;
    newDivEl.appendChild(imgCarousel);
  })
  advImgDiv.appendChild(newCarouselEl);
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
