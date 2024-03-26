import { useEffect } from "react";
import UserCountComp from "./components/UserCountComp";

const MainPage = () => {
    useEffect(() => {
        console.log('hi')
    },[])
    return (
        <>
            <div className="bg-light p-4 d-flex flex-column" style={{minHeight:'100vh'}}>
                <UserCountComp/>
                <MainPage/>
            </div>
        </>
    )
}


export default MainPage;