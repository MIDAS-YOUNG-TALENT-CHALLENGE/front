import { createPortal } from 'react-dom'
import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  children: ReactNode
  onClose?: () => void
}

const Portal = ({ children, onClose }: Props) => {
  const el = document.querySelector('#portal')
  if (!el) throw new Error('Not Found #portal element')

  const body = document.querySelector('body')
  if (body) body.style.overflow = 'hidden'

  const onClick = () => {
    if (body) body.style.overflow = 'auto'
    if (onClose) onClose()
  }

  return createPortal(<S.Wrapper onClick={onClick}>{children}</S.Wrapper>, el)
}

export default Portal
