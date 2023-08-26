const display=document.getElementById("display");


window.onload=async function getMenu(){
    try{
        const url=`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`

    const response = await fetch(url);
    const data = await response.json();
    
    
    displayed(data);

    steps(data);

    }catch (error) {
        console.error("Error fetching menu:", error);
    }
    
    
}


function displayed(data){
    
    for(var i=0;i<data.length;i++){
        // console.log(data);
    var cdata=
            `<div class="card">
            <div class="food">
                <img src="${data[i].imgSrc}" alt="food" class="imgfood">
                <h4>${data[i].name}</h4>
                <div class="sep">
                    <ul>
                        <li>${data[i].price}</li>
                        <li><input type="checkbox" id="${data[i].id}"></li>
                    </ul>
                </div>
            </div>
        </div>`
        display.innerHTML+=cdata;
    
    
}
}



async function steps(data){
    //======= TakeOrder=========
    await TakeOrder(data)
    .then(order=>{
        console.log("Order resolved",order)
    })
    .catch(error=>{
        console.log("Error:", error)
    })
    //======= orderPrep=========
    await orderPrep(data)
    .then(order=>{
        console.log("Order resolved",order)
    })
    .catch(error=>{
        console.log("Error:", error)
    })
    // ========payOrder======
    await payOrder(data)
    .then(order1=>{
        console.log("Order resolved", order1)
        if(order1.paid==true){
            // =========thankyouFnc=======
            thankyouFnc();
        }else{
            console.log("payment not successful.")
        } 
    })
    .catch(error=>{
        console.log("Error:", error)
    })
 
    
}




//======= TakeOrder=========
function TakeOrder(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {
                obj: [
                    data[Math.floor(Math.random() * data.length)].name,
                    data[Math.floor(Math.random() * data.length)].name,
                    data[Math.floor(Math.random() * data.length)].name
                ]
            };
            resolve(order);
        }, 2500);
    });
}

//======= orderPrep=========
function orderPrep(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const order={order_status:true, paid:false};
            resolve(order);
        },1500);
    })
}

// ========payOrder======
function payOrder(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const order1= {
                order_status:true, paid:true
            }
            resolve(order1);
        },1000)
    })
}
// =========thankyouFnc=======
function thankyouFnc(){
        alert("Thankyou for eating with us today!");
    
}






