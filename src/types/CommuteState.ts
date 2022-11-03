interface CommuteState {
  state: 'attendance' | 'leave'
  message: string
  workingHour: number
  weeklyState: number
  timeFromAttendanceHour?: number
  timeFromAttendanceMinute?: number
  todayState?: string
}

export default CommuteState
