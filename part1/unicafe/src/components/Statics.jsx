import { StaticLine } from "./StaticLine"

const Statics = ({ good, neutral, bad, all, average, averagePos }) => {

    return (

        all ? (
            <>
                <h1>Statics</h1>
                <table>
                    <tbody>
                        <StaticLine text="good" value={good} />
                        <StaticLine text="neutral" value={neutral} />
                        <StaticLine text="bad" value={bad} />
                        <StaticLine text="all" value={all} />
                        <StaticLine text="average" value={average} />
                        <StaticLine text="positive" value={averagePos} />
                    </tbody>
                </table>
            </>
        ) : (
            <p>No feedback given</p>
        )

    )

}

export { Statics }