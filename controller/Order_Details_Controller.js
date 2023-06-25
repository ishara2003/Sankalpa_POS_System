


// Attach an event listener to the input element
let filterInput = document.getElementById('txt_od_cusNIC');
filterInput.addEventListener('input', filterTable);

// Filtering function
function filterTable() {
    console.log("sexxy");
    let filterValue = filterInput.value.toUpperCase(); // Convert input to uppercase for case-insensitive comparison
    let table = document.getElementById('tbl_order_details');
    let rows = table.getElementsByTagName('tr');

    // Iterate through each row of the table (start from index 1 to skip the header row)
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowData = row.getElementsByTagName('td');

        // Compare each cell's data with the filter value
        let shouldDisplay = false;
        for (let j = 0; j < rowData.length; j++) {
            let cell = rowData[j];
            if (cell.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                shouldDisplay = true;
                break; // If any cell matches the filter, display the row and stop further comparisons
            }
        }

        // Display or hide the row based on the filter
        row.style.display = shouldDisplay ? 'table-row' : 'none';
    }
}





// Attach an event listener to the input element
let filterById = document.getElementById('txt_od_ID');
filterById.addEventListener('input', filterTableById);

// Filtering function
function filterTableById() {
    console.log("sexxy");
    let filterValue = filterById.value.toUpperCase(); // Convert input to uppercase for case-insensitive comparison
    let table = document.getElementById('tbl_order_details');
    let rows = table.getElementsByTagName('tr');

    // Iterate through each row of the table (start from index 1 to skip the header row)
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowData = row.getElementsByTagName('th');

        // Compare each cell's data with the filter value
        let shouldDisplay = false;
        for (let j = 0; j < rowData.length; j++) {
            let cell = rowData[j];
            if (cell.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                shouldDisplay = true;
                break; // If any cell matches the filter, display the row and stop further comparisons
            }
        }

        // Display or hide the row based on the filter
        row.style.display = shouldDisplay ? 'table-row' : 'none';
    }
}





// Attach an event listener to the input element
let filterByDate = document.getElementById('date_filter');
filterByDate.addEventListener('input', filterTableByDate);

// Filtering function
function filterTableByDate() {
    console.log("sexxy");
    let filterValue = filterByDate.value.toUpperCase(); // Convert input to uppercase for case-insensitive comparison
    let table = document.getElementById('tbl_order_details');
    let rows = table.getElementsByTagName('tr');

    // Iterate through each row of the table (start from index 1 to skip the header row)
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowData = row.getElementsByTagName('th');

        // Compare each cell's data with the filter value
        let shouldDisplay = false;
        for (let j = 0; j < rowData.length; j++) {
            let cell = rowData[j];
            if (cell.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                shouldDisplay = true;
                break; // If any cell matches the filter, display the row and stop further comparisons
            }
        }

        // Display or hide the row based on the filter
        row.style.display = shouldDisplay ? 'table-row' : 'none';
    }
}




