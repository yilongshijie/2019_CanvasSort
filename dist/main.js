!function(t){var i={};function e(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(r,s,function(i){return t[i]}.bind(null,s));return r},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);class r{constructor(t){this.animationDuration=400,this.xCoordFactor=50,this.yCoordFactor=50,this.fontSize=24,this.timeAnimation=new Date,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.ctx.font=`bold ${this.fontSize}px serif`,this.iMove={},this.jMove={},this.array=null,this.random(),this.draw(),this.sort()}random(){this.array=new Array;for(let t=0;t<8;t++)this.array.push(Math.floor(100*Math.random()))}sort(t=0,i=1,e=0){e!==this.array.length&&(t!==this.array.length&&i!==this.array.length-e?this.array[t]>this.array[i]?this._changeSort(t,i,e):this.sort(i,i+1,e):this.sort(0,1,++e))}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t=0;t<this.array.length;t++)this.ctx.fillText(this.array[t],this.xCoordFactor,this.yCoordFactor*(t+1))}_changeSort(t,i,e){this.timeAnimation=new Date,this.iMove={x:this.xCoordFactor,y:this.yCoordFactor*(t+1),index:t,loop:e},this.jMove={x:this.xCoordFactor,y:this.yCoordFactor*(i+1),index:i,loop:e},window.requestAnimationFrame(()=>{this._step()})}_step(){if(new Date-this.timeAnimation<=this.animationDuration){let t=(new Date-this.timeAnimation)/this.animationDuration,i=Math.sin(Math.PI*t);this._drawStepI(i,t),this._drawStepJ(i,t),window.requestAnimationFrame(()=>{this._step()})}else{let t=this.array[this.jMove.index];this.array[this.jMove.index]=this.array[this.iMove.index],this.array[this.iMove.index]=t,this.draw(),this.sort(this.jMove.index,this.jMove.index+1,this.jMove.loop)}}_drawStepI(t,i){this.ctx.clearRect(this.iMove.x,this.iMove.y-this.fontSize,this.fontSize,this.fontSize),this.iMove.x=this.xCoordFactor+.5*this.xCoordFactor*t,this.iMove.y=this.yCoordFactor*(this.iMove.index+1)+this.yCoordFactor*(this.jMove.index-this.iMove.index)*i,this.ctx.fillText(this.array[this.iMove.index],this.iMove.x,this.iMove.y)}_drawStepJ(t,i){this.ctx.clearRect(this.jMove.x,this.jMove.y-this.fontSize,this.fontSize,this.fontSize),this.jMove.x=this.xCoordFactor+1.6*this.xCoordFactor*t,this.jMove.y=this.yCoordFactor*(this.jMove.index+1)-this.yCoordFactor*(this.jMove.index-this.iMove.index)*i,this.ctx.fillText(this.array[this.jMove.index],this.jMove.x,this.jMove.y)}}class s{constructor(t){this.elementCount=14,this.yCoordStart=30,this.yCoordEnd=500,this.yCoordHeight=this.yCoordEnd-this.yCoordStart,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.array=null,this.itemWidth=this.canvas.width/this.elementCount/2,this.random(),this.draw(),setTimeout(()=>{this.sort(0,this.elementCount-1),this.draw()},1e3)}random(){this.array=new Array;for(let t=0;t<this.elementCount;t++)this.array.push(Math.floor(100*Math.random()))}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#999";for(let t=0;t<this.elementCount;t++){let i=this.yCoordHeight*(this.array[t]/100);this.ctx.fillRect(this.itemWidth*t*2+this.itemWidth/2,this.yCoordEnd,this.itemWidth,-i)}}sort(t,i){if(t>=i)return;let e=t,r=i;for(;!(e>=r);){for(;r>e;r--)if(this.array[e]>this.array[r]){let t=this.array[e];this.array[e]=this.array[r],this.array[r]=t;break}for(;e<r;e++)if(this.array[e]>this.array[r]){let t=this.array[e];this.array[e]=this.array[r],this.array[r]=t;break}}this.sort(t,e),this.sort(e+1,i)}}let o=new class{constructor(){this.sort=[s,r],this.sortIndex=0}start(){this.canvas&&this.destoryCanvas(),this.canvas=document.createElement("canvas"),this.canvas.width=Math.max(window.innerWidth,320),this.canvas.height=Math.max(window.innerHeight,568)-60,document.body.appendChild(this.canvas),new this.sort[this.sortIndex](this.canvas)}prior(){0===this.sortIndex?this.sortIndex=this.sort.length-1:this.sortIndex--,this.start()}next(){this.sortIndex===this.sort.length-1?this.sortIndex=0:this.sortIndex++,this.start()}destoryCanvas(){document.body.removeChild(this.canvas)}};document.querySelector("button:nth-of-type(1)").onclick=()=>{o.prior()},document.querySelector("button:nth-of-type(2)").onclick=()=>{o.start()},document.querySelector("button:nth-of-type(3)").onclick=()=>{o.next()},document.querySelector("button:nth-of-type(2)").click()}]);