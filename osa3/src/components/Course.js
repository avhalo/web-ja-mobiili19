import React from 'react'
const Header = ({name}) => {
    return(
        <h1>{name}</h1>
    )
}
const Part = ({part}) => {
    return(
        <p>{part.name} {part.exercises}</p>
    )
}
const Contents = ({parts}) => {
  
    return(
        <div>
            {parts.map(part => <Part part={part}/>)}
        </div>
    )
}
const Total = ({parts}) => {
    return(
    
            <p> Total: 
            {
                parts.map(part => part.exercises)
                .reduce((accumulator,a) => accumulator+ a)
                }
            </p>
    
    )
}
const Course = ({course}) =>{

return (
    <div>
        <Header name={course.name}/>
        <Contents parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
)
}

export default Course