 const order = {
    id: 1,
    status: "pending"
};

function changeOrder() {
    order.status = "delivered";
    console.log(order);
}

changeOrder();
