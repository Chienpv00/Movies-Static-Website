window.addEventListener("load", function(){

// Declare Slider

//Declare Category
const catNextAll = this.document.querySelectorAll('.cat-next');
const catPrevAll = this.document.querySelectorAll('.cat-prev');
var catIndex;
var catItemLength; //chieu dai cua image vaf margin right
var catItemMarginMax = 0.0161589008*(this.document.querySelector('.cat-container').offsetWidth);
var catItemMarginMin = 0.0499999999998*(this.document.querySelector('.cat-container').offsetWidth);
if(this.screen.width>1000){
    catItemLength =  this.document.querySelector('.cat-image').offsetWidth + catItemMarginMax;
}
else{
    catItemLength =  this.document.querySelector('.cat-image').offsetWidth + catItemMarginMin;
}

// category
[...catNextAll].forEach(es=>es.addEventListener('click', (e)=>{
    var catContainer = e.target.parentElement;
    var catI=catContainer.querySelector('.cat-container-flex');
    changeCat(catContainer,catI, 1);
    catI.dataset.catindex ++;
}));

[...catPrevAll].forEach(ea=>ea.addEventListener('click', (e)=>{
    var catContainer = e.target.parentElement;
    var catIPrev=catContainer.querySelector('.cat-container-flex');
    changeCat(catContainer,catIPrev, -1);
    catIPrev.dataset.catindex --;
}));

    // var catI = 0;
function changeCat(a,catI,i){
    // var catI;
    var catPos=0;
    let catFlex = a.querySelector('.cat-container-flex');
    let catLength = a.querySelectorAll('.cat-length>.cat-movie').length; // so phan tu cua 1 cat
    var catItemRwd;
    var u = a.querySelector('.cat-prev');
    var t = a.querySelector('.cat-next');
    var p = catI.dataset.catindex;

  
    if (window.screen.width>1000){
        catItemRwd=6;
    } else{
        catItemRwd=3;
    }
    catIndex = catLength/catItemRwd-p;

    if (i==1) {
        if (catIndex>1){
            t.style='display: inline-block;';
            u.style='display: inline-block;';
            if (catIndex>=2) {
                p++;
                catPos=-1*catItemRwd*catItemLength*p;
                catFlex.style=`transform: translateX(${catPos}px)`;
            } else{//truong hop remain be hon 6||3 phan tu
                var itemRemain = Math.round(catIndex*catItemRwd-catItemRwd);
                t.style='display: none;';
                catPos=-1*catItemRwd*catItemLength*p - itemRemain*catItemLength;
                catFlex.style=`transform: translateX(${catPos}px)`;
            }
        }
        else{
            t.style='display: none;';
        }
    } else if(i==-1) {
        if (p>=2){
            catPos=-1*catItemRwd*catItemLength*p + catItemRwd*catItemLength;
            catFlex.style=`transform: translateX(${catPos}px)`;
        } else {
            u.style='display: none;';
            t.style='display: inline-block;';
            catFlex.style=`transform: translateX(0px)`;         
        }  
    }
}

});
