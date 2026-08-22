import { useState } from "react"

const useToggle = (initialValue) => {
    const [isOpen, setIsOpen] = useState(initialValue)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return [isOpen, toggle]
}

export default useToggle
