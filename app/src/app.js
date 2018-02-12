// =========================================
// Import Functions  -----------------------

  // Polyfill -----------------------------
  import 'whatwg-fetch';
  import 'promise/polyfill';

	// Default ------------------------------
	import CreatePersons from './components/CreatePersons';

// ========================================
// Init Events  ---------------------------
window.addEventListener('load', function(){
	CreatePersons();
});
