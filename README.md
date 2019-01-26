# Para-hover.js[![Build Status](https://shantoislam6.github.io/Para-hover.js/)
A paragraph hover aniamtion plugin 
### [LIVE DEMO ➫](https://shantoislam6.github.io/Para-hover.js/)
## Documentation

It just take seconds to install and use WOW.js!
[Downloade](https://github.com/shantoislam6/Para-hover.js/archive/master.zip)

### Dependencies
- [animate.css](https://github.com/daneden/animate.css);
### How to usage

- HTML

```html
  <!--link this-->
  <script src="src/min.para-hover.js"></script>
  <link rel="stylesheet" href="src/animate.min.css">
```

- JavaScript

```javascript

 new ParaHover({
 container : document.getElementById('texthover1'), //include  container as a any single nodeParent where you want hover animated
 hoverName :'rubberBand', //you can use any animtaion from animate.css class like bouce,jello , tada , rubberBand, and more  for hovername;
 hoverDuration: 1000, //ms
 hoverDelay : 100,//ms
 wordspeching: '3px' //word speching amon each word. ou have to must set this property;
}).int();  
wow.init();
