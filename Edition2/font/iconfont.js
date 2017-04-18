;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M304.992 471.84l146.112 0 59.696-159.84 64.56 159.84 144.128 0-104.4 88.256 52 173.408-154.848-87.232-154.848 87.232 52.016-173.408L304.992 471.84z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-check" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M65.686025 534.054295c0 0 161.365154 148.965753 278.858102 322.06823 239.277642-398.99118 607.447862-617.781208 607.447862-617.781208s30.242791-94.851275-33.875528-62.627363c0 0-261.254166 109.804848-595.382059 407.827429-114.021893-109.972671-180.040493-137.402393-180.040493-137.402393C60.151985 406.233118 65.686025 534.054295 65.686025 534.054295L65.686025 534.054295zM65.686025 534.054295"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M681.865094 863.856101l-339.730189 0c-20.056361 0-36.4289-16.270211-36.4289-36.4289l0-630.95673c0-20.056361 16.270211-36.4289 36.4289-36.4289l339.730189 0c20.056361 0 36.4289 16.270211 36.4289 36.4289L718.293994 827.529529C718.293994 847.58589 702.023783 863.856101 681.865094 863.856101L681.865094 863.856101zM512 827.529529c13.405016 0 24.251824-10.846807 24.251824-24.251824 0-13.405016-10.846807-24.251824-24.251824-24.251824-13.405016 0-24.251824 10.846807-24.251824 24.251824C487.748176 816.682722 498.594984 827.529529 512 827.529529L512 827.529529zM681.865094 232.89937l-12.177076 0L354.311982 232.89937l-12.177076 0 0 509.595283 12.177076 0 315.478365 0 12.177076 0L681.967423 232.89937 681.865094 232.89937zM681.865094 232.89937"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.49628 512.408299l316.793086 344.299557 311.917032-346.078063L196.49628 512.408299zM196.49628 512.408299"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M160.678 708.326l669.214 0-334.569-369.511z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)