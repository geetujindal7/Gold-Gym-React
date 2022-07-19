export const fetchData = async (url, options) => {
    const resp = await fetch(url, options);
    const data = await resp.json() 
    return data;

}

export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc5b33704amsh5eff8f306d0200ep1fe8d1jsn3377938a8334',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  