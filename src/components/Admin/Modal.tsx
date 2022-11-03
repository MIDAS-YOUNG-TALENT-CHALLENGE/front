import * as S from './style'

const Modal = () => {
  return <S.ModalWrapper onClick={e => e.stopPropagation()}></S.ModalWrapper>
}

export default Modal
