const UserCountComp = () => {
    return (
        <>
            <div className="d-flex justify-content-center" >
                <div className=" shadow-sm p-3 rounded-4 d-flex" style={{gap:'30px', backgroundColor:'#ddd'}}>
                    <div>Active Workers | 160</div>
                    <div style={{width:'2px', opacity:'0.5'}} className="bg-light"></div>
                    <div>All Workers | 300</div>
                </div>
            </div>
        </>
    )
}

export default UserCountComp