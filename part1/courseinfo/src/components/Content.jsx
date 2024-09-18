import { Part } from "./Part"

const Content = (props) => {
    console.log(props);
    return (
        props.parts.map((part) => (
            <Part part={part.name} exercises={part.exercises} key={part.name}/>

        ))
     
    )
}

export { Content }