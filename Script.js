document.querySelector('.pl').addEventListener('click', () => {
  console.log('Pegando')
  const axios = require('axios')

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: '<REQUIRED>',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': 'ab38ccf369mshd0000cb898e5edbp127cb0jsn56026c0a7da3',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }

  try {
    const response = axios.request(options)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
})
