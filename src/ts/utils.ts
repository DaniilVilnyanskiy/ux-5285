/* eslint-disable */
export function setCookie(name: string, value: string, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
  };

  // if (options.expires instanceof Date) {
  //   options.expires = options.expires.toUTCString();
  // }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    // @ts-ignore
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Пример использования:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});

export function getCookie(name: string) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}