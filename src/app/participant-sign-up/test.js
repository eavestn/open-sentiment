var buttonOneValue;
var buttonTwoValue;

on.ready(function() {
    initialize();
});

on.resetButton.click(fucntion() {
    initialize();
})

var initialize = function() {
    buttonOneValue = generateRandomNumber(10);
    buttonTwoValue = generateRandomNumber(10);
};

var generateRandomNumber = function(bounds) {
    return Math.floor(Math.random * bounds);
};

document.getButtonOne().click(function() {
        // 18 and 121 --- .0 - 1.00


});


var targetNumber = 0;

while (!targetNumber >= 18 && !targetNumber <= 121) {
    targetNumber = generateRandomNumber(120);
}