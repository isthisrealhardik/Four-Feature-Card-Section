const Card = ({ name, description, icon, borderColor }) => {
    const border = `my-6 md:mx-2 w-72 h-56 bg-white shadow-xl border-t-4 rounded-lg ${borderColor} p-5 flex flex-col justify-between`

    return (
        <div className={border}>
            <div>
                <h1 className=" text-Very-Dark-Blue text-xl font-semibold">{name}</h1>
                <p className=" text-Grayish-Blue text-sm font-normal mt-2">{description}</p>
            </div>
            <img src={icon} alt="Icon Supervisor" className=" w-16 ml-44"/>
        </div>
    )
}

export default Card;