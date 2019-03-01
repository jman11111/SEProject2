const axios = require('axios');

const testresponse1 = () => {
  try {
    return axios.post('http://localhost:3001/twitter', {
      tweet: '#yeet'
      } 
    )
  } catch (error) {
    console.error(error)
  }
}

const testresponse2 = () => {
  try {
    return axios.post('http://localhost:3001/twitter', {
      tweet: '#gym'
      } 
    )
  } catch (error) {
    console.error(error)
  }
}

const testresponse3 = () => {
  try {
    return axios.post('http://localhost:3001/twitter', {
      tweet: '#yes'
      } 
    )
  } catch (error) {
    console.error(error)
  }
}

const testresponse4 = () => {
  try {
    return axios.post('http://localhost:3001/twitter', {
      tweet: '#no'
      } 
    )
  } catch (error) {
    console.error(error)
  }
}

const testresponse5 = () => {
  try {
    return axios.post('http://localhost:3001/twitter', {
      tweet: '#test'
      } 
    )
  } catch (error) {
    console.error(error)
  }
}

const sendPOST1 = () => {
  const response = testresponse1()
    .then(response => {
      if (response.data) {
        for(var i = 0;i<response.data.statuses.length;i++){
        console.log('Recieved' + JSON.stringify(response.data.statuses[i].text));
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }  

  const sendPOST2 = () => {
    const response2 = testresponse2()
    .then(response2 => {
      if (response2.data) {
        for(var i = 0;i<response2.data.statuses.length;i++){
        console.log('Recieved' + JSON.stringify(response2.data.statuses[i].text));
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const sendPOST3 = () => {
    const response3 = testresponse3()
    .then(response3 => {
      if (response3.data) {
        for(var i = 0;i<response3.data.statuses.length;i++){
        console.log('Recieved' + JSON.stringify(response3.data.statuses[i].text));
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const sendPOST4 = () => {
    const response4 = testresponse4()
    .then(response4 => {
      if (response4.data) {
        for(var i = 0;i<response4.data.statuses.length;i++){
        console.log('Recieved' + JSON.stringify(response4.data.statuses[i].text));
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const sendPOST5 = () => {
    const response5 = testresponse5()
    .then(response5 => {
      if (response5.data) {
        for(var i = 0;i<response5.data.statuses.length;i++){
        console.log('Recieved' + JSON.stringify(response5.data.statuses[i].text));
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

setTimeout(sendPOST1,1000);
setTimeout(sendPOST2,2000);
setTimeout(sendPOST3,3000);
setTimeout(sendPOST4,4000);
setTimeout(sendPOST5,5000);
