import './Product.css'
function Roll({prof})
{
    const bloodstyle=
    {
        color:'red',
        fontWeight:'bold',
        fontSize:'20px',

    }
    return(
        <div className='roll'>
            <h2> JNTUGV ID CARD</h2>
            <img src={prof.img} alt="Profile" width="200" height="200"/>
            <h2>Name:{prof.name}</h2>
            <h2>Age:{prof.age}</h2>
            <h2>Roll:{prof.roll}</h2>
            <h2>Branch:{prof.branch}</h2>
            <h2 style={bloodstyle}>Blood Group:{prof.blood}
            </h2>
        </div>
    )
}
export default Roll;