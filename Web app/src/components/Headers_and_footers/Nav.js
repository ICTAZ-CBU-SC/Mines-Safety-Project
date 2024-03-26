import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
    const [slider, setSlider] = useState(false)
    let slidenav = document.getElementById('slidenav')


    const ActivateSlider = () => {
        setSlider(!slider)

        if(slider){
            document.getElementById('slidenav').style.width = '0px';
        }
    }

    
    return (
        <>
            <div>
                <div style={{position:'relative'}}>
                    <div className="slidenav" style={{height:'100vh', width:'150px'}}>

                    </div>
                    <div style={{position:'absolute', top:'10px', right:'10px'}}>
                        <HiMenuAlt2 onClick={() => ActivateSlider()} size={40} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;