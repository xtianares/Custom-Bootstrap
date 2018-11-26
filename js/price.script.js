// for price display - script needs to be before the function call
function getDollars(price) {
    if (price.indexOf('$') >= 0) {
        var price = price.substring(1);
    };
    var dollars = Number(price).toFixed(2).split('.').shift();
    //document.write(dollars);
    var s = document.getElementsByTagName('script'); s=s[s.length-1]; s.parentNode.innerHTML = dollars;
};
function getCents(price) {
    if (price.indexOf('$') >= 0) {
        var price = price.substring(1);
    };
    var cents = Number(price).toFixed(2).split('.').pop();
    //document.write(cents);
    var s = document.getElementsByTagName('script'); s=s[s.length-1]; s.parentNode.innerHTML = cents;
};
function getFullPrice(price) {
    if (price.indexOf('$') >= 0) {
        var price = price.substring(1);
    };
    var price = Number(price).toFixed(2);
    //document.write(price);
    var s = document.getElementsByTagName('script'); s=s[s.length-1]; s.parentNode.innerHTML = price;
};
