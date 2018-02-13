// =========================================
// Import Functions  -----------------------

  // Polyfill -----------------------------
  import 'whatwg-fetch';
  import 'promise/polyfill';
  import 'nodelist-foreach-polyfill';

  // CreatePersons ------------------------
  import CreatePersons from './components/CreatePersons';

// ========================================
// Init Events  ---------------------------
window.addEventListener('load', function(){
  CreatePersons();
});
