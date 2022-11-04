import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '../../hooks'
import * as S from './style'

interface FormType {
  nickname: string
  role: 'supervisor' | 'employee'
  email: string
  password: string
  teamName?: string
  teamCode: number
}

const Register = () => {
  const { register, handleSubmit, watch } = useForm<FormType>()
  const navigate = useNavigate()
  const [mutation] = useMutation({
    url: '/api/user/create',
    onSuccess: () => {
      navigate('/login')
    }
  })

  const onSubmit = async (form: FormType) => {
    await mutation(form)
  }

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입</h1>

        <S.InputWrapper>
          <S.Input
            {...register('nickname', {
              required: true
            })}
            type="text"
            placeholder="이름 입력"
          />

          <S.SelectBox
            defaultValue=""
            {...register('role', { required: true })}
          >
            <S.SelectOption value="" disabled>
              직책을 선택해 주세요
            </S.SelectOption>
            <S.SelectOption value="employee">직원</S.SelectOption>
            <S.SelectOption value="supervisor">관리자</S.SelectOption>
          </S.SelectBox>

          {watch('role') && (
            <S.Input
              {...register('teamCode', {
                required: watch('role') === 'employee'
              })}
              type="text"
              placeholder="팀 코드 입력"
            />
          )}

          {watch('role') === 'supervisor' && (
            <S.Input
              {...register('teamName', {
                required: watch('role') === 'supervisor'
              })}
              type="text"
              placeholder="부서명 입력"
            />
          )}

          <S.Input
            {...register('email', {
              required: true
            })}
            type="email"
            placeholder="이메일 입력"
          />

          <S.Input
            {...register('password', {
              required: true
            })}
            type="password"
            placeholder="비밀번호 입력"
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.Button>회원가입</S.Button>
          <Link to="/login">로그인</Link>
        </S.ButtonWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
export default Register
