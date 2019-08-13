console.log("this is sw");
self.addEventListener('install', function(event) {
  console.log('installed');
});

// activate event
self.addEventListener('activate', function(event) {
	console.log('activated');
});

self.addEventListener('fetch', function(event) {});