
/*
==================================================
        EMPLOYEE MANAGEMENT SYSTEM
==================================================
*/


/*
==================================================
        GLOBAL VARIABLES
==================================================
*/

let employees = [];

let selectedDepartment = "All";

let searchText = "";


/*
==================================================
        30 INDIAN EMPLOYEES
==================================================

IT        = 8
HR        = 6
Finance   = 8
Marketing = 8

TOTAL     = 30
*/

const localEmployees = [

    // ================= IT - 8 =================

    {
        id: 1,
        name: "Aarav Sharma",
        age: 25,
        email: "aarav.sharma@gmail.com",
        phone: "9876543210",
        department: "IT",
        salary: 50000
    },

    {
        id: 2,
        name: "Vivaan Patel",
        age: 27,
        email: "vivaan.patel@gmail.com",
        phone: "9876543211",
        department: "IT",
        salary: 52500
    },

    {
        id: 3,
        name: "Aditya Kumar",
        age: 29,
        email: "aditya.kumar@gmail.com",
        phone: "9876543212",
        department: "IT",
        salary: 55000
    },

    {
        id: 4,
        name: "Arjun Reddy",
        age: 31,
        email: "arjun.reddy@gmail.com",
        phone: "9876543213",
        department: "IT",
        salary: 57500
    },

    {
        id: 5,
        name: "Rohan Mehta",
        age: 26,
        email: "rohan.mehta@gmail.com",
        phone: "9876543214",
        department: "IT",
        salary: 61000
    },

    {
        id: 6,
        name: "Karthik Iyer",
        age: 30,
        email: "karthik.iyer@gmail.com",
        phone: "9876543215",
        department: "IT",
        salary: 65000
    },

    {
        id: 7,
        name: "Rahul Verma",
        age: 28,
        email: "rahul.verma@gmail.com",
        phone: "9876543216",
        department: "IT",
        salary: 70000
    },

    {
        id: 8,
        name: "Naveen Rao",
        age: 32,
        email: "naveen.rao@gmail.com",
        phone: "9876543217",
        department: "IT",
        salary: 98590
    },


    // ================= HR - 6 =================

    {
        id: 9,
        name: "Ananya Singh",
        age: 26,
        email: "ananya.singh@gmail.com",
        phone: "9876543218",
        department: "HR",
        salary: 53500
    },

    {
        id: 10,
        name: "Priya Nair",
        age: 29,
        email: "priya.nair@gmail.com",
        phone: "9876543219",
        department: "HR",
        salary: 56000
    },

    {
        id: 11,
        name: "Sneha Joshi",
        age: 27,
        email: "sneha.joshi@gmail.com",
        phone: "9876543220",
        department: "HR",
        salary: 59000
    },

    {
        id: 12,
        name: "Meera Kapoor",
        age: 30,
        email: "meera.kapoor@gmail.com",
        phone: "9876543221",
        department: "HR",
        salary: 62500
    },

    {
        id: 13,
        name: "Pooja Desai",
        age: 33,
        email: "pooja.desai@gmail.com",
        phone: "9876543222",
        department: "HR",
        salary: 67500
    },

    {
        id: 14,
        name: "Kavya Menon",
        age: 28,
        email: "kavya.menon@gmail.com",
        phone: "9876543223",
        department: "HR",
        salary: 72000
    },


    // ================= Finance - 8 =================

    {
        id: 15,
        name: "Amit Shah",
        age: 30,
        email: "amit.shah@gmail.com",
        phone: "9876543224",
        department: "Finance",
        salary: 51500
    },

    {
        id: 16,
        name: "Riya Gupta",
        age: 25,
        email: "riya.gupta@gmail.com",
        phone: "9876543225",
        department: "Finance",
        salary: 54500
    },

    {
        id: 17,
        name: "Sanjay Malhotra",
        age: 34,
        email: "sanjay.malhotra@gmail.com",
        phone: "9876543226",
        department: "Finance",
        salary: 58000
    },

    {
        id: 18,
        name: "Neha Agarwal",
        age: 27,
        email: "neha.agarwal@gmail.com",
        phone: "9876543227",
        department: "Finance",
        salary: 60500
    },

    {
        id: 19,
        name: "Vikram Bansal",
        age: 32,
        email: "vikram.bansal@gmail.com",
        phone: "9876543228",
        department: "Finance",
        salary: 64000
    },

    {
        id: 20,
        name: "Shreya Mishra",
        age: 26,
        email: "shreya.mishra@gmail.com",
        phone: "9876543229",
        department: "Finance",
        salary: 69000
    },

    {
        id: 21,
        name: "Manish Tiwari",
        age: 35,
        email: "manish.tiwari@gmail.com",
        phone: "9876543230",
        department: "Finance",
        salary: 75000
    },

    {
        id: 22,
        name: "Deepak Choudhary",
        age: 31,
        email: "deepak.choudhary@gmail.com",
        phone: "9876543231",
        department: "Finance",
        salary: 82000
    },


    // ================= Marketing - 8 =================

    {
        id: 23,
        name: "Ishaan Khanna",
        age: 24,
        email: "ishaan.khanna@gmail.com",
        phone: "9876543232",
        department: "Marketing",
        salary: 53000
    },

    {
        id: 24,
        name: "Diya Sethi",
        age: 25,
        email: "diya.sethi@gmail.com",
        phone: "9876543233",
        department: "Marketing",
        salary: 55500
    },

    {
        id: 25,
        name: "Varun Arora",
        age: 29,
        email: "varun.arora@gmail.com",
        phone: "9876543234",
        department: "Marketing",
        salary: 60000
    },

    {
        id: 26,
        name: "Nisha Kulkarni",
        age: 28,
        email: "nisha.kulkarni@gmail.com",
        phone: "9876543235",
        department: "Marketing",
        salary: 63500
    },

    {
        id: 27,
        name: "Siddharth Jain",
        age: 33,
        email: "siddharth.jain@gmail.com",
        phone: "9876543236",
        department: "Marketing",
        salary: 68000
    },

    {
        id: 28,
        name: "Tanvi Shah",
        age: 26,
        email: "tanvi.shah@gmail.com",
        phone: "9876543237",
        department: "Marketing",
        salary: 73500
    },

    {
        id: 29,
        name: "Harsh Vardhan",
        age: 31,
        email: "harsh.vardhan@gmail.com",
        phone: "9876543238",
        department: "Marketing",
        salary: 78000
    },

    {
        id: 30,
        name: "Ankit Yadav",
        age: 34,
        email: "ankit.yadav@gmail.com",
        phone: "9876543239",
        department: "Marketing",
        salary: 90000
    }

];


