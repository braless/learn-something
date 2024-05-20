//!function() {
//	var xhr = new XMLHttpRequest()
//	// xhr.open('GET', 'https://ip.phus.lu/get', true)
//	xhr.open('GET', 'https://phus.lu/get', true)
//	xhr.onload = function() {
//		if (xhr.status != 200)
//			return
//		parts = xhr.responseText.split('  ')
//		ip_addr = parts[0]
//		ip_city = parts[1] + (parts[2]?', '+parts[2]:'')
//		ip_isp = parts[3]
//		ip_ct = parts[4]
//		browser = navigator.userAgent.split(') ').slice(-1)[0]
//					.replace(/\s*Mobile Safari\/[\d\.]+/, '')
//					.replace(/Safari\/[\d\.]+/, '')
//		if ((str = browser.replace(/Chrome\/[\d\.]+ /, '')) != '')
//			browser = str
//		os = /Mozilla\/\d+\.\d+ \((.+?)\)/.exec(navigator.userAgent)[1]
//		if ((pos = os.indexOf('; Trident/')) > 0) {
//			browser = 'Internet Explorer ' + os.match(/rv:([\d\.]+)/)[1]
//			os = os.substring(0, pos)
//		}
//		div.add('table').html(
//			'<tr><th colspan="4">🌐客户端信息</th></tr>' +
//			'<tr><td>IP</td><td id="ip_addr" colspan="3">' + ip_addr + '</td></tr>' +
//			'<tr><td>访问地址</td><td id="ip_city" colspan="3">' + ip_city + '</td></tr>' +
//			'<tr><td>服务供应商</td><td id="ip_isp" colspan="3">' + ip_isp + '</td></tr>' +
//			'<tr><td>连接环境</td><td id="ip_ct" colspan="3">' + ip_ct + '</td></tr>' +
//			'<tr><td>浏览器</td><td id="browser" colspan="3"><span onclick="alert(navigator.userAgent)">' + browser + '</span></td></tr>' +
//			'<tr><td>操作系统</td><td id="browser" colspan="3">' + os + '</td></tr>'
//		)
//	}
//	xhr.send()
//}()
!function() {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://phus.lu/get', true)
	xhr.onload = function() {
		if (xhr.status != 200)
			return
		info = JSON.parse(xhr.responseText)
		div.add('table').html(
			'<tr><th colspan="4">🌐 Client Information</th></tr>' +
			'<tr><td>IP</td><td colspan="3">' + info.origin.ip + '</td></tr>' +
			'<tr><td>Country</td><td colspan="3">' + info.origin.country + '</td></tr>' +
			'<tr><td>City</td><td colspan="3">' + info.origin.city + '</td></tr>' +
			'<tr><td>ISP</td><td colspan="3">' + info.origin.isp + '</td></tr>' +
			'<tr><td>Connection</td><td colspan="3">' + info.origin.connection_type + '</td></tr>' +
			'<tr><td>Browser</td><td id="browser" colspan="3"><span onclick="alert(navigator.userAgent)">' + info.browser.browser_title + ' (' + info.browser.os_title + ')</span></td></tr>' +
			''
			//(info.headers["X-Ja3-Fingerprint"] ? '<tr><td>JA3 Fingerprint </td><td colspan="3">' + info.headers["X-Ja3-Fingerprint"] + '</td></tr>' : '')
		)
	}
	xhr.send()
}()