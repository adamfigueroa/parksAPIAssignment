
// using input values, output the proper API link
function getReturnUrl(parkVal, limit = 10) {
  const api_key = 'Epw3JeowxYcGVTUHQPNBPxyGA72Vg96mkwharQxv'
  const baseUrl = 'https://developer.nps.gov/api/v1/parks'
  
  // setup placeholder to receive statecode string
  let newParkVal = ''
  // for loop through the input, add string, trim, then update newParkVal
  for (let i = 0; i < parkVal.length; i++) {
    newParkVal += `${parkVal[i].trim()}`
  }
  // now put it all together
  let completeUrl = `${baseUrl}?stateCode=${newParkVal}&limit=${limit}&api_key=${api_key}`
  console.log(completeUrl);
  fetch(completeUrl)
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => displayResults(responseJson))
  }

// Capture value of both the state code and the max # of results
function handleParkSearch() {
  $('#submitBtn').click(function(event) {
    event.preventDefault();
    let parkVal = $('#stateEntry').val();
    let limit = $('#maxResults').val();
    console.log(parkVal);
    console.log(limit);
    getReturnUrl(parkVal, limit)
  })
}
    
 function displayResults(json) {
  console.log(json)
   $('#resultsUl').empty();
   let holder = []
   for (let i = 0; i < json.data.length; i++) {
    holder.push(
     `<li class="parkness">
     <h3><a href="${json.data[i].url}" target="_blank">${json.data[i].fullName}</a></h3>
     <p>${json.data[i].description}</p>
     <p>${json.data[i].addresses[0].line1}, ${json.data[i].addresses[0].city}, ${json.data[i].addresses[0].stateCode}, ${json.data[i].addresses[0].postalCode}</p>
     </li>
     `
   )}
   console.log(holder)
   $('#resultsUl').append(holder)
 } 

function main() {
  handleParkSearch();



}

$(main);