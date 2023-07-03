var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"]

var months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"]


const para = document.getElementsByTagName('p')[0]
const countdown = document.getElementsByClassName('countdown')

console.log(para)
console.log(countdown[0].children[3])

const futureDate = new Date("2023-08-14T10:02:40")
console.log(futureDate.getTime())



para.innerText = "Independence day will be celebrated on, " + days[futureDate.getDay()] + ", " + futureDate.getDate() + " " + months[futureDate.getMonth()] + " " + futureDate.getFullYear() + " " + futureDate.getHours() + ":" + futureDate.getMinutes() + " am"




function meraCountDown() {
    const today = new Date()

    var timeDifference = futureDate.getTime() - today.getTime()

    if (timeDifference > 0) {
        countdown[0].children[0].innerText = Math.floor(timeDifference / 1000 / 60 / 60 / 24) + " days"

        countdown[0].children[1].innerText = (Math.floor(timeDifference / 1000 / 60 / 60) - (Math.floor(timeDifference / 1000 / 60 / 60 / 24) * 24)) + " hours"

        countdown[0].children[2].innerText = Math.floor(timeDifference / 1000 / 60 - (Math.floor(timeDifference / 1000 / 60 / 60) * 60)) + " minutes"

        countdown[0].children[3].innerText = Math.floor(timeDifference / 1000) - ((Math.floor(timeDifference / 1000 / 60) * 60)) + " seconds"
    } else {
        countdown[0].innerHTML = "<p>Time expired</p>"
    }
}


setInterval(meraCountDown, 1000)