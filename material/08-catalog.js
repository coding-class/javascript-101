var myCatalog = [
    {
        name : "iPhone 7",
        price : 19000000,
        description : "iPhone 7 now has the best performance and battery life ever, as well as new finishes, water resistance, and stereo speakers"
    },
    {
        name : "Samsung S7",
        price : 9000000,
        description : "Also known as Samsung Galaxy S7 edge Duos with dual-SIM card slots"
    },
    {
        name : "Nexus 5",
        price : 12000000,
        description : "Nexus 5 (codenamed Hammerhead) is an Android smartphone manufactured by LG Electronics for Google. Co-developed with and marketed by Google Inc."
    }
];

var i = 0;

while (i < myCatalog.length) {
    document.write(`
        <li>
            <strong>${myCatalog[i].name}</strong> <br/>
            Price : ${myCatalog[i].price} <br/>
            ${myCatalog[i].description}
        </li>
    `);
    i += 1;
}
