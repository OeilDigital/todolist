const h1 = document.querySelector('h1');

setTimeout(() => {
    h1.classList.add("h1Effect")
}, 1000);

h1.classList.remove("h1Effect");

function responsiveTable() {
    document.querySelectorAll('.table-responsive').forEach((table) => {
        let labels = Array.from(table.querySelectorAll('th')).map((th) => { return th.innerText });

        table.querySelectorAll('td').forEach((td, i) => {
            td.setAttribute('data-label', labels[i % labels.lenght])
            console.log(table);
        })
    })
}

responsiveTable()