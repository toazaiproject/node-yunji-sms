var accessKey = '';//云极提供的accessKey
var accessSecret = '';//云极提供的accessSecret
const classificationSecret = '';//云极提供的classificationSecret

/**
 * 初始化微信公众号开发客户端
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

//发送短信
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

// sendSms('','',[],{})