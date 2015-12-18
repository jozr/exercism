package leap

const TestVersion = 1

// It's good style to write a comment here documenting IsLeapYear.
func IsLeapYear(int) bool {
  if int % 400 == 0 || (int % 4 == 0 && !(int % 100 == 0)) {
    return true
  } else
    return false
  }
}
