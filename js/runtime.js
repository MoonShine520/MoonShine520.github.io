setInterval(() => {
  let create_time = Math.round(new Date('2021-08-1 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);
  //格式规范化，个位数前面加0
  var nol = function(h){
    return h>9?h:'0'+h;
  }
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }//年
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }//天
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }//时
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }//分
  if (second > 0) {
    time[4] = nol(second);
  }//秒
  //早上7点到晚上10点营业
  if ((Number(time[2])<22) && (Number(time[2])>7)){
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/MoonShine的博客-营业中-6adea8?style=social&logo=cakephp' title='还不快去哔哩哔哩关注我！'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  } //徽标内容参考站内教程
  //其余时间打烊
  else{
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/MoonShine的博客-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>'; //徽标内容参考站内教程
  }
  //覆写挂载标签的内容
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);

var title1="text=KZblog又有新评论啦~！--by Valine"
var SCKEY_Server="SCT60741TIHUtBajrblHm6rZCqF6EYR7C"
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Server(){
    var text="desp=";
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data=text+"|昵称："+"|邮箱："+"|网站地址："+"|当前页面："+"|评论内容："+"|跳转链接："+"|评论时间"+"\n"+"|----|----|----|----|"+"\n"+"|   "+vnick+"   |   "+vmail+"  |  "+vlink+"|   "+res+"| "+veditor+"| "+pageurl+"|" +ptime.toLocaleString()+"|";
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'https://sc.ftqq.com/'+SCKEY_Server+'.send', true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title1+"&"+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Server;

var title2="msg=KZblog又有新评论啦~！--by Valine\n"
var SCKEY_Qmsg="https://qmsg.zendee.cn/send/c5902ca6aba8e91ac05b04cc220c5409.html"
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Qmsg(){
    var pagename=document.title;
    var wz=pagename.indexOf('|');
    var res=pagename.substring(0,wz);
    var pageurl=document.URL;
    var ptime=new Date();
    var vnick=document.getElementsByClassName("vnick vinput")[0].value;
    var vmail=document.getElementsByClassName("vmail vinput")[0].value;
    var vlink=document.getElementsByClassName("vlink vinput")[0].value;
    var veditor=document.getElementsByClassName("veditor vinput")[0].value;
    var data="昵称："+vnick+"\n邮箱："+vmail+"\n网站地址："+vlink+"\n当前页面："+pagename+"\n评论内容："+veditor+"\n跳转链接："+pageurl+"\n评论时间"+ptime.toLocaleString();
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST',SCKEY_Qmsg, true); //第二步：打开连接
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
    httpRequest.send(title2+data);//发送请求 将情头体写在send中
};
ValineButton.onclick=send_valine_Qmsg;