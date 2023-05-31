export const Button = ({ text, handler}) => {

    return (
        <button 
            className="bg-slate-400 m-1 p-2 rounded-full
                text-xl font-semibold"
            onClick={(e)=>{handler(e,text)}}>

            {text}
        </button>
    )
}
