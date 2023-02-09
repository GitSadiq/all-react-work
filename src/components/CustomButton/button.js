import Button from '@mui/material/Button';

export default function Custombutton(props) {
    return (
        <Button variant="contained" onClick={props.click}>{props.Name}</Button>
        // <button onClick={() => { props.setScreen(props.screen) }}>{props.name}</button>
    )
}