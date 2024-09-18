import { Buton } from "./Buton"

const Butons = ({handleClicGood, handleClicNeutral, handleClicBad} ) => {
    return(
        <>
            <p>
                <Buton handleClic={handleClicGood} text="good" />
                <Buton handleClic={handleClicNeutral} text="neutral" />
                <Buton handleClic={handleClicBad} text="bad" />
            </p>
        </>
    )
}

export { Butons }