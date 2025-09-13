    import {useState}  from 'react'
    function Clicks()
    {const name="Narendra"
        const age=21;
        const [email ,setEmail]=useState("");
    const [password ,setPassword]=useState("");

    const [FormData,setFormData]=useState({
        email:"",
        password:""
    })

const FormSubmit=(e)=>
{
   
    setFormData({...FormData,[e.target.name]:e.target.value})
}
        const handlesubmit=(e)=>
        {
            alert("Submitted")
            e.preventDefault();
             console.log(FormData.email)
        console.log(FormData.password)
        }
     
        return(
            <>

            <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter your name" name="email" onChange={FormSubmit} value={FormData.email}/>
        <input type="password" placeholder="enter the password" name="password" onChange={FormSubmit} value={FormData.password}/>
            <button type="submit">SUBMIT</button>
    </form>


            </>
        )

    }
    export default Clicks;