function capitalizeNames(items) {
    return items.map(item => {
        return {
            ...item,
            name: item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()
        };
    });
}

console.log("Capitalized Names:", capitalizeNames(devices));
