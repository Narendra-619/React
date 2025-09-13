function Greeting(props)
{

    return(
        <>
        <h1>Hello {props.person.name}</h1>
        <h2>Your age is {props.person.age}</h2>
        </>
    )
}
export default Greeting;    