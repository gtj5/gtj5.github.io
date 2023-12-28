const header = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 150){
        header.classList.add('navbarDark');
    }
    else{
        header.classList.remove('navbarDark');
    }
}

import Pdf from "/resume/Jean Ortiz Resume.pdf";

onResumeClick(){ 
    window.open(Pdf);
}

render() { 
return(
    <a onClick={this.onResumeClick}>
    Resume
    </a>
)}