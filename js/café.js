let photoCadre=document.querySelectorAll('.cadrePhoto');

for (let i=0;i<photoCadre.length; i++ ){
    photoCadre[i].addEventListener('mouseover',opacité0);
    photoCadre[i].addEventListener('mouseout',opacité1);
    
};

function opacité0(event) {
    if (event){this.style.opacity=0.5;}
    else{this.style.opacity=1;}
};

function opacité1(event) {
    if (event){this.style.opacity=1;}
    else{this.style.opacity=0;}
};
		 
