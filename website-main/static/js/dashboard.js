var data;
var chartData;
var category;


Papa.parse('static/healthcare-dataset-stroke-data-update.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function (results) {
    data = results.data;
    chartData = data;
    category = document.querySelector('input[name="category"]:checked').value;;
    buildBarChart(category, chartData);
    buildPieChart(category, chartData);
  }
});

function buildBarChart(category, filteredData) {
  var sampleData = filteredData;
  let noStrokeSet = {};
  let strokeSet = {};
  sampleData.forEach(obj => {
    if (obj.stroke === 0) {
      noStrokeSet[obj[category]] = (noStrokeSet[obj[category]] ?? 0) + 1;
    } else {
      strokeSet[obj[category]] = (strokeSet[obj[category]] ?? 0) + 1;
    }
  });
  var trace1 = {
    x: format(Object.keys(strokeSet), category),
    y: Object.values(strokeSet),
    name: 'Had Stroke',
    type: 'bar'
  };
  var trace2 = {
    x: format(Object.keys(noStrokeSet), category),
    y: Object.values(noStrokeSet),
    name: 'Never Had Stroke',
    type: 'bar',
  };
  var data = [trace1, trace2];
  var chartLayout = {
    title: {
      text: "Relationship between " + category.replace('_', ' ') + " and possibility of stroke",
      font: {
        size: 15,
      },
    },
    barmode: 'group',
    height: 500,
    width: 500,
    xaxis: {
      title: {
        text: category.replace('_', ' '),
        font: {
          size: 15,
        }
      },
    },
    yaxis: {
      title: {
        text: 'Number of people',
        font: {
          size: 15,
        }
      }
    }
  };
  Plotly.newPlot('bar', data, chartLayout);
};


function buildPieChart(category, filteredData) {
  var sampleData = filteredData;
  var set = {};
  sampleData.forEach(obj => {
    set[obj[category]] = (set[obj[category]] ?? 0) + 1;
  });
  var data = [{
    values: Object.values(set),
    labels: format(Object.keys(set), category),
    type: 'pie'
  }];
  var layout = {
    title: {
      text: "Dataset Distribution for " + category.replace('_', ' '),
      font: {
        size: 15,
      },
    },
    height: 400,
    width: 500
  };
  Plotly.newPlot('pie', data, layout);
}

function format(keys, category) {
  keys.forEach((value, index) => {
    if (value == 1) {
      keys[index] = "Has " + category.replace("_", ' ');
    }
    if (value == 0) {
      keys[index] = "No " + category.replace('_', ' ');
    }
    if (value.includes('_')) {
      keys[index] = value.replace('_', ' ');
    }
  });
  return keys;
}

function chartChange() {
  category = document.querySelector('input[name="category"]:checked').value;
  document.getElementById('age').value = 'all';
  document.getElementById('gender').value = 'all';
  document.getElementById('relationshipStatus').value = 'all';
  document.getElementById('workType').value = 'all';
  document.getElementById('residenceType').value = 'all';
  buildBarChart(category, chartData);
  buildPieChart(category, chartData);
}

function getFilters() {
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var ever_married = document.getElementById('relationshipStatus').value;
  var work_type = document.getElementById('workType').value;
  var Residence_type = document.getElementById('residenceType').value;
  const filters = { age, gender, ever_married, work_type, Residence_type };
  filterSearch(filters)
}

function filterSearch(filters) {
  var filteredData = chartData;
  Object.entries(filters).forEach(([key, value]) => {
    if (value === 'all') {
      //do nothing 
    } else if (key === 'age') {
      const newVal = value.split('-');
      const high = newVal[1];
      const low = newVal[0];
      filteredData = filteredData.filter(row => row[key] <= high && row[key] >= low);
    } else {
      filteredData = filteredData.filter(row => row[key] == value);
    }
  });
  buildBarChart(category, filteredData)
  buildPieChart(category, filteredData);
};


