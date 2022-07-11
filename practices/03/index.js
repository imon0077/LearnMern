console.log('script loaded');
const order1 = {
    customer: {
        name: 'Bob',
        phone: '123'
    },
    cart: [
        {
            product: 'Bread',
            quantity: 10,
            unitPrice: 10,
            totalPrice: 100
        }
    ],
    total: 100,
    paid: 80,
    due: 20
};

const order2 = {
    customer: {
        name: 'Alice',
        phone: '124'
    },
    cart: [
        {
            product: 'Rice',
            quantity: 10,
            unitPrice: 5,
            totalPrice: 50
        },
    ],
    total: 50,
    paid: 50,
    due: 0
};

const orders = [order1, order2];

console.log(orders)

//1. Calculate total orders amount : 150
const totalOrderAmount = orders.reduce( (totalamount, order) => totalamount += order.total, 0 );
console.log("total orders amount : " + totalOrderAmount);

// 2. Calculate total paid amount : 130
const totalPaidAmount = orders.reduce((totalPaid, order) => totalPaid += order.paid, 0);
console.log("Total Paid amount is : " + totalPaidAmount);

//3. Calculate total due amount : 20
const dueAmount = orders.reduce((totalDue, order) => totalDue += order.due, 0);
console.log("total due amount is : " + dueAmount);

// 4. Calculate total orders count : 2
const totalNumberofOrders = orders.length;
console.log("total orders count : " + totalNumberofOrders);

// 5. Calculate averge order amount : 75
const avgOrderAmount = totalOrderAmount / totalNumberofOrders;
console.log("Average Order Amount is : " + avgOrderAmount);

//6. Calculate item wise total sale  Bread : 100, Rice: 50
const CartData = orders.map(item => item.cart).flat();

//console.log(CartData);

const itemWiseTotalSale = CartData.reduce( (totalItem, currItem) => totalItem += currItem.product + " : " + currItem.totalPrice + ", ", "");

console.log("item wise total sale : " + itemWiseTotalSale);