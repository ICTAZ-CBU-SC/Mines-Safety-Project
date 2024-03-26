import MapComp from "./components/MapComp";
import UserCountComp from "./components/UserCountComp";

const MainPage = () => {
   
    return (
        <>
            <div className="bg-light p-4 d-flex flex-column" style={{minHeight:'100vh', gap:'20px'}}>
                <UserCountComp/>
                <MapComp/>
            </div>
        </>
    )
}


export default MainPage;