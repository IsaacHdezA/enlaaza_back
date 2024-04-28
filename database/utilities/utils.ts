const utils = () => {};

utils.randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

utils.generateArray = <T>(max: number, data: Array<T>): Array<T> => {
  const DATA_LEN = data.length;
  let arr: Array<T> = [];

  for(let i = 0; i < max; i++)
		arr.push(data[utils.randomInt(0, DATA_LEN)]);

  return arr;
}

utils.toISODate = (date: Date) => date.toISOString().slice(0, 19).replace("T", " ");

export default utils;