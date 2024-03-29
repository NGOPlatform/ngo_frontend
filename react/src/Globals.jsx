

var Colors = {
    'dark': '#212529',
    'white': '#fff',
    'gray-100': '#f8f9fa',
    'gray-200': '#e9ecef',
    'gray-300': '#dee2e6',
    'gray-400': '#ced4da',
    'gray-500': '#adb5bd',
    'gray-600': '#6c757d',
    'gray-700': '#495057',
    'gray-800': '#343a40',
    'gray-900': '#212529',
    'black': '#000',
    'blue': '#0d6efd',
    'indigo': '#6610f2',
    'purple': '#6f42c1',
    'pink': '#d63384',
    'red': '#dc3545',
    'orange': '#fd7e14',
    'yellow': '#ffc107',
    'green': '#198754',
    'teal': '#20c997',
    'cyan': '#0dcaf0'

}

const baseUrl = "http://localhost:8081";
const LocalIpUrl = "";
const APIUrls = {
    "getONG": baseUrl + `/ongAPI/getONG`,
    "listONG": baseUrl + `/ongAPI/listONG`,
    "listONGSize": baseUrl + `/ongAPI/listONGSize`,
    "listONGNOU": baseUrl + `/ongAPI/listONGNOU`,
    "getUser": baseUrl + `/ongAPI/getUser`,
    "getONG": baseUrl + `/ongAPI/getONG`,
    "updateUserFav": baseUrl + `/ongAPI/updateUserFav`,
    "addUser": baseUrl + `/ongAPI/addUser`,
    "updateUserSub": baseUrl + `/ongAPI/updateUserSub`

}
     


export { Colors,APIUrls }