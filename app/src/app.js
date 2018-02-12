// =========================================
// Import Functions  -----------------------

  // Polyfill -----------------------------
  import 'whatwg-fetch';
  import 'promise/polyfill';

	// Default -------------------------------
	import ExampleFunction from './components/ExampleFunction';

// =========================================
// Init Events  ----------------------------
window.addEventListener('load', function(){
	ExampleFunction();
});
