let throttling = (func,limit)=>{
  let lastFunc;
  let lastRan;
  return function(...args){
    if(!lastRan){
      func.apply(this,args);
      lastRan = Date.now();
    }
    else{
      clearTimeout(lastFunc);
      lastFunc = setTimeout(()=>{
        if(Date.now()- lastRan >= limit){

          func.apply(this,args);
          lastRan = Date.now();
        }


      },limit-(Date.now()-lastRan))
    }

  }

}

let debounce = (func,delay)=>{
  let inDebounc;
  return function(...args){
     clearTimeout(inDebounc);
     inDebounc = setTimeout(()=>{
       func.apply(this,args);

     },delay)
  }

}

export {throttling,debounce};