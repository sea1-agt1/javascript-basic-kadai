const date = new Date();

const today = () => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  console.log(year + '年' + (month+1) + '月' + day + '日');
}

today();

