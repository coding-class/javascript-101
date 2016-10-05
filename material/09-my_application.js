var myCatalog = [
    {
        name : "iPhone 7",
        price : 19000000,
        image : "http://blogs-images.forbes.com/gordonkelly/files/2016/03/fv_iphone_7_render_top.jpg",
        description : "iPhone 7 now has the best performance and battery life ever, as well as new finishes, water resistance, and stereo speakers"
    },
    {
        name : "Samsung S7",
        price : 9000000,
        image : "http://www.samsung.com/us/explore/galaxy-s7-features-and-specs/dist/assets/img/module1/desktop/intro.jpg",
        description : "Also known as Samsung Galaxy S7 edge Duos with dual-SIM card slots"
    },
    {
        name : "Nexus 5",
        price : 12000000,
        image : "https://cdn.homeshopping.pk/product_images/x/867/nexus-5-pak__05529_zoom.png",
        description : "Nexus 5 (codenamed Hammerhead) is an Android smartphone manufactured by LG Electronics for Google. "
    }
];

document.write(`<h1 id="title">Tokopedia.com</h1>`);

var i = 0;
while (i < myCatalog.length) {
    document.write(`
        <div class="col-md-4">
            <strong>${myCatalog[i].name}</strong> <br/>
            <img width=250 src="${myCatalog[i].image}" title="${myCatalog[i].name}" />
            <hr/>
            Price : ${myCatalog[i].price} <br/>
            ${myCatalog[i].description}
        </div>
    `);
    i += 1;
}

document.write(`<div class="clearfix"></div> <hr/>`);

var changeColorButton = document.createElement("button");
changeColorButton.innerText = "change background color";
changeColorButton.addEventListener('click', function(){
    var color = prompt("mau warna apa?");
    document.body.style = `background:${color}`;
});
document.body.appendChild(changeColorButton);


var changeWebsiteName = document.createElement("button");
changeWebsiteName.innerText = "change title";
changeWebsiteName.addEventListener('click', function(){
    var title = prompt("mau diganti jadi apa?");
    document.getElementById("title").innerHTML = title;
});
document.body.appendChild(changeWebsiteName);
