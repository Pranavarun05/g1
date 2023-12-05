const fetchDataAsync = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );

  const data = await response.json();
  return data;
};

async function init() {
  const data = await fetchDataAsync();
  console.log(data);

  const itemsPerPage = 5;

  let currentPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  console.log(data);

  function displayData(page) {
    const dataTableContainer = document.querySelector(".data-table-container");
    dataTableContainer.innerHTML = ""; // Clear previous data

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = data.slice(start, end);

    paginatedItems.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");

      nameCell.innerHTML = item.name;
      emailCell.innerHTML = item.email;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      dataTableContainer.appendChild(row);
    });

    updatePageNumbers();
  }

  function changePage(action) {
    if (action === "first") {
      currentPage = 1;
    } else if (action === "prev" && currentPage > 1) {
      currentPage--;
    } else if (action === "next" && currentPage < totalPages) {
      currentPage++;
    } else if (action === "last") {
      currentPage = totalPages;
    }
    displayData(currentPage);
  }

  function changePageNumber(number) {
    currentPage = number;
    displayData(currentPage);
  }

  function updatePageNumbers() {
    const pageButtonContainer = document.querySelector(
      ".page-number-container"
    );
    pageButtonContainer.innerHTML = ""; // Clear previous page numbers

    let startPage =
      currentPage % itemsPerPage !== 0
        ? Math.floor(currentPage / itemsPerPage) * itemsPerPage + 1
        : currentPage - itemsPerPage + 1;
    // Here if the page is a multiple of 5 then the shortest number in the preceding 4 pages will be the first page.
    // Otherwise the shortest number in a series of 5 with the multiple of 5 as the last page will be the first page.

    let endPage = Math.min(startPage + itemsPerPage - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      pageBtn.classList.add("page-button");

      pageBtn.addEventListener("click", function () {
        changePageNumber(i);
      });

      if (i === currentPage) {
        pageBtn.classList.add("active");
      }

      pageButtonContainer.appendChild(pageBtn);
    }

    const pageNumContainer = document.getElementById("page-numbers");
    pageNumContainer.innerHTML = `Page ${currentPage} of ${totalPages}`;
  }

  displayData(currentPage);
  updatePageNumbers();
}

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});
