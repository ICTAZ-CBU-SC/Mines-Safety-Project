import UserCountComp from "./components/UserCountComp";

const MainPage = () => {
   
    return (
        <>
            <div className="bg-light p-4 d-flex flex-column" style={{minHeight:'100vh'}}>
                <UserCountComp/>
            </div>
        </>
    )
}


export default MainPage;