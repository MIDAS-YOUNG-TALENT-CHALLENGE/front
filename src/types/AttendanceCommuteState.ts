interface AttendanceCommuteState {
  message: string
  state: 'attendance'
  timeFromAttendanceHour: number
  timeFromAttendanceMinute: number
  weeklyState: number
  workingHour: number
}

export default AttendanceCommuteState
