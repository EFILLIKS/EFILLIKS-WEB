import '../CSS/Datetime.css';

export const DateTime = ({ date = 12, hrs = 11,min =10, sec = 8}) =>{
    return(
        <>
            <div className='title'>
                <div className='time val'>
                    <h1>Days</h1>
                    <h1>Hrs</h1>
                    <h1>Min</h1>
                    <h1>Sec</h1>
                </div>
                <div className='time'>
                    <h2>{date}</h2>
                    <h2>{hrs}</h2>
                    <h2>{min}</h2>
                    <h2>{sec}</h2>
                </div>
            </div>   
        </>
    )
}