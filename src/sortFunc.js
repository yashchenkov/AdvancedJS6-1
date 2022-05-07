export default function sortFunc(obj, pattern) {
  const keys = Object.keys(obj);
  const result = [];
  //выбор заранее упорядоченных свойств
  pattern.forEach((elem) => {
    if(obj.hasOwnProperty(elem)) {
    	result.push({key: elem, value: obj[elem]});
    }
  });
  //сортировка массива по алфавиту
  keys.sort();
  //выбор оставшихся свойств
  keys.forEach((elem) => {
  	if(!pattern.includes(elem)) {
  		result.push({key: elem, value: obj[elem]})
  	}
  });
  return result;
}
