let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

document.getElementById(`page-${currentPage}`).classList.add('active');

function showPage(page) {
    document.querySelectorAll('.page').forEach((div) => {
        div.classList.remove('active');
    });
    document.getElementById(`page-${page}`).classList.add('active');
    checkButtons();
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function checkButtons() {
    document.querySelector('button[onclick="prevPage()"]').disabled = currentPage === 1;
    document.querySelector('button[onclick="nextPage()"]').disabled = currentPage === totalPages;
}