/*
==================================================
        DATE & TIME
==================================================
*/

function updateDateTime() {

    const now = new Date();

    const day = now.getDate();

    const month = now.toLocaleString(
        "en-IN",
        {
            month: "long"
        }
    );

    const year = now.getFullYear();

    let hours = now.getHours();

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");

    const ampm = hours >= 12
        ? "PM"
        : "AM";

    hours = hours % 12 || 12;

    document.getElementById("today")
        .innerHTML =
        `Today: ${day} ${month} ${year}`;

    document.getElementById("currentTime")
        .innerHTML =
        `Time: ${hours}:${minutes}:${seconds} ${ampm}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);


/*
==================================================
        FETCH EMPLOYEES
==================================================
*/

function fetchEmployees() {

    const loading =
        document.getElementById(
            "loadingMessage"
        );

    const success =
        document.getElementById(
            "successMessage"
        );

    const error =
        document.getElementById(
            "errorMessage"
        );


    loading.style.display = "block";

    success.style.display = "none";

    error.style.display = "none";


    fetch("https://dummyjson.com/users")

        .then(response => {

            if (!response.ok) {
                throw new Error(
                    "API request failed"
                );
            }

            return response.json();
        })

        .then(data => {

            /*
                API response is converted
                using .json()
            */

            console.log(
                "API Data:",
                data.users
            );


            /*
                map() is used to demonstrate
                API data transformation.
            */

            const apiUsers = data.users.map(
                user => ({
                    id: user.id,
                    name:
                        `${user.firstName} ${user.lastName}`,
                    age: user.age,
                    email: user.email,
                    phone: user.phone,
                    department:
                        user.company.department,
                    image: user.image
                })
            );


            console.log(
                "Converted API employees:",
                apiUsers
            );


            /*
                Use the required local 30 employee
                dataset for the dashboard.
            */

            employees = localEmployees.map(
                employee => ({
                    ...employee
                })
            );


            displayEmployees();

            success.style.display = "block";

        })

        .catch(error => {

            console.log(error);

            error.style.display = "block";

            /*
                Local data keeps the dashboard
                working if API is unavailable.
            */

            employees =
                localEmployees.map(
                    employee => ({
                        ...employee
                    })
                );

            displayEmployees();

        })

        .finally(() => {

            setTimeout(() => {

                loading.style.display = "none";

            }, 500);

        });
}


/*
==================================================
        GET FILTERED EMPLOYEES
==================================================
*/

function getFilteredEmployees() {

    let result = employees;


    /*
        Department filter
    */

    if (
        selectedDepartment !== "All"
    ) {

        result = result.filter(
            employee =>
                employee.department ===
                selectedDepartment
        );
    }


    /*
        Search filter
    */

    if (searchText !== "") {

        result = result.filter(
            employee =>
                employee.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    )
        );
    }


    return result;
}


/*
==================================================
        DISPLAY EMPLOYEES
==================================================
*/

function displayEmployees() {

    const grid =
        document.getElementById(
            "employeeGrid"
        );

    grid.innerHTML = "";


    const filteredEmployees =
        getFilteredEmployees();


    if (filteredEmployees.length === 0) {

        grid.innerHTML = `
            <div class="no-results">
                <h3>No employees found.</h3>
                <p>Try another search or department.</p>
            </div>
        `;

        updateEmployeeCount([]);

        calculateSalary([]);

        return;
    }


    /*
        forEach()
    */

    filteredEmployees.forEach(
        employee => {

            /*
                createElement()
            */

            const card =
                document.createElement("div");

            card.className =
                "employee-card";


            const image =
                employee.image ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    employee.name
                )}`;


            /*
                innerHTML
            */

            card.innerHTML = `

                <img
                    src="${image}"
                    alt="${employee.name}"
                >

                <h3>
                    ${employee.name}
                </h3>

                <p>
                    <strong>Age:</strong>
                    ${employee.age}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${employee.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${employee.phone}
                </p>

                <p>
                    <strong>Department:</strong>

                    <span class="department">
                        ${employee.department}
                    </span>
                </p>

                <p class="salary">
                    <strong>Salary:</strong>
                    ${formatCurrency(
                        employee.salary
                    )}
                </p>

                <button
                    class="delete-btn"
                    data-id="${employee.id}"
                >
                    Delete
                </button>
            `;


            /*
                Event handling
            */

            card
                .querySelector(".delete-btn")
                .addEventListener(
                    "click",
                    () => {

                        deleteEmployee(
                            employee.id
                        );

                    }
                );


            grid.appendChild(card);
        }
    );


    updateEmployeeCount(
        filteredEmployees
    );

    calculateSalary(
        filteredEmployees
    );
}


