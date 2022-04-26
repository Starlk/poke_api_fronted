const setDates = (name, data) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};

const getDate = (name) => {
  sessionStorage.getItem(name);
};

const getDates = () => {
  const listDate = [];
  for (let index = 0; index < sessionStorage.length; index++) {
    listDate.push(sessionStorage.getItem(sessionStorage.key(index)));
  }
  return listDate;
};

const deleteData = (name) => sessionStorage.removeItem(name);

export { setDates, getDate, getDates, deleteData };
