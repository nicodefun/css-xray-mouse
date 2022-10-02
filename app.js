function cursor(e){
    let bone = document.getElementById('bone');
    bone.style.top = (e.clientY - 200) +'px';
    bone.style.left = (e.clientX -150)  +'px';
}

document.addEventListener("mousemove", cursor);