/**
 * 日期格式化
 * @param {Date} date - 传入日期
 * @param {String} fmt - 日期格式，如'yyyy-MM-dd'
 */
function formatetime(time, format = 'yy-MM-dd HH:mm:ss') {
  if (!time || time <= 0) {
    return '';
  }
  time = time.toString()
  if (time.length === 10) {
    time *= 1000;
  }
  var date = new Date(time);
  var year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始 , 所以+1
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
    return '0' + index;
  }); //新建长度为10的数组 格式为 00 01 02 03

  var dateStr = format.replace(/yy/g, year)
    .replace(/MM/g, preArr[month] || month)
    .replace(/dd/g, preArr[day] || day)
    .replace(/HH/g, preArr[hour] || hour)
    .replace(/mm/g, preArr[min] || min)
    .replace(/ss/g, preArr[sec] || sec);
  return dateStr;
}

/**
 * 检查手机号
 * @param phone - 传入手机号
 */
function checkPhone(phone) {
  if (!(/^1[3456789]\d{9}$/.test(phone))) {
    return false;
  }
  return true;
}

function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1; //不是ie浏览器
  }
}

function onloadFunc() {
  var version = IEVersion();
  if (version < 9 && version > -1) {
    alert("请使用IE9及以上版本的浏览器，推荐使用谷歌浏览器！");
    window.close();
  }
}

function queryParams(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(p + "=" + obj[p]);
    }
  }
  return '?' + str.join("&");
}

function getParams(params, type = 1) {
  let _params = {};
  for (let key in params) {
    if (params[key] !== '') {
      _params[key] = params[key]
    }
  }
  if (type === 1) {
    return _params
  } else {
    return queryParams(_params);
  }
}
let socketUrl = "47.94.137.135:8082"
let gaodeKey = "0aa3d9690602b28e821abe22e522ae42"
export {
  formatetime,
  checkPhone,
  socketUrl,
  onloadFunc,
  getParams,
  gaodeKey
}
