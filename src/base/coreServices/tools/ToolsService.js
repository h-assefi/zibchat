export function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds()
  );
  const utc2 = Date.UTC(
    b.getFullYear(),
    b.getMonth(),
    b.getDate(),
    b.getHours(),
    b.getMinutes(),
    b.getSeconds()
  );
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const isNullOrEmpty = (data) => {
  let result = false;
  if (data === undefined) result = true;
  if (data === null) result = true;
  if (data === "") result = true;

  return result;
};

export const isEmailValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const isMobileValid = (mobile) => {
  const regex = new RegExp(
    "(09(1[0-9]|0[0-9]|9[0-9]|3[0-9]|2[1-9])-?[0-9]{3}-?[0-9]{4})"
  );
  if (!mobile || regex.test(mobile) === false) {
    return false;
  }
  return true;
};

export const isIranianShebaValid = (sheba) => {
  const regex = new RegExp("IR[0-9]{24}");
  if (!sheba || regex.test(sheba) === false) {
    return false;
  }

  var newStr = sheba.substring(4);
  var d1 = sheba.charCodeAt(0) - 65 + 10;
  var d2 = sheba.charCodeAt(1) - 65 + 10;
  newStr += d1.toString() + d2.toString() + sheba.substring(2, 2);

  var remainder = iso7064Mod97_10(newStr);
  if (remainder !== 1) {
    return false;
  }

  return true;
};

export const downloadBase64File = (contentType, base64Data, fileName) => {
  const linkSource = `data:${contentType};base64,${base64Data}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

function iso7064Mod97_10(iban) {
  var remainder = iban,
    block;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}

export const CurrencyFormat = (num, sign = "ریال", digits = 0) => {
  if (num)
    return sign + num.toFixed(digits).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  else return "";
};

export const SeprateThreeDigit = (num) => {
  console.log("num");
  console.log(num);
  let str = num.toString().split(".");

  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }

  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }

  return str.join(".");
};

export const SeprateHandler = (e) => {
  document.getElementById(e.target.id).value = document
    .getElementById(e.target.id)
    .value.toString()
    .replaceAll(",", "")
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const IsPasswordValid = (
  password,
  useSpecialCharacter = false,
  useNumber = true,
  useCompound = true,
  minLenth = 6
) => {
  let expression = "^(?=.*[a-zA-Z0-9])";
  if (useCompound) {
    expression = "^(?=.*?[A-Z])(?=.*?[a-z])";
  }
  if (useNumber) {
    expression += "(?=.*?[0-9])";
  }
  if (useSpecialCharacter) {
    expression += "(?=.*?[#?!@$%^&*-])";
  }
  if (minLenth) {
    expression += ".{" + minLenth + ",}$";
  }

  const regex = new RegExp(expression);
  // WITH SPECIAL CHARACTER CHECK ->  ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$
  if (!password || regex.test(password) === false) {
    return false;
  }
  return true;
};

export function formatMinutes(minutes) {
  return minutes < 10 ? `0${minutes}` : minutes;
}

export function formatSeconds(seconds) {
  return seconds < 10 ? `0${seconds}` : seconds;
}
