// import fetch from 'isomorphic-fetch';
const fetch = require('isomorphic-fetch');
const getHeaders = () => {
  const headers = Object({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': null,
  });
  return headers;
};

const handleErrors = (response) => {
  // // console.log(`*** handleErrors() response.status=${response.status}`);
  // // console.log(response);
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response);
  }
  const res = response.clone();
  const resJson = res.json();
  // // console.log(resJson);
  if (resJson.code !== null) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

const fetchFunction = (url, methodData, headersData, bodyData, successFn) => {
  let p;

  try {
    if (methodData === 'GET') {
      p = Promise.race([
        fetch(url, { method: methodData, mode: 'cors', headers: headersData }),
        new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error('request timeout')), 2000);
        }),
      ]);
    } else {
      p = Promise.race([
        fetch(url, {
          method: methodData,
          mode: 'cors',
          headers: headersData,
          body: bodyData,
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error('request timeout')), 2000);
        }),
      ]);
    }
    p.then(handelErrors)
      .then((response) => response.json())
      .then((returnData) => successFn(returnData))
      .catch((error) => {
        const errorData = {};
        errorData.code = 9999;
        errorData.desc = error;
        errorData.message = error;
        return successFn(errorData);
      });
  } catch (e) {
    console.log('e');
  }
};
