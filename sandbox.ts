document.addEventListener('DOMContentLoaded', function () {
  // Event listener for whe the type (percentage/chance) is changed
  document.getElementById('type')!.addEventListener('change', () => {
    const toFromLabel: HTMLLabelElement = document.getElementById('label-tofrom') as HTMLLabelElement;
    const type: HTMLSelectElement = document.getElementById('type') as HTMLSelectElement;

    //update the label based on the selected type
    if (type.value === 'percentage') {
      toFromLabel.textContent = 'Percentage:';
    } else {
      toFromLabel.textContent = 'Chance:';
    }
  });

  //function to calculate probablity
  (window as any).calculateProbability = function (): void {
    const type: HTMLSelectElement = document.getElementById('type') as HTMLSelectElement;
    const tries: HTMLInputElement = document.getElementById('tries') as HTMLInputElement;
    const toFrom: HTMLInputElement = document.getElementById('tofrom') as HTMLInputElement;
    const answerInput: HTMLInputElement = document.getElementById('answer') as HTMLInputElement;

    let answer: string = "";

    // If the type is "percentage", calculate based on percentage input
    if (type.value === 'percentage') {
      const percentage = parseFloat(toFrom.value); // Convert percentage input to float
      const triesCount = parseInt(tries.value); // Convert number of tries to integer

      if (!isNaN(percentage) && !isNaN(triesCount)) { // check if inputs are valid numbers
        const successProbability = percentage / 100; //convert percentage to decimal
        const failureProbability = 1 - successProbability; //calculate failure probability
        const probabilityOfAtLeastOneSuccess = 1 - Math.pow(failureProbability, triesCount); //calculate probability of at least one success

        answer = `Success in ${triesCount} tries is ${(probabilityOfAtLeastOneSuccess * 100).toFixed(2)}%.`;
      } else {
        answer = "Please enter valid percentage and number of tries."; //error message for invalid inputs
      }
    } else { //If the type is "chance", calculate based on chance input
      const chanceStr = toFrom.value;
      const triesCount = parseInt(tries.value); //convert number of tries to integer

      const chanceParts = chanceStr.split('/'); // split the chance input into numerator and denominator
      if (chanceParts.length === 2) { //check if the input is in correct format
        const numerator = parseFloat(chanceParts[0]); //convert numerator to float
        const denominator = parseFloat(chanceParts[1]); //convert denominator to float

        if (!isNaN(numerator) && !isNaN(denominator) && !isNaN(triesCount)) { //check if inputs are valid numbers
          const successProbability = numerator / (numerator + denominator); //calculate success probability
          const failureProbability = 1 - successProbability; //calculate failure probability
          const probabilityOfAtLeastOneSuccess = 1 - Math.pow(failureProbability, triesCount); //calculate probability of at least one success

          answer = `Success in ${triesCount} tries is ${(probabilityOfAtLeastOneSuccess * 100).toFixed(2)}%.`;
        } else {
          answer = "Please enter a valid chance and number of tries."; //error message for invalid inputs 
        }
      } else {
        answer = "Please enter the chance in the format 'numerator/denominator'."; //error message for incorrect format 
      }
    }

    answerInput.value = answer; //display the answer in the answer input field
  };
});
