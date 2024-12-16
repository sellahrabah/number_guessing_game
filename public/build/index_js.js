(self["webpackChunk"] = self["webpackChunk"] || []).push([["index_js"],{

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
console.log('This log comes from assets/js/index.js - welcome to AssetMapper! 🎉');
document.addEventListener('DOMContentLoaded', function () {
  var numberOfPlayersInput = document.getElementById('number-of-players');
  var playerNamesContainer = document.getElementById('player-names-container');
  numberOfPlayersInput.addEventListener('input', function () {
    var numberOfPlayers = parseInt(numberOfPlayersInput.value, 10);
    if (!isNaN(numberOfPlayers) && numberOfPlayers >= 2) {
      playerNamesContainer.innerHTML = '';
      for (var i = 1; i <= numberOfPlayers; i++) {
        var inputDiv = document.createElement('div');
        inputDiv.classList.add('mb-3');
        var label = document.createElement('label');
        label.classList.add('form-label');
        label.setAttribute('for', "player-name-".concat(i));
        label.textContent = "Player ".concat(i, " Name");
        var input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.id = "player-name-".concat(i);
        input.name = "playerNames[".concat(i, "]");
        input.placeholder = "Enter name for Player ".concat(i);
        inputDiv.appendChild(label);
        inputDiv.appendChild(input);
        playerNamesContainer.appendChild(inputDiv);
      }
    } else {
      playerNamesContainer.innerHTML = '';
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_function_name_js-node_modules_core-js_modules_es_pars-8e1fdf"], () => (__webpack_exec__("./assets/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQztBQUVsRkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU1DLG9CQUFvQixHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUN6RSxJQUFNQyxvQkFBb0IsR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsd0JBQXdCLENBQUM7RUFFOUVELG9CQUFvQixDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNqRCxJQUFNSSxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0osb0JBQW9CLENBQUNLLEtBQUssRUFBRSxFQUFFLENBQUM7SUFFaEUsSUFBSSxDQUFDQyxLQUFLLENBQUNILGVBQWUsQ0FBQyxJQUFJQSxlQUFlLElBQUksQ0FBQyxFQUFFO01BQ2pERCxvQkFBb0IsQ0FBQ0ssU0FBUyxHQUFHLEVBQUU7TUFFbkMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlMLGVBQWUsRUFBRUssQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBTUMsUUFBUSxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDOUNELFFBQVEsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBRTlCLElBQU1DLEtBQUssR0FBR2YsUUFBUSxDQUFDWSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDRyxLQUFLLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNqQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUMsS0FBSyxpQkFBQUMsTUFBQSxDQUFpQlAsQ0FBQyxDQUFFLENBQUM7UUFDN0NLLEtBQUssQ0FBQ0csV0FBVyxhQUFBRCxNQUFBLENBQWFQLENBQUMsVUFBTztRQUV0QyxJQUFNUyxLQUFLLEdBQUduQixRQUFRLENBQUNZLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDN0NPLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLE1BQU07UUFDbkJELEtBQUssQ0FBQ04sU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ25DSyxLQUFLLENBQUNFLEVBQUUsa0JBQUFKLE1BQUEsQ0FBa0JQLENBQUMsQ0FBRTtRQUM3QlMsS0FBSyxDQUFDRyxJQUFJLGtCQUFBTCxNQUFBLENBQWtCUCxDQUFDLE1BQUc7UUFDaENTLEtBQUssQ0FBQ0ksV0FBVyw0QkFBQU4sTUFBQSxDQUE0QlAsQ0FBQyxDQUFFO1FBRWhEQyxRQUFRLENBQUNhLFdBQVcsQ0FBQ1QsS0FBSyxDQUFDO1FBQzNCSixRQUFRLENBQUNhLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDO1FBRTNCZixvQkFBb0IsQ0FBQ29CLFdBQVcsQ0FBQ2IsUUFBUSxDQUFDO01BQzlDO0lBQ0osQ0FBQyxNQUFNO01BQ0hQLG9CQUFvQixDQUFDSyxTQUFTLEdBQUcsRUFBRTtJQUN2QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvanMvaW5kZXguanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbnVtYmVyT2ZQbGF5ZXJzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyLW9mLXBsYXllcnMnKTtcclxuICAgIGNvbnN0IHBsYXllck5hbWVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1uYW1lcy1jb250YWluZXInKTtcclxuXHJcbiAgICBudW1iZXJPZlBsYXllcnNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBudW1iZXJPZlBsYXllcnMgPSBwYXJzZUludChudW1iZXJPZlBsYXllcnNJbnB1dC52YWx1ZSwgMTApO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKG51bWJlck9mUGxheWVycykgJiYgbnVtYmVyT2ZQbGF5ZXJzID49IDIpIHtcclxuICAgICAgICAgICAgcGxheWVyTmFtZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZlBsYXllcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ21iLTMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBwbGF5ZXItbmFtZS0ke2l9YCk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtpfSBOYW1lYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IGBwbGF5ZXItbmFtZS0ke2l9YDtcclxuICAgICAgICAgICAgICAgIGlucHV0Lm5hbWUgPSBgcGxheWVyTmFtZXNbJHtpfV1gO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBgRW50ZXIgbmFtZSBmb3IgUGxheWVyICR7aX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERpdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwbGF5ZXJOYW1lc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibnVtYmVyT2ZQbGF5ZXJzSW5wdXQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllck5hbWVzQ29udGFpbmVyIiwibnVtYmVyT2ZQbGF5ZXJzIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImlzTmFOIiwiaW5uZXJIVE1MIiwiaSIsImlucHV0RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwidGV4dENvbnRlbnQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==