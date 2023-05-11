//          QUESTION ONE

const login = (yourName) => console.log(`Hello ${yourName}`)
login(`Theresa`)


//          QUESTION TWO

function sayName(isLoggedIn) {
    if (isLoggedIn == true) {
        console.log("You are logged in")
    } else {
        console.log('Please log in')
    }
}

sayName(false)


//          QUESTION THREE

const calculateCost = (width, length, cost) => console.log(width * length * cost + 100)

calculateCost(30, 20, 1.45)


//           QUESTION FOUR

const students = ['Alice', 'Andrew', 'Casey', 'Damian', 'Grant', 'Howie', 'Wade', 'Kat', 'Kimbrad', 'Kiu', 'Natasha', 'Obi', 'Pedro', 'Sarah', 'Scott', 'Tiffany', 'Zhe']

const studentLength = () => {
    for (var i = 0; i < students.length; i++) {
        console.log(`${students[i]} is ${students[i].length} letter's long`) }
}

studentLength()


