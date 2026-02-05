// Question 10: Create a discount calculator using closure that applies a fixed discount percentage.

function createDiscountCalculator(discountPercent) {
    return function (price) {
        const discount = (price * discountPercent) / 100;
        const finalPrice = price - discount;
        console.log(`Original: ₹${price}, Discount: ${discountPercent}%, Final: ₹${finalPrice}`);
        return finalPrice;
    };
}

const apply10Percent = createDiscountCalculator(10);
apply10Percent(1000);
apply10Percent(500);

const apply25Percent = createDiscountCalculator(25);
apply25Percent(2000);
