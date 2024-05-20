document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('type').addEventListener('change', function () {
        var toFromLabel = document.getElementById('label-tofrom');
        var type = document.getElementById('type');
        if (type.value === 'percentage') {
            toFromLabel.textContent = 'Percentage:';
        }
        else {
            toFromLabel.textContent = 'Chance:';
        }
    });
    window.calculateProbability = function () {
        var type = document.getElementById('type');
        var tries = document.getElementById('tries');
        var toFrom = document.getElementById('tofrom');
        var answerInput = document.getElementById('answer');
        var answer = "";
        if (type.value === 'percentage') {
            var percentage = parseFloat(toFrom.value);
            var triesCount = parseInt(tries.value);
            if (!isNaN(percentage) && !isNaN(triesCount)) {
                var successProbability = percentage / 100;
                var failureProbability = 1 - successProbability;
                var probabilityOfAtLeastOneSuccess = 1 - Math.pow(failureProbability, triesCount);
                answer = "Success in ".concat(triesCount, " tries is ").concat((probabilityOfAtLeastOneSuccess * 100).toFixed(2), "%.");
            }
            else {
                answer = "Please enter valid percentage and number of tries.";
            }
        }
        else {
            var chanceStr = toFrom.value;
            var triesCount = parseInt(tries.value);
            var chanceParts = chanceStr.split('/');
            if (chanceParts.length === 2) {
                var numerator = parseFloat(chanceParts[0]);
                var denominator = parseFloat(chanceParts[1]);
                if (!isNaN(numerator) && !isNaN(denominator) && !isNaN(triesCount)) {
                    var successProbability = numerator / (numerator + denominator);
                    var failureProbability = 1 - successProbability;
                    var probabilityOfAtLeastOneSuccess = 1 - Math.pow(failureProbability, triesCount);
                    answer = "Success in ".concat(triesCount, " tries is ").concat((probabilityOfAtLeastOneSuccess * 100).toFixed(2), "%.");
                }
                else {
                    answer = "Please enter a valid chance and number of tries.";
                }
            }
            else {
                answer = "Please enter the chance in the format 'numerator/denominator'.";
            }
        }
        answerInput.value = answer;
    };
});
