function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);

        displayResult(bmi);
        updateChart(height, weight, bmi);
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid height and weight.';
    }
}

function displayResult(bmi) {
    var resultElement = document.getElementById('result');
    var bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'ต่ำกว่าเกณฑ์';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'ปกติ';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'มากกว่าเกณฑ์';
    } else {
        bmiCategory = 'โรคอ้วน';
    }

    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>' + 'BMI Category: ' + bmiCategory;
}

function updateChart(height, weight, bmi) {
    var ctx = document.getElementById('bmiChart').getContext('2d');

    var data = {
        labels: ['Height', 'Weight', 'BMI'],
        datasets: [{
            label: 'Your BMI',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
            data: [height, weight, bmi],
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}
