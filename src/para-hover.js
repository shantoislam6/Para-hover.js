

/*
 * Paragraph hover
 * @version static
 * @author & creator Shanto Islam
 * @to do paragraph hover Antimtion
  https://github.com/shantoislam6/
 * 
*/
function ParaHover(obj){

    //geting all plugin interface

    this.obj = obj;


    //initial all fanctionality
    this.int = function(){


        var $this = this;

        if(this.obj.container != undefined){


            this.obj.container.innerHTML += ' ';

            var tagAdd = this.obj.container.innerHTML.replace(/(.*?)\s/gim,'<span class="animated"> $1 </span>' );

            this.obj.container.innerHTML = tagAdd;


        }

        let el = this.obj.container.children;

        for(var i = 0 ; i<el.length; i++){

            var cssText = 'display:inline-block; margin:'+$this.obj.wordspeching+';animation-duration:'+$this.obj.hoverDuration+'ms;animation-delay:'+$this.obj.hoverDelay+'ms';
            el[i].style.cssText = cssText;
            
            el[i].addEventListener('mouseenter',function(e){
                this.classList.add($this.obj.hoverName);
                });
                el[i].addEventListener('mouseleave',function(e){
                    var $that = this;
                    setTimeout(function(){
                        $that.classList.remove($this.obj.hoverName);
                    },$this.obj.hoverDuration + $this.obj.hoverDelay);
                
                });
                
        }
        
    }

}
/*----------------END-----------*/
    

    


	