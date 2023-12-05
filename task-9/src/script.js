let currentPage = 1;
const itemsPerPage = 5;
let totalPages;
// let data = [];
let state = {
  isLoading: true,
  data: [],
};

const fetchDataAsync = async () => {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

function displayData(page) {
  if (state.isLoading) {
    const main = document.querySelector(".main");
    main.innerHTML = "Loading";
  } else {
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
  }

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
  const pageButtonContainer = document.querySelector(".page-number-container");
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

async function init() {
  data = await fetchDataAsync();

  state.isLoading = false;
  state.data = data;

  totalPages = Math.ceil(data.length / itemsPerPage);

  displayData(currentPage);
  updatePageNumbers();
}

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});
