import { useState, useEffect, useRef} from "react";

function useHover () {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(function () {
        ref.current.addEventListener("mouseeneter", enter )
        ref.current.addEventListener("mouseleave", leave)

        return () => {
            ref.current.remove
        }

    })

}