/*
==================================================
        SEARCH EMPLOYEES
==================================================
*/

function searchEmployees() {

    const input =
        document.getElementById(
            "searchInput"
        );

    searchText =
        input.value.trim();

    displayEmployees();
}


/*
==================================================
        DEPARTMENT FILTER
==================================================
*/

function filterDepartment(
    department
) {

    selectedDepartment =
        department;


    const buttons =
        document.querySelectorAll(
            ".department-buttons button"
        );


    buttons.forEach(button => {

        button.classList.remove(
            "active"
        );


        if (
            button.dataset.department ===
            department
        ) {

            button.classList.add(
                "active"
            );
        }

    });


    displayEmployees();
}


/*
==================================================
        EMPLOYEE COUNT
==================================================
*/

function updateEmployeeCount(
    displayedEmployees
) {

    document.getElementById(
        "employeeCount"
    ).innerHTML =
        displayedEmployees.length;
}


/*
==================================================
        SALARY CALCULATION
==================================================
*/

function calculateSalary(
    displayedEmployees
) {

    /*
        reduce()
        Total salary
    */

    const totalSalary =
        displayedEmployees.reduce(
            (total, employee) => {

                return total +
                    Number(employee.salary);

            },
            0
        );


    /*
        Average salary
    */

    const averageSalary =
        displayedEmployees.length > 0
            ? totalSalary /
              displayedEmployees.length
            : 0;


    document.getElementById(
        "totalSalary"
    ).innerHTML =
        formatCurrency(totalSalary);


    document.getElementById(
        "averageSalary"
    ).innerHTML =
        formatCurrency(
            Math.round(
                averageSalary
            )
        );


    displayHighestPaid(
        displayedEmployees
    );
}


