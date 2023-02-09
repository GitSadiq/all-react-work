export default function CustomButton (props) {
    console.log("CustomButton ",props)

    // let name = "new button"
    return<div>
        <button
        onClick={() =>{
            alert(props.message)
        }}
        >{props.name}</button>
    </div>
}