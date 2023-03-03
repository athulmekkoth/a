import { ethers } from "ethers"
export default function Buy({state})
{
    
    const buy=async(e)=>{
        console.log("Buy component rendered");
      e.preventDefault()
        const {contract}=state
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#msg").value;
        console.log(name,message)
        const value={value:ethers.utils.par}
        const trancation = await contract.buychai(name,message,)
    
    } 
    return(
        <div>
       <form onSubmit={buy}>
        <label>Name</label>
        <input type="text" id="name" placeholder="enter name" />
        <label>Message</label>
   
       <input type="text" id="msg" placeholder="enter message" />
       <button  type="submit">Pay</button>
       </form>
       
       </div>
    )
}