import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { allGetUser } from '../../lib/allGetuser'
import { viewTask } from '../../lib/viewTask'
import { TaskDataType } from '../taskChecker/TaskList'
import ChangeModal from './ChangeModal'
import TimeState from './TimeState'

export interface UserDataType {
  nickname: string
  email: string
  userId: number
  role: 'employee' | 'supervisor'
}

function EmployInfo() {
  const [modal, setModal] = useState(0)
  const [user, setUser] = useState<UserDataType[]>([])
  const [sortTask, setSort] = useState({})

  useEffect(() => {
    allGetUser().then(e => setUser(e.data))
    viewTask().then(e => {
      let T = e.data
      let hash: { [key: string]: any } = {}
      console.log(T)
      T.map((e: TaskDataType) => {
        console.log(hash)
        if (hash[e.mention.nickname])
          hash[e.mention.nickname] = [...hash[e.mention.nickname],e]
        else hash[e.mention.nickname] = [e]
        
      })
      setSort(hash)
      
    })
  }, [])

  const offModal = () => setModal(0)

  return (
    <>
      {modal !== 0 && <_EmployBackground onClick={offModal} />}
      {user.map((e, i) => (
        <TimeState
          modal={modal}
          index={i}
          setModal={setModal}
          user={e}
          len={user.length}
          setUser={(str: string) =>
            setUser(
              user.map(i => {
                if (i.userId === e.userId) return { ...i, nickname: str }
                return i
              })
            )
          }
          sortTask={sortTask}
        />
      ))}
    </>
  )
}

const _EmployBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`

export default EmployInfo
