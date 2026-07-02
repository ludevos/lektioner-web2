window.onload = () => {
    let name = 'Lu';
    let age = 25;
    let price = 19.99;
    let boolean = true;

    if (boolean) {
        document.write(`Name: ${name}<br>Age: ${age}<br>Price: ${price} <br> Confirmed: ${boolean} <br>`);
    }
    else {
        document.write("Information not confirmed.");
    }

    // Writes the types of the variables to the console
    document.write(`Name: ${typeof name}, <br> Age: ${typeof age}, <br> Price: ${typeof price},<br> Confirmed: ${typeof boolean} <br>`);

    let ageNumber = Number(age);
    let productPrice = Number(price);

    document.write(`Age as number: ${ageNumber}, <br> Price as number: ${productPrice}`);

    // Convert data types
    let ageString = age.toString();
    let floatPrice = productPrice.toFixed(2);

    document.write(`Age as string: ${typeof ageString} <br>, Price as float: ${typeof floatPrice}`);
};