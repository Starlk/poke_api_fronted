const setDates = (name, data) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};

const getDate = (name) => {
  sessionStorage.getItem(name);
};

const getDates = async () => {
  const listDate = [];
  for (let index = 0; index < sessionStorage.length; index++) {
    let parse = await JSON.parse(
      sessionStorage.getItem(sessionStorage.key(index))
    );
    listDate.push(parse);
  }
  return listDate;
};

const deleteData = (name) => sessionStorage.removeItem(name);

export { setDates, getDate, getDates, deleteData };
