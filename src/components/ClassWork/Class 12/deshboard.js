import { auth, getCurrentUserData } from "../../../config/firebase C12"
import { signOut } from "firebase/auth"
import { useEffect, useState } from "react"


export default function DashBoard(props) {

    // console.log("user ID", props.uid)
    const [userData, setUserData] = useState()

    useEffect(() => {
        (async () => {
            const result = await getCurrentUserData(props.uid)
            // console.log("deshboard Result", result)
            setUserData(result)
        }
        )()
    }
        , [])

    const SignOut = async () => {
        await signOut(auth)
        try {
            console.log("signout successful")
        }
        catch (error) {
            console.log(error)
        }
    }

    // console.log("deshboard userdata", userData)

    if (!userData) {
        return <div>Loading</div>
    }

    return (
        <>
            <h1>DashBoard</h1>
            <h2>Welcome {userData.name}</h2>
            <button
                onClick={SignOut}>
                LogOut
            </button>
        </>
    )
}