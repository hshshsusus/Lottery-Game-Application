const root = document.getElementById("root");
const result = document.getElementById("result1");
const button = document.getElementById("button");
const tick = new Audio("tick.wav");
const complete=new Audio("completed.mp3");

const gifts = ["₹100 Cash",
    "Toy Car",
    "Chocolate Box",
    "₹500 Cash",
    "Smartphone Cover",
    "Book",
    "HeadPhones",
    "₹50 Cash",
    "Gift Vocher",
    "Watch",
    "teddr Bear",
    "Bluetooth Speaker",
    "Movie Ticket",
    "₹200 Cash",
    "Puzzle Game",
    "Sunglasses",
    "₹1000 Cash",
    "Board game",
    "Fitness Band",
    "Digital Clock",
    "Lamp",
    "Shoping Vocher",
    "Laptop Bag",
    "wireless Mouse",
    "Travel mug",
    "Note Book",
    "Gaming Mousepad",
    "₹250 Cash",
    "Keychain",
    "Water Bottle",
    "Portable Charger",
    "Desk Organizer",
    "Cooking Set",
    "Action Figure",
    "₹300 Cash",
    "Travel Pillow",
    "Mini Backpack",
    "Personalized Mug",
    "Gaming Controller",
    "Camera Strap",
    "Toy Robot",
    "₹750 Cash",
    "Sport Things",
    "Pen Set",
    "Bluetooth Earbuds",
    "Digital photo",
    "Wallet",
    "Back Pack",
    "Gift Hamper",
    "₹5000 Cash"
];

button.addEventListener("click",()=>{
    for(let i=1;i<=50;i++){
        document.getElementById(i).classList.remove("winnedbox");
    }
    result.classList.add("before-result");
    result.innerText="Please Wait a moment....!";
    let setCount = 0;
   const intervalId= setInterval(() => {
    tick.pause();
    tick.currentTime=0;
    tick.play();
        setCount = setCount+1;
      const notify= Math.floor(Math.random()*50);
      const notify1 = notify+1;
      for(let i=1;i<=50;i++){
        if(i === notify1){
            document.getElementById(i).classList.add("hilightedbox");
        }else{
            document.getElementById(i).classList.remove("hilightedbox");
        }
    }
      if(setCount === 10){
        tick.pause();
        const randValue = Math.floor(Math.random()*50);
    const answer = randValue+1;
    document.getElementById(notify1).classList.remove("hilightedbox");
    const gift = gifts[answer -1];
    result.classList.remove("before-result");
    document.getElementById(answer).classList.add("winnedbox");
    complete.play();
    result.innerText=`Congrats you got : ${answer}," ${gift} "`;
    result.classList.add("result");
    clearInterval(intervalId);
      }
    }, 500);
})


gifts.forEach((values,i)=>{
   root.insertAdjacentHTML("beforeend",`<div class="box" id="${i+1}">${i+1}.${values}</div>`);
})