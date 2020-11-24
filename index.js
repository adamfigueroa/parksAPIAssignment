
function getParks() {
  const api_key = 'Epw3JeowxYcGVTUHQPNBPxyGA72Vg96mkwharQxv'
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