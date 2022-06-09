function readMore() {
    const dots = document.getElementById("dots");
    const more = document.getElementById("more");
    const btn = document.getElementById("btn-more");
if(dots.style.display === "none") {
    dots.style.display="inline";
    btnMore.innerHTML="Read more";
    more.style.display="none";
}
else {
    dots.style.display="none";
    btnMore.innerHTML="Hide";
    more.style.display="inline";
}
}