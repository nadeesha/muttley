/**
 * @fileoverview FlipCard Engine. 
 * @author Jason Mayes - www.jasonmayes.com
 */
var flipCard = function() {
  return {
    /**
     * Attach desired event handler. Cross browser.
     */
    addEventHandler: function(elem, eventType, handler) {
      if (elem.addEventListener) {
        elem.addEventListener (eventType, handler, false);
      }
      else if (elem.attachEvent) {
        elem.attachEvent ('on' + eventType, handler);
      }
    },

    /**
     * Set the innerHTML of a specified element.
     */
    setHtmlById: function(elementId, html) {
      document.getElementById(elementId).innerHTML = html;
    },

    /**
     * Set an element to have a class.
     */
    setClasses: function(elementId, classes) {
      document.getElementById(elementId).className = classes;
    },

    /**
     * Handle continue button click.
     */
    continueButtonClick: function(event) {
      var event = event || window.event;
      event.preventDefault();
      alert('Do something');
    },

    /**
     * Handle continue button click.
     */
    closeButtonClick: function(event) {
      var event = event || window.event;
      event.preventDefault();
      alert('Handle close');
    },

    /**
     * Count how many fields we have selected and update UI.
     */
    countSelected: function() {
      var elemCount = document.getElementsByClassName('selected');
      var elemCountReq = document.getElementsByClassName('required');
      var total = elemCount.length + elemCountReq.length;
      if (total !== 1) {
        flipCard.setHtmlById('selected', '(' + total + ') fields selected');
      } else {
        flipCard.setHtmlById('selected', '(1) field selected');
      }      
    },

    /**
     * Handle a flipclard click toggle state.
     */
    handleClick: function(event) {
      var event = event || window.event;
      event.preventDefault();
      
      if(this.className.indexOf('selected') === -1 &&
          this.className.indexOf('required') === -1) {
        this.className = this.className + ' selected';
      } else if (this.className.indexOf('selected') != -1) {
        this.className = this.className.replace('selected', '');
      }
      
      flipCard.countSelected();
    }
  };
}();

// Initialise everything.
var elems = document.getElementsByClassName('flipper');
var x = elems.length;
while (x--) {
  flipCard.addEventHandler(elems[x], 'click', flipCard.handleClick);
}
flipCard.addEventHandler(document.getElementById('close'), 'click', flipCard.closeButtonClick);
flipCard.addEventHandler(document.getElementById('continue'), 'click', flipCard.continueButtonClick);
flipCard.countSelected();