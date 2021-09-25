function distanceFromHqInBlocks(blocks){   //Function that takes in a (pickup) location param
        return Math.abs(blocks - 42);                                           // math here that return a block
};


function distanceFromHqInFeet(start,end){
       return  (distanceFromHqInBlocks(start,end) * 264);
};

function distanceTravelledInFeet(start,end){
    return Math.abs(start - end) * 264
};