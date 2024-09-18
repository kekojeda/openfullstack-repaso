const Buton = ({handleClic, text}) => {

    return(
        <>
            <button onClick={handleClic}> {text} </button>
        </>
    )
}

export { Buton }