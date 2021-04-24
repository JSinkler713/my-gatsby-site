import React, {useState} from 'react'

const useIsOpen = ()=> {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = ()=> {
    setIsOpen(!isOpen)
  }

  return [isOpen, toggleOpen]
}

export default useIsOpen;
