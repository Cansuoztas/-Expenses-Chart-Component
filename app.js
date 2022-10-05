const days = document.querySelectorAll(".days");
let ab;
const data = async () => {
  const res = await fetch("data.json");
  console.log(res);
  const data = await res.json();
  console.log(data);

  data.map(({ day, amount }) => {
    console.log(`${day}, ${amount}`);
     ab = `${amount}`;
 


    

    
  });


  for (let i = 0; i < 7; i++) {
       console.log(ab);
    console.log(i);
    return (days[i].style.height = `${ab * 2}px `);
  }
  
};

console.log(data());