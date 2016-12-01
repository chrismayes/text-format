import Moment from "moment";

exports.printMsg = function() {
  console.log("Text formatting library");
}

export function formatDate(value) {
  return (
    value === undefined
    || value === null
    || value === ""
    ? ""
    : Moment(value).format("L")
  )
}

export function formatPhone(number) {
  //Convert number to string and remove non numeric characters
  const stringNumber = ("" + number).replace(/\D/g, '');
  //Split the number into groups (3,3,4)
  const numberGroups = stringNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!numberGroups) ? number : "(" + numberGroups[1] + ") " + numberGroups[2] + "-" + numberGroups[3];
}

export function formatSelectByName(name, options) {
  const option = options.find((e) =>
    e.name === name ? true : false
  );
  return ((option || {value: ""}).value)
}

export function formatSelectByValue(value, options) {
  const option = options.find((e) =>
    e.value === value ? true : false
  );
  return ((option || {name: ""}).name)
}

export function formatYesNo(value) {
  return (
    value === undefined
    || value === null
    || value.trim() === ""
    ? value ? "Yes" : "No"
    : "No"
  )
}
