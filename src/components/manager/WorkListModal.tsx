import styled from 'styled-components'

function EmployWorkList() {
  return (
    <_Wrapper>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@데이비드 바커드</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
      <_WorkFlowList>
        <_WorkName>회사 내에 데이터데이스 보안 이슈</_WorkName>
        <_WorkMention>@김태완</_WorkMention>
        <_WorkProcess process={false}>{false ? '진행중' : '완료'}</_WorkProcess>
      </_WorkFlowList>
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
    border-radius:8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius:10px;
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
