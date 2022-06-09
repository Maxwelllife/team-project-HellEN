function readMore() {
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const btnMore = document.getElementById("btnMore");
if(dots.style.display === "none") {
    dots.style.display="block";
    btnMore.innerHTML="Read more";
    more.style.display="none";
}
else {
    dots.style.display="none";
    btnMore.innerHTML="Hide";
    more.style.display="block";
}
}