function getHeader() {
    fetch('./html/header.html')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('header-output').innerHTML = data;
        })
}

function getFooter() {
    fetch('./html/footer.html')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('footer-output').innerHTML = data;
        })
}
getHeader();
getFooter();