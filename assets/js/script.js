document.getElementById('mobmenu').addEventListener("click", function () {
    document.getElementById('mobmenulist').style.display = 'block';
    document.getElementById('mobmenu').style.display = 'none';
});
document.getElementById('mobcross').addEventListener("click", function () {
    document.getElementById('mobmenulist').style.display = 'none';
    document.getElementById('mobmenu').style.display = 'block';
})


function underDevelopment(){
    alert("This page is under development. Try after some time.");
    return false;
}