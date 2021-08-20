const request = require('request');
const sms_util = require('./sms.util');
const url = "https://market.juncdt.com/smartmarket/service/sendMessageToMultiple";
let accessKey = "";
let accessSecret = "";
let classificationSecret = "";

//获取网页js调用所需注册参数
/**
 * 
 * @param {String} signCode [签名id]
 * @param {String} templateCode [模板id]
 * @param {Array} tels [发送的手机号数组]
 * @param {Object} params [参数]
 */
 const sendSms = function(signCode,templateCode,tels,params){
    let obj = {
		accessKey:accessKey,
		classificationSecret:classificationSecret,
		signCode:signCode,
		templateCode:templateCode,
		taskId:'yj' + Date.now(),
		phone:tels,
		params:params
	};
	obj.sign = sms_util.sign(obj,accessSecret);
    
	const options = {
		url:url,
		method:"post",
		headers:{"Content-Type":"application/json"},
		body:obj,
		json:true
	};

	return new Promise((reslove, reject) => {
		return request(options,function(error, response, body){
			if(error){
				return reject('发送失败');
			}else{
				return reslove('发送成功');
			}
		});
	})
}

/**
 * 初始化工具客户端
 * @author xutao
 * @param    {[String]}                 accessKey [云极提供的accessKey]
 * @param    {[String]}                 accessSecret [云极提供的accessSecret]
 * @param    {[String]}                 classificationSecret [云极提供的classificationSecret]
 */
exports.initClient = function (params){
	if(!params){
		return ;
	}
	if(!params.accessKey){
		return ;
	}
	if(!params.accessSecret){
		return ;
	}
	if(!params.classificationSecret){
		return ;
	}

	accessKey = params.accessKey;
	accessSecret = params.accessSecret;
	classificationSecret = params.classificationSecret;

	return {
        sendSms:sendSms//发送短信
	};
};