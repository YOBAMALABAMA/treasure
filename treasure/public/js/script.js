function hide_menu(){

    document.getElementById('sidebar').style.display="none";
    document.getElementById('burger').style.display="block";
    document.getElementById('burger1').style.display="none";

}
function show_menu(){
    
    document.getElementById('sidebar').style.display="flex";
    document.getElementById('burger1').style.display="block";
    document.getElementById('burger').style.display="none";

}