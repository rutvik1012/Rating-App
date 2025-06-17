let stars =document.querySelectorAll(".fa-star");
let selectedstar=document.querySelector('.selected_star')
// let updates=document.querySelectorAll('.active')


function starRating(){
 stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
        
      } else {
        s.classList.remove("active");
        
      }
    });

    // Update selected rating value
    selectedstar.textContent = index + 1;

  });
});   
}
starRating();
