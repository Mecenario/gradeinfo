function filterStudents(status) {
    const rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row => {
        if (status === "all") {
            row.style.display = "";
        } else {
            row.style.display =
                row.dataset.status === status ? "" : "none";
        }
    });
}

function searchStudent() {
    const value = document
        .getElementById("search")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();

        row.style.display =
            name.includes(value) ? "" : "none";
    });
}