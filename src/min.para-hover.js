

/*
 * Paragraph hover
 * @version static
 * @author & creator Shanto Islam
 * @to do paragraph hover Antimtion
  https://github.com/shantoislam6/Para-hover.js/
 * 
*/
function ParaHover(n){this.obj=n,this.int=function(){var n=this;if(null!=this.obj.container){this.obj.container.innerHTML+=" ";var e=this.obj.container.innerHTML.replace(/(.*?)\s/gim,'<span class="animated"> $1 </span>');this.obj.container.innerHTML=e}let i=this.obj.container.children;for(var o=0;o<i.length;o++){var t="display:inline-block; margin:"+n.obj.wordspeching+";animation-duration:"+n.obj.hoverDuration+"ms;animation-delay:"+n.obj.hoverDelay+"ms";i[o].style.cssText=t,i[o].addEventListener("mouseenter",function(e){this.classList.add(n.obj.hoverName)}),i[o].addEventListener("mouseleave",function(e){var i=this;setTimeout(function(){i.classList.remove(n.obj.hoverName)},n.obj.hoverDuration+n.obj.hoverDelay)})}}}
/*----------------END-----------*/
    

    
