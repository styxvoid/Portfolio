import { useState } from "react";

function Navbar ({ onNavigate }) {
    const [active, setActive] = useState('About')
    function handleClick(page){
        setActive(page)
        onNavigate(page)

    }

    return(
        <nav>
            <button
            onClick={() => handleClick('about')}
            className={active === 'about' ? 'text-[#00ff41] : text-white'}
            >
        ABOUT
        </button>
        </nav>
    )
}