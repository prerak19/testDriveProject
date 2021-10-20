(function (newrelic) {
	function NRAttrName(name) {
		switch(name) {
			case 'CLS':
				return 'cumulativeLayoutShift';
			case 'FID':
				return 'firstInputDelay';
			case 'LCP':
				return 'largestContentfulPaint';
			default:
				return name;
		}
	}

	function logValue(metrics) {
		if(newrelic) {
			newrelic.setCustomAttribute(NRAttrName(metrics.name), metrics.name === 'CLS' ? metrics.value : metrics.value / 1000);
		}
	}

	window.addEventListener('DOMContentLoaded', function() {
		webVitals.getCLS(logValue, true);
		webVitals.getFID(logValue);
		webVitals.getLCP(logValue, true);
	});
}(window.newrelic));