/*
==================================================
        HIGHEST PAID EMPLOYEE
==================================================
*/

function displayHighestPaid(
    displayedEmployees
) {

    const element =
        document.getElementById(
            "highestEmployee"
        );


    if (
        displayedEmployees.length === 0
    ) {

        element.innerHTML = "-";

        return;
    }


    /*
        reduce() finds highest salary.
    */

    const highestPaid =
        displayedEmployees.reduce(
            (highest, employee) => {

                if (
                    employee.salary >
                    highest.salary
                ) {

                    return employee;
                }

                return highest;

            }
        );


    /*
        Destructuring
    */

    const {
        name,
        salary
    } = highestPaid;


    element.innerHTML =
        `${name}<br>
         ${formatCurrency(salary)}`;
}


/*
==================================================
        ADD EMPLOYEE
==================================================
*/

function addEmployee(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "employeeName"
        ).value.trim();


    const age =
        Number(
            document.getElementById(
                "employeeAge"
            ).value
        );


    const email =
        document.getElementById(
            "employeeEmail"
        ).value.trim();


    const department =
        document.getElementById(
            "employeeDepartment"
        ).value;


    const salary =
        Number(
            document.getElementById(
                "employeeSalary"
            ).value
        );


    /*
        Employee object
    */

    const employee = {

        id: Date.now(),

        name: name,

        age: age,

        email: email,

        department: department,

        salary: salary,

        phone: "Not available"

    };


    /*
        Validation
    */

    const validation =
        validateEmployee(
            employee
        );


    if (!validation.valid) {

        showValidationErrors(
            validation.errors
        );

        return;
    }


    /*
        Spread operator
    */

    employees = [
        ...employees,
        employee
    ];


    clearForm();

    hideValidationErrors();


    /*
        Show all employees
    */

    selectedDepartment = "All";

    searchText = "";

    document.getElementById(
        "searchInput"
    ).value = "";


    document
        .querySelectorAll(
            ".department-buttons button"
        )
        .forEach(button => {

            button.classList.remove(
                "active"
            );

            if (
                button.dataset.department ===
                "All"
            ) {

                button.classList.add(
                    "active"
                );
            }

        });


    displayEmployees();
}


/*
==================================================
        VALIDATION
==================================================
*/

