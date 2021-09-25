import {useState} from "react";
import './App.css';

export default function App(){
  const brands = [
    {
      name:"Samsung",
      model:"Galaxy SIII",
    },
    {
      name: "Apple",
      model:"5s",
    },
    {
      name:"Google",
      model:"Pixel 5",
    },
    {
      name:"Sony",
      model:"X5",
    },
  ];
  return (
    <div className="App">
      <Plans/>
    </div>
  );
}
      function Plans(){
      const plans = [
        { 
          name  : "Free",
          price: 0,
          features:[
        "Single user",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
    },
    {
      name : "PLUS",
      price : 9,
      features :[
        "Single user",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
    },
    {
      name : "PRO",
      price : 49,
      features :[
        "Single user",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
    },
   ];
   return (
     <div>
       {plans.map((plan) => (
         <Card name ={plan.name} price={plan.price} features={plan.features}></Card>
       ))}
     </div>
  
   )
  }
  function LikeCounter(props){
    const [like,setLike] = useState(0);
    console.log(props);
    return(
      <div>
        <h2 className="heading">{props.name}</h2>
        <p>{props.model}</p>
        <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      </div>
    );
  }
   function Card(props){
   return(
     <div className='card'>
       <p className="plan-name">{props.name}</p>
       <p className="price">${props.price}<span className="price-duration">/month</span></p>
       <ul className="features">
         {props.features.map((feature) => (
           <li>{feature}</li>
         ))}
          </ul> 
          <button className="buy">BUY</button>   
     </div>
   )
 }