const encryptData = (data) => {
  return `encrypted ${data}`
}


const send = (url, data) => {
  let encrypted_data = encryptData(data);
  return encrypted_data;
};

export { send };
