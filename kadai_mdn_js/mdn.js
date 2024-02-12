const date = new Date();

const [year, month, day] = [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
]

const today = () => {
  console.log(year + '年' + month + '月' + day + '日');
}

today();
