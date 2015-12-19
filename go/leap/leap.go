package leap

const TestVersion = 1

func IsLeapYear(year int) bool {
  if year % 400 == 0 || (year % 4 == 0 && !(year % 100 == 0)) {
    return true
  } else {
    return false
  }
}
