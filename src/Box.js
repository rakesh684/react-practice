import React from "react";
export default function Box(props){
    // const [on,setOn]=React.useState(props)
    // function toggleColor(){
    //     setOn(prevOn=>!prevOn)
        
    // }
    

    const styles={
        backgroundColor: props.on ? "#222222" : "green",
        color: props.on?"yellow":"white",
        borderRadius:props.on ? "0" : "3rem",
        textAlign:"center",
        paddingTop:"10px",
        fontSize:"150%",
        display:"flex",
        paddingLeft:"12px",
        marginLeft:"30%"
        
        
    }
    return (       
        <div
           style={styles}
            // onDoubleClick={toggleColor}
            onClick={()=>props.toggle(props.id)}
             className="box" 
             >
            <p>rakesh</p>
        </div>
    )
}