var data;
var tableData;

Papa.parse('static/healthcare-dataset-stroke-data-update.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function (results) {
    data = results.data;
    tableData = data;
    buildTable(tableData);
  }
});

var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      if (val === 1) val = 'Yes';
      if (val === 0) val = 'No';
      let cell = row.append("td");

      if (typeof val === 'string' || val instanceof String)
        val = format(val);

      cell.text(val);
    });
  });
}

function format(value) {
  if (value.includes('-')) {
    value = value.replace('-', ' ');
  }
  if (value.includes('_')) {
    value = value.replace('_', ' ');
  }
  return value[0].toUpperCase() + value.slice(1);
}

function getFilters() {
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var ever_married = document.getElementById('relationshipStatus').value;
  var work_type = document.getElementById('workType').value;
  var Residence_type = document.getElementById('residenceType').value;
  var smoking_status = document.getElementById('smokingStatus').value;
  var stroke = document.getElementById('stroke').value;
  var heart_disease = document.getElementById('heartDisease').value;
  var hypertension = document.getElementById('hypertension').value;

  const filters = { age, gender, ever_married, work_type, Residence_type, smoking_status, stroke, heart_disease, hypertension };
  filterSearch(filters)
}

function filterSearch(filters) {
  var filteredData = tableData;
  Object.entries(filters).forEach(([key, value]) => {
    if (value === 'all') {
      //do nothing 
    } else if (key === 'hypertension' || key === 'heart_disease' || key === 'stroke') {
      filteredData = filteredData.filter(row => row[key] === parseInt(value));
    } else if (key === 'age') {
      const newVal = value.split('-');
      const high = newVal[1];
      const low = newVal[0];
      filteredData = filteredData.filter(row => row[key] <= high && row[key] >= low);
    } else {
      filteredData = filteredData.filter(row => row[key] === value);
    }
  });
  buildTable(filteredData);
}
