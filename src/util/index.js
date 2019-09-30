/* eslint-disable */


function showInfoDialog(_this,txhash,isBack) {
  _this.$q
    .dialog({
      title: '',//_this.$t("submitted"),
      message: _this.$t('submittips'),
      // ok: _this.$t('viewresults'),
      // cancel: _this.$t('close')
    })
    .then(() => {
      // debugger
      // openURL(_this.global.apiconfig.etherscanio + "tx/" + txhash);
      if(isBack)
       _this.$router.go(-1);
      
    })
    .catch(() => {
      if(isBack)
       _this.$router.go(-1);
    });
}

function reprotError2Bmob(_this, method, error, params) {
  if ((error + "").indexOf("insufficient funds") >= 0) {
    toast(_this.$t("ethnotenough"));
    return
  } else if ((error + "").indexOf("timeout") >= 0) {
    toast('Network Timeout');
  } else {
    toast(_this.$t("error"));
  }
  _this.$axios
    .post(
      _this.global.apiconfig.BmobRestAPIUrl + "classes/errorlog",
      {
        address: _this.global.wallet.ethAddress,
        error: error + "",
        method: method,
        params: params,
        version: _this.global.versionCode + ''
      },
      {
        headers: _this.global.apiconfig.BmobRestAPIHeaders
      }
    )
    .then(function (response) {
      // console.log(response);
    });
}

function convertUTCTimeToLocalTime(UTCDateString) {
  // if (!UTCDateString) {
  //   return "-";
  // }
  function formatFunc(str) {
    //格式化显示
    return str > 9 ? str : "0" + str;
  }
  var date2 = new Date(UTCDateString); //这步是关键
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = date2.getHours();
  // var noon = hour >= 12 ? "PM" : "AM";
  // hour = hour >= 12 ? hour - 12 : hour;
  hour = formatFunc(hour);
  var min = formatFunc(date2.getMinutes());
  var dateStr = year + "-" + mon + "-" + day + " " + hour + ":" + min; //+":"+date2.getSeconds();
  return dateStr;
}


// function add(arg1, arg2) {
//   var r1, r2, m, c;
//   try {
//       r1 = arg1.toString().split(".")[1].length;
//   }
//   catch (e) {
//       r1 = 0;
//   }
//   try {
//       r2 = arg2.toString().split(".")[1].length;
//   }
//   catch (e) {
//       r2 = 0;
//   }
//   c = Math.abs(r1 - r2);
//   m = Math.pow(10, Math.max(r1, r2));
//   if (c > 0) {
//       var cm = Math.pow(10, c);
//       if (r1 > r2) {
//           arg1 = Number(arg1.toString().replace(".", ""));
//           arg2 = Number(arg2.toString().replace(".", "")) * cm;
//       } else {
//           arg1 = Number(arg1.toString().replace(".", "")) * cm;
//           arg2 = Number(arg2.toString().replace(".", ""));
//       }
//   } else {
//       arg1 = Number(arg1.toString().replace(".", ""));
//       arg2 = Number(arg2.toString().replace(".", ""));
//   }
//   return (arg1 + arg2) / m;
// }

// function sub(arg1, arg2) {
//   var r1, r2, m, n;
//   try {
//       r1 = arg1.toString().split(".")[1].length;
//   }
//   catch (e) {
//       r1 = 0;
//   }
//   try {
//       r2 = arg2.toString().split(".")[1].length;
//   }
//   catch (e) {
//       r2 = 0;
//   }
//   m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
//   n = (r1 >= r2) ? r1 : r2;
//   return ((arg1 * m - arg2 * m) / m).toFixed(n);
// }

// function times(arg1, arg2) {
//   var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
//   try {
//       m += s1.split(".")[1].length;
//   }
//   catch (e) {
//   }
//   try {
//       m += s2.split(".")[1].length;
//   }
//   catch (e) {
//   }
//   return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
// }


// function divide(arg1, arg2) {
//   var t1 = 0, t2 = 0, r1, r2;
//   try {
//       t1 = arg1.toString().split(".")[1].length;
//   }
//   catch (e) {
//   }
//   try {
//       t2 = arg2.toString().split(".")[1].length;
//   }
//   catch (e) {
//   }
//   // with (Math) {
//       r1 = Number(arg1.toString().replace(".", ""));
//       r2 = Number(arg2.toString().replace(".", ""));
//       return (r1 / r2) * pow(10, t2 - t1);
//   // }
// }


/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
** xuanfeng 2014-08-28
*/
 
function randomWord(randomFlag, min, max){
  var str = "",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if(randomFlag){
      range = Math.round(Math.random() * (max-min)) + min;
  }
  for(var i=0; i<range; i++){
      str += arr[Math.round(Math.random() * (arr.length-1))];
  }
  return str;
}

function isEmpty(e){

  if(e===''||typeof e==='undefined'||e===null){
    return true
  }else{
    return false
  }
}

export default {
  showInfoDialog,
  reprotError2Bmob,
  convertUTCTimeToLocalTime,
  randomWord,
  isEmpty
};
