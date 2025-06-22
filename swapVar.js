function swap(a, b) {
    console.log(`Before: a=${a}, b=${b}`);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`After: a=${a}, b=${b}`);
}

swap(5, 8);
