
function getParks() {
  const api_key = 
  const baseUrl =

  }
}

function handleParkSearch() {
  $('#parks').on('submit', function(event) {
    event.preventDefault();
    let parkVal = $('#park').val()
    getParks(parkVal)
  })
}
    
  

function main() {
 
    


}

$(main);