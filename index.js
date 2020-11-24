
// using input values, output the proper API link
function getReturnUrl(parkVal, limit = 10) {
  const api_key = 'Epw3JeowxYcGVTUHQPNBPxyGA72Vg96mkwharQxv'
  const baseUrl = 'https://developer.nps.gov/api/v1/parks'
  // remove the comma in between input
  let parkValSplit = parkVal.split(',');
  // setup placeholder to receive statecode string
  let newParkVal = ''
  // for loop through the input, add string, trim, then update newParkVal
  for (let i = 0; i < parkValSplit.length; i++) {
    newParkVal += `${parkValSplit[i].trim()}%2C%20`
  }
  // now put it all together
  let completeUrl = `${baseUrl}?stateCode=${newParkVal}&limit=${limit}&api_key=${api_key}`
  console.log(completeUrl);
  fetch(completeUrl)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
  })

  }

// Capture value of both the state code and the max # of results
function handleParkSearch() {
  $('#submitBtn').click('#submit', function(event) {
    event.preventDefault();
    let parkVal = $('#stateEntry').val();
    let limit = $('#maxResults').val();
    console.log(parkVal);
    console.log(limit);
    getReturnUrl(parkVal, limit)
  })
}
    
  

function main() {
  handleParkSearch();
    


}

$(main);