import styled from 'styled-components'
import { TaskDataType } from '../taskChecker/TaskList'

interface PropsType {
  sortTask: { [key: string]: any } | undefined
}

function EmployWorkList({ sortTask }: PropsType) {
  return (
    <_Wrapper>
      {sortTask &&
        sortTask.map((e:TaskDataType) => (
          <_WorkFlowList>
            <_WorkName>{e.title}</_WorkName>
            <_WorkMention>@{e.mention.nickname}</_WorkMention>
            <_WorkProcess process={e.important}>
              {e.important ? '중요' : '쉬움'}
            </_WorkProcess>
          </_WorkFlowList>
        ))}
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  overflow-y: scroll;
  width: 400px;
  height: 250px;
  padding: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
`

const _WorkFlowList = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;
  > span {
    font-size: 14px;
  }
`

const _WorkName = styled.span`
  width: 200px;
`

const _WorkMention = styled.span`
  font-weight: bold;
  width: 100px;
`

const _WorkProcess = styled.span<{ process: boolean }>`
  width: 50px;
  color: ${({ process }) => (process ? 'orange' : 'green')};
`

export default EmployWorkList
