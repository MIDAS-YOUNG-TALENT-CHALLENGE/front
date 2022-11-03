interface LeaveCommuteState {
  state: 'leave'
  message: string
  workingHour: number
  todayState: string
  weeklyState: string
}

export default LeaveCommuteState
