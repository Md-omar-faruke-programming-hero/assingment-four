// Ans to the Que No: 1 //

function seerToMon(seer){
    if(typeof(seer) != "number"){
        console.log("error505: you can not pass anything without a number ");
    }
    else{
        seer= Math.abs(seer);
        const maund=0.025;
        var convert = seer*maund;
        return convert;
     }
    
}
var inputSeer= 80;
var result= seerToMon(inputSeer);
console.log(result+" Mon");





 // Ans to the Que No:2//

function totalSales(shirt,pant,shoes){
    if(typeof(shirt)!="number" || typeof(pant)!="number" || typeof(shoes)!="number"){
        console.log("error505: you can not pass anything without a number ");
    }
    else{

        shirt= Math.abs(shirt);
        pant= Math.abs(pant);
        shoes= Math.abs(shoes);

        const oneShirtPrice =100;
        const onePantPrice= 200;
        const onePairShoesPrice=500;

        var shirtCost= shirt*oneShirtPrice;
        var pantCost= pant*onePantPrice;
        var shoesCost= shoes*onePairShoesPrice;

        var total= shirtCost+pantCost+shoesCost;

        return total;
    

    }
    
}


var shirtQuantity= -1;
var pantQuantity= 1;
var shoesQuantity= 1;

var totalIncome= totalSales( shirtQuantity,pantQuantity,shoesQuantity);

console.log(totalIncome+" tk");





// Ans to the Que No:3//

function deliveryCost(deliveryQuantity){
    if(typeof(deliveryQuantity) != "number"){
        console.log("error505: you can not pass anything without a number ");
    }
    else{
        deliveryQuantity= Math.abs(deliveryQuantity);

        if(deliveryQuantity<=100){
            var totalCost= deliveryQuantity*100;
            return totalCost;
        }
        else if(deliveryQuantity>100 && deliveryQuantity<=200){
            var extra = deliveryQuantity-100;     //How many more than 100?
            var costOfExtra=extra*80;
            var totalCost = 10000+costOfExtra;    // 10000 is for 1st 100pices cost
            return totalCost;
        }
        else if(deliveryQuantity>200){
            var extra=deliveryQuantity-200;
            var totalCost= 10000+8000+(extra*50);  //10000 for 1st 100pices cost,8000 for 2nd 100pices cost
            return totalCost;
        }
    }
}
var orderNumber= 100;
var payAmount=  deliveryCost(orderNumber);
console.log(payAmount);





// Ans to the Que No:4//

function perfectFriend(names) {
    for(var i=0; i<names.length; i++){
        if(names[i].length==5 ){
            return names[i];
      }
     }
    }
var names=["omar","robin","mithu"];
var friend= perfectFriend(names);
console.log(friend);


                