let todayDate = new Date().getDay();
    console.log(todayDate)
let fridayIsholiday = false
let personName = prompt ("What is your name?")
    console.log(personName)
let hoursLog = prompt ("How many hours have you worked?")
    console.log(hoursLog)
let sunday = 0
let monday = 1
let tuesday = 2
let wednesday = 3
let thursday = 4
let friday = 5
let saturday = 6
    console.log({ todayDate })
let message
if (todayDate === monday){
    message = "I hate mondays good luck" 
      
} else if (todayDate === tuesday){
    message = "Tuesday 2/7 of the way done "
}
if (todayDate === wednesday){
    message = "It's Humpday (or Wednesday)"
} else if (todayDate === thursday){
    message =" It's Thursday one more day to the weekend "
}
    if (fridayIsholiday) {
        message = " Don't forget tomorrow is a holiday!! It is a long weekend "
    }
if (todayDate === friday) {
    message = " It's friday you ready to party? "
} else if (todayDate === saturday) {
    message = " Did you party to hard? It's saturday so start winding down "
}
if (todayDate === sunday) {" It's sunday again, I'm sorry! "}
if (hoursLog > 35) {
    message += `
     Your hours are  ${ hoursLog } beware! 
    `
}
document.write(message)