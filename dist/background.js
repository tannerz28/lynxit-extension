const INTERVAL = 1000 * 30;

chrome.notifications.onClicked.addListener(function(notificationId) {
	if(notificationId === 'testNotification') {
		chrome.tabs.create({ url: 'http://qa.lynxithealth.com' });
		chrome.notifications.clear(notificationId);
	}
});

const showNotification = function() {
	chrome.notifications.create('testNotification', {
		type: 'basic',
		title: 'You\'ve got mail',
		message: 'You have received a page.',
		contextMessage: 'Lynxit',
		iconUrl: 'http://qa.lynxithealth.com/images/LynxIT_LOGO_50x183.png'
	});
};

if(window.Notification) {
	setInterval(function () {
		showNotification();
	}, INTERVAL);
}