function validateEmployee(
    employee
) {

    const errors = [];


    /*
        Name validation
    */

    if (!employee.name) {

        errors.push(
            "❌ Please enter employee name"
        );
    }


    /*
        Age validation
    */

    if (
        employee.age <= 18 ||
        !employee.age
    ) {

        errors.push(
            "❌ Age must be greater than 18"
        );
    }


    /*
        Email validation
    */

    if (!employee.email) {

        errors.push(
            "❌ Please enter employee email"
        );

    } else if (
        !employee.email.includes("@")
    ) {

        errors.push(
            "❌ Please enter a valid email"
        );
    }


    /*
        Department validation
    */

    if (!employee.department) {

        errors.push(
            "❌ Please select department"
        );
    }


    /*
        Salary validation
    */

    if (
        !employee.salary ||
        employee.salary < 50000
    ) {

        errors.push(
            "❌ Salary must be ₹50,000 or more"
        );
    }


    /*
        every()
    */

    const departments = [
        "IT",
        "HR",
        "Finance",
        "Marketing"
    ];


    const validDepartments =
        departments.every(
            department =>
                typeof department ===
                "string"
        );


    if (!validDepartments) {

        errors.push(
            "❌ Department validation failed"
        );
    }


    return {

        valid:
            errors.length === 0,

        errors: errors

    };
}


/*
==================================================
        SHOW VALIDATION ERRORS
==================================================
*/

function showValidationErrors(
    errors
) {

    const box =
        document.getElementById(
            "validationErrors"
        );


    /*
        map()
    */

    box.innerHTML =
        errors
            .map(
                error =>
                    `<div>${error}</div>`
            )
            .join("");


    box.style.display = "block";
}


/*
==================================================
        HIDE VALIDATION ERRORS
==================================================
*/

function hideValidationErrors() {

    const box =
        document.getElementById(
            "validationErrors"
        );

    box.innerHTML = "";

    box.style.display = "none";
}


/*
==================================================
        CLEAR FORM
==================================================
*/

function clearForm() {

    document
        .getElementById(
            "employeeForm"
        )
        .reset();
}


/*
==================================================
        DELETE EMPLOYEE
==================================================
*/

function deleteEmployee(id) {

    /*
        filter()
    */

    employees =
        employees.filter(
            employee =>
                employee.id !== id
        );


    displayEmployees();
}


/*
==================================================
        FIND EMPLOYEE
==================================================
*/

function findEmployeeById(id) {

    /*
        find()
    */

    return employees.find(
        employee =>
            employee.id === id
    );
}


/*
==================================================
        SORT EMPLOYEES
==================================================
*/

function sortEmployees(type) {

    if (type === "name") {

        employees.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    } else if (type === "age") {

        employees.sort(
            (a, b) =>
                a.age - b.age
        );

    } else if (type === "salary") {

        employees.sort(
            (a, b) =>
                b.salary - a.salary
        );
    }


    displayEmployees();
}


/*
==================================================
        CURRENCY FORMAT
==================================================
*/

function formatCurrency(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);
}


/*
==================================================
        EVENT LISTENERS
==================================================
*/


/*
    Search button
*/

document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        searchEmployees
    );


/*
    Search while typing
*/

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        searchEmployees
    );


/*
    Department buttons
*/

document
    .querySelectorAll(
        ".department-buttons button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterDepartment(
                    button.dataset.department
                );

            }
        );

    });


/*
    Add Employee
*/

document
    .getElementById("employeeForm")
    .addEventListener(
        "submit",
        addEmployee
    );


/*
    Sort buttons
*/

document
    .getElementById("sortName")
    .addEventListener(
        "click",
        () => sortEmployees("name")
    );


document
    .getElementById("sortAge")
    .addEventListener(
        "click",
        () => sortEmployees("age")
    );


document
    .getElementById("sortSalary")
    .addEventListener(
        "click",
        () => sortEmployees("salary")
    );


/*
==================================================
        START APPLICATION
==================================================
*/

fetchEmployees();
