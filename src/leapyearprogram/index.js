function leapYear(year) {
    if(year < 1582) {
      throw new Error('Leap year rules do not work before 1582');
    }
    // if divisible by 400, div400 is true
    const div400 = year % 400 === 0;
    // if divisible by 100, div100 is true
    const div100 = year % 100 === 0;
    // if divisible by 4, div4 is true
    const div4 = year % 4 === 0;
    // return the result of div400
    // if div400 is true, it returns true
    // if div400 is false, it goes to the next option
    // if div4 is true AND not-div100 is true, return true
    // if not divisible by 4 AND not divisible by 100, return false
    // if div4 is true AND not-divisible by 100 is false, return false
    // if div4 is false AND not-divisible by 100 is false, return ??? (impossible)
    return div400 || (div4 && !div100);
}
  
//This next line makes the function available to other JavaScript modules
//this is necessary for the test code to be able to run this function
export default leapYear;