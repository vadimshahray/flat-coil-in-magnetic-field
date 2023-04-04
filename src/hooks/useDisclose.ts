import { useState } from 'react'

export const useDisclose = (initState?: boolean) => {
  const [isOpen, setIsOpen] = useState(initState ?? false)

  const onOpen = (e?: React.MouseEvent<unknown>) => {
    e?.preventDefault()
    e?.stopPropagation()
    setIsOpen(true)
  }

  const onClose = (e?: React.MouseEvent<unknown>) => {
    e?.preventDefault()
    e?.stopPropagation()
    setIsOpen(false)
  }

  const onToggle = (e?: React.MouseEvent<unknown>) => {
    e?.preventDefault()
    e?.stopPropagation()
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  }
}
