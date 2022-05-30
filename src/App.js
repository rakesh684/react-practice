import React from "react"
import Star from "./Star"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    const [squares, setSquares] = React.useState(boxes)
     
    function toggle(id) {
        setSquares(prevSquares => {
        //     const newSquares = []
        //     for(let i = 0; i < prevSquares.length; i++) {
        //         const currentSquare = prevSquares[i]
        //         if(currentSquare.id === id) {
        //             const updatedSquare = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquare)
        //         } else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
        
        return prevSquares.map((squares =>{
            return squares.id ===id ? {...squares, on: !squares.on} : squares
        }))

        })

    }
    


    const squareElements = squares.map(squares => (
        <Box 
        //    key1={square.id} 
           id={squares.id}
           on={squares.on}
            // toggle= {toggle} 
            toggle={()=> toggle(squares.id)}  
           />
    ))
   
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src={require("./images/user.png")} alt="" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
            <body>
            {squareElements}
            </body>
        </main>
    )
}
