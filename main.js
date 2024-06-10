let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let newArray = csv.split("\n");

let dataArray = [];

for (let i = 0; i < newArray.length; i++) {
  let data = newArray[i].split(",");
  dataArray.push(data);
}

const headers = dataArray[0];

const dataObjects = [];

for (i = 1; i < dataArray.length; i++) {
  const rowData = dataArray[i];
  const rowObjects = {};

  for (j = 0; j < rowData.length; j++) {
    const key = headers[j];
    const value = rowData[j];
    rowObjects[key] = value;
  }

  dataObjects.push(rowObjects);
}
