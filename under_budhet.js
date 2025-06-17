function isUnderBudget(items, budget) {
    for (let item of items) {
        if (item.price > budget) return false;
    }
    return true;
}

console.log("Under 40000:", isUnderBudget(devices, 40000));
