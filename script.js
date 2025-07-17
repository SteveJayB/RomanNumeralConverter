//reference DOM elements
const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

//validate user input
const checkInput = () => {
  //if user input is empty ask for a valid number and return false
  if (input.value === "") {
    result.textContent = "Please enter a valid number";
    return false;
  }
  //if user input is less than 0 ask for a positive number and return false
  if (parseInt(input.value) < 0){
    result.textContent = "Please enter a number greater than or equal to 1";
    return false;
  }
  //if user input is 4000 or over ask for a smaller number and return false
  if (parseInt(input.value) > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true;
}

//define number mappings into objects in an array
const romanValues = [
  {
    value: 1000,
    symbol: "M"
  },
  {
    value: 900,
    symbol: "CM"
  },
  {
    value: 500,
    symbol: "D"
  },
  {
    value: 400,
    symbol: "CD"
  },
  {
    value: 100,
    symbol: "C"
  },
  {
    value: 90,
    symbol: "XC"
  },
  {
    value: 50,
    symbol: "L"
  },
  {
    value: 40,
    symbol: "XL"
  },
  {
    value: 10,
    symbol: "X"
  },
  {
    value: 9,
    symbol: "IX"
  },
  {
    value: 5,
    symbol: "V"
  },
  {
    value: 4,
    symbol: "IV"
  },
  {
    value: 1,
    symbol: "I"
  }
];

//convert function
const convertToRoman = () => {
  //create num value that ensures user input is a number
  let num = parseInt(input.value, 10);
  
  //end function if number is invalid
  if (!checkInput(num)) {
    return;
  }
  
  //ensure the output section is hidden initially and text is empty
  result.style.display = "none"
  result.textContent = "";

  //add roman symbol to output as long as input is greater than or equal to value in array
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].value) {
      num -= romanValues[i].value;
      result.textContent += romanValues[i].symbol;
    }
  }
  //display the output section with answer
  result.style.display = "block";
}

//add action when convert button is clicked
button.addEventListener("click", convertToRoman);