import * as S from './style'

const Modal = () => {
  return (
    <S.ModalWrapper onClick={e => e.stopPropagation()}>
      <div>
        <h2>업무 제목</h2>
        <p>업무 대상 : 모두</p>
        <p>
          어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
          저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
          저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고 저쩌고어쩌고
          저쩌고어쩌고 저쩌고
        </p>
      </div>
      <S.ModalButtons>
        <S.ModalButton type={'accept'}>수락</S.ModalButton>
      </S.ModalButtons>
    </S.ModalWrapper>
  )
}

export default Modal
