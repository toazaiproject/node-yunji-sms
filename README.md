# node-yunji-sms

node 云极短信发送

## Install 安装

> use npm isntall
>
> 使用 npm 安装

```
npm install node-yunji-sms
```

## Sample example 使用说明

### init Client 初始化客户端

```
/**
 * 初始化客户端
 * @author xutao
 * @param    {[String]}                 accessKey [云极提供的accessKey]
 * @param    {[String]}                 accessSecret [云极提供的accessSecret]
 * @param    {[String]}                 classificationSecret [云极提供的classificationSecret]
 */
var yunjiSms = require('../index').initClient({
	accessKey:accessKey,
	accessSecret:accessSecret,
    classificationSecret:classificationSecret
});
```

### 发送短信

```
/**
 * @param    {[String]}         signCode [签名id]
 * @param    {[String]}         templateCode [模板id]
 * @param    {[Array]}         tels [发送的手机号数组]
 * @param    {[Object]}         params [参数，具体值看云极自己申请的模板]
 */
var sendSms = function(signCode,templateCode,tels,params){
    yunjiSms.sendSms(signCode,templateCode,tels,params)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
```