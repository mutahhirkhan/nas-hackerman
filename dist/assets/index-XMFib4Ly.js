function Sp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o)
          l && Object.defineProperty(e, o, l.get ? l : { enumerable: !0, get: () => r[o] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver(o => {
    for (const l of o) if (l.type === 'childList') for (const i of l.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const l = {}
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const l = n(o)
    fetch(o.href, l)
  }
})()
function Ep(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function xp(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
    }
    n.prototype = t.prototype
  } else n = {}
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r)
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r]
              },
            },
      )
    }),
    n
  )
}
var ba = { exports: {} },
  Jo = {},
  ec = { exports: {} },
  z = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for('react.element'),
  Cp = Symbol.for('react.portal'),
  kp = Symbol.for('react.fragment'),
  _p = Symbol.for('react.strict_mode'),
  Pp = Symbol.for('react.profiler'),
  Rp = Symbol.for('react.provider'),
  Op = Symbol.for('react.context'),
  Tp = Symbol.for('react.forward_ref'),
  Np = Symbol.for('react.suspense'),
  Lp = Symbol.for('react.memo'),
  Ap = Symbol.for('react.lazy'),
  ps = Symbol.iterator
function jp(e) {
  return e === null || typeof e != 'object' ? null : ((e = (ps && e[ps]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var tc = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {}
function An(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = rc), (this.updater = n || tc)
}
An.prototype.isReactComponent = {}
An.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.')
  this.updater.enqueueSetState(this, e, t, 'setState')
}
An.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function oc() {}
oc.prototype = An.prototype
function ou(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = rc), (this.updater = n || tc)
}
var lu = (ou.prototype = new oc())
lu.constructor = ou
nc(lu, An.prototype)
lu.isPureReactComponent = !0
var hs = Array.isArray,
  lc = Object.prototype.hasOwnProperty,
  iu = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 }
function uc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = '' + t.key), t))
      lc.call(t, r) && !ic.hasOwnProperty(r) && (o[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) o.children = n
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2]
    o.children = s
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r])
  return { $$typeof: Tr, type: e, key: l, ref: i, props: o, _owner: iu.current }
}
function zp(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function uu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tr
}
function Fp(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var ms = /\/+/g
function Sl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Fp('' + e.key) : t.toString(36)
}
function ro(e, t, n, r, o) {
  var l = typeof e
  ;(l === 'undefined' || l === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (l) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Tr:
          case Cp:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + Sl(i, 0) : r),
      hs(o)
        ? ((n = ''),
          e != null && (n = e.replace(ms, '$&/') + '/'),
          ro(o, t, n, '', function (a) {
            return a
          }))
        : o != null &&
          (uu(o) && (o = zp(o, n + (!o.key || (i && i.key === o.key) ? '' : ('' + o.key).replace(ms, '$&/') + '/') + e)), t.push(o)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), hs(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u]
      var s = r + Sl(l, u)
      i += ro(l, t, n, s, o)
    }
  else if (((s = jp(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(l = e.next()).done; ) (l = l.value), (s = r + Sl(l, u++)), (i += ro(l, t, n, s, o))
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return i
}
function Ur(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    ro(e, r, '', '', function (l) {
      return t.call(n, l, o++)
    }),
    r
  )
}
function Ip(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var ye = { current: null },
  oo = { transition: null },
  Mp = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: oo, ReactCurrentOwner: iu }
z.Children = {
  map: Ur,
  forEach: function (e, t, n) {
    Ur(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      Ur(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Ur(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!uu(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
z.Component = An
z.Fragment = kp
z.Profiler = Pp
z.PureComponent = ou
z.StrictMode = _p
z.Suspense = Np
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp
z.cloneElement = function (e, t, n) {
  if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
  var r = nc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner
  if (t != null) {
    if ((t.ref !== void 0 && ((l = t.ref), (i = iu.current)), t.key !== void 0 && (o = '' + t.key), e.type && e.type.defaultProps))
      var u = e.type.defaultProps
    for (s in t) lc.call(t, s) && !ic.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2]
    r.children = u
  }
  return { $$typeof: Tr, type: e.type, key: o, ref: l, props: r, _owner: i }
}
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Op,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rp, _context: e }),
    (e.Consumer = e)
  )
}
z.createElement = uc
z.createFactory = function (e) {
  var t = uc.bind(null, e)
  return (t.type = e), t
}
z.createRef = function () {
  return { current: null }
}
z.forwardRef = function (e) {
  return { $$typeof: Tp, render: e }
}
z.isValidElement = uu
z.lazy = function (e) {
  return { $$typeof: Ap, _payload: { _status: -1, _result: e }, _init: Ip }
}
z.memo = function (e, t) {
  return { $$typeof: Lp, type: e, compare: t === void 0 ? null : t }
}
z.startTransition = function (e) {
  var t = oo.transition
  oo.transition = {}
  try {
    e()
  } finally {
    oo.transition = t
  }
}
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
z.useCallback = function (e, t) {
  return ye.current.useCallback(e, t)
}
z.useContext = function (e) {
  return ye.current.useContext(e)
}
z.useDebugValue = function () {}
z.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e)
}
z.useEffect = function (e, t) {
  return ye.current.useEffect(e, t)
}
z.useId = function () {
  return ye.current.useId()
}
z.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n)
}
z.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t)
}
z.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t)
}
z.useMemo = function (e, t) {
  return ye.current.useMemo(e, t)
}
z.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n)
}
z.useRef = function (e) {
  return ye.current.useRef(e)
}
z.useState = function (e) {
  return ye.current.useState(e)
}
z.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n)
}
z.useTransition = function () {
  return ye.current.useTransition()
}
z.version = '18.2.0'
ec.exports = z
var x = ec.exports
const su = Ep(x),
  ei = Sp({ __proto__: null, default: su }, [x])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp = x,
  Up = Symbol.for('react.element'),
  $p = Symbol.for('react.fragment'),
  Bp = Object.prototype.hasOwnProperty,
  Wp = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vp = { key: !0, ref: !0, __self: !0, __source: !0 }
function sc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null
  n !== void 0 && (l = '' + n), t.key !== void 0 && (l = '' + t.key), t.ref !== void 0 && (i = t.ref)
  for (r in t) Bp.call(t, r) && !Vp.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Up, type: e, key: l, ref: i, props: o, _owner: Wp.current }
}
Jo.Fragment = $p
Jo.jsx = sc
Jo.jsxs = sc
ba.exports = Jo
var R = ba.exports,
  ti = {},
  ac = { exports: {} },
  Ne = {},
  cc = { exports: {} },
  fc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(_, A) {
    var j = _.length
    _.push(A)
    e: for (; 0 < j; ) {
      var $ = (j - 1) >>> 1,
        B = _[$]
      if (0 < o(B, A)) (_[$] = A), (_[j] = B), (j = $)
      else break e
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0]
  }
  function r(_) {
    if (_.length === 0) return null
    var A = _[0],
      j = _.pop()
    if (j !== A) {
      _[0] = j
      e: for (var $ = 0, B = _.length, Se = B >>> 1; $ < Se; ) {
        var Ae = 2 * ($ + 1) - 1,
          $t = _[Ae],
          We = Ae + 1,
          Bt = _[We]
        if (0 > o($t, j)) We < B && 0 > o(Bt, $t) ? ((_[$] = Bt), (_[We] = j), ($ = We)) : ((_[$] = $t), (_[Ae] = j), ($ = Ae))
        else if (We < B && 0 > o(Bt, j)) (_[$] = Bt), (_[We] = j), ($ = We)
        else break e
      }
    }
    return A
  }
  function o(_, A) {
    var j = _.sortIndex - A.sortIndex
    return j !== 0 ? j : _.id - A.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var l = performance
    e.unstable_now = function () {
      return l.now()
    }
  } else {
    var i = Date,
      u = i.now()
    e.unstable_now = function () {
      return i.now() - u
    }
  }
  var s = [],
    a = [],
    f = 1,
    c = null,
    m = 3,
    g = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function h(_) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a)
      else if (A.startTime <= _) r(a), (A.sortIndex = A.expirationTime), t(s, A)
      else break
      A = n(a)
    }
  }
  function S(_) {
    if (((v = !1), h(_), !y))
      if (n(s) !== null) (y = !0), ht(k)
      else {
        var A = n(a)
        A !== null && Be(S, A.startTime - _)
      }
  }
  function k(_, A) {
    ;(y = !1), v && ((v = !1), p(N), (N = -1)), (g = !0)
    var j = m
    try {
      for (h(A), c = n(s); c !== null && (!(c.expirationTime > A) || (_ && !ee())); ) {
        var $ = c.callback
        if (typeof $ == 'function') {
          ;(c.callback = null), (m = c.priorityLevel)
          var B = $(c.expirationTime <= A)
          ;(A = e.unstable_now()), typeof B == 'function' ? (c.callback = B) : c === n(s) && r(s), h(A)
        } else r(s)
        c = n(s)
      }
      if (c !== null) var Se = !0
      else {
        var Ae = n(a)
        Ae !== null && Be(S, Ae.startTime - A), (Se = !1)
      }
      return Se
    } finally {
      ;(c = null), (m = j), (g = !1)
    }
  }
  var T = !1,
    P = null,
    N = -1,
    U = 5,
    L = -1
  function ee() {
    return !(e.unstable_now() - L < U)
  }
  function re() {
    if (P !== null) {
      var _ = e.unstable_now()
      L = _
      var A = !0
      try {
        A = P(!0, _)
      } finally {
        A ? ge() : ((T = !1), (P = null))
      }
    } else T = !1
  }
  var ge
  if (typeof d == 'function')
    ge = function () {
      d(re)
    }
  else if (typeof MessageChannel < 'u') {
    var Ut = new MessageChannel(),
      we = Ut.port2
    ;(Ut.port1.onmessage = re),
      (ge = function () {
        we.postMessage(null)
      })
  } else
    ge = function () {
      w(re, 0)
    }
  function ht(_) {
    ;(P = _), T || ((T = !0), ge())
  }
  function Be(_, A) {
    N = w(function () {
      _(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ht(k))
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported')
        : (U = 0 < _ ? Math.floor(1e3 / _) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = m
      }
      var j = m
      m = A
      try {
        return _()
      } finally {
        m = j
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, A) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          _ = 3
      }
      var j = m
      m = _
      try {
        return A()
      } finally {
        m = j
      }
    }),
    (e.unstable_scheduleCallback = function (_, A, j) {
      var $ = e.unstable_now()
      switch ((typeof j == 'object' && j !== null ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? $ + j : $)) : (j = $), _)) {
        case 1:
          var B = -1
          break
        case 2:
          B = 250
          break
        case 5:
          B = 1073741823
          break
        case 4:
          B = 1e4
          break
        default:
          B = 5e3
      }
      return (
        (B = j + B),
        (_ = { id: f++, callback: A, priorityLevel: _, startTime: j, expirationTime: B, sortIndex: -1 }),
        j > $
          ? ((_.sortIndex = j), t(a, _), n(s) === null && _ === n(a) && (v ? (p(N), (N = -1)) : (v = !0), Be(S, j - $)))
          : ((_.sortIndex = B), t(s, _), y || g || ((y = !0), ht(k))),
        _
      )
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (_) {
      var A = m
      return function () {
        var j = m
        m = A
        try {
          return _.apply(this, arguments)
        } finally {
          m = j
        }
      }
    })
})(fc)
cc.exports = fc
var Hp = cc.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dc = x,
  Te = Hp
function C(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var pc = new Set(),
  ir = {}
function en(e, t) {
  kn(e, t), kn(e + 'Capture', t)
}
function kn(e, t) {
  for (ir[e] = t, e = 0; e < t.length; e++) pc.add(t[e])
}
var at = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  ni = Object.prototype.hasOwnProperty,
  Qp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ys = {},
  vs = {}
function Kp(e) {
  return ni.call(vs, e) ? !0 : ni.call(ys, e) ? !1 : Qp.test(e) ? (vs[e] = !0) : ((ys[e] = !0), !1)
}
function Yp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Gp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Yp(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ve(e, t, n, r, o, l, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i)
}
var ae = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ae[e] = new ve(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  ae[t] = new ve(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ae[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ae[e] = new ve(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ae[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ae[e] = new ve(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ae[e] = new ve(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ae[e] = new ve(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ae[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var au = /[\-:]([a-z])/g
function cu(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(au, cu)
    ae[t] = new ve(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(au, cu)
  ae[t] = new ve(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(au, cu)
  ae[t] = new ve(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ae.xlinkHref = new ve('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ae[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function fu(e, t, n, r) {
  var o = ae.hasOwnProperty(t) ? ae[t] : null
  ;(o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Gp(t, n, o, r) && (n = null),
    r || o === null
      ? Kp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type), (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pt = dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $r = Symbol.for('react.element'),
  ln = Symbol.for('react.portal'),
  un = Symbol.for('react.fragment'),
  du = Symbol.for('react.strict_mode'),
  ri = Symbol.for('react.profiler'),
  hc = Symbol.for('react.provider'),
  mc = Symbol.for('react.context'),
  pu = Symbol.for('react.forward_ref'),
  oi = Symbol.for('react.suspense'),
  li = Symbol.for('react.suspense_list'),
  hu = Symbol.for('react.memo'),
  vt = Symbol.for('react.lazy'),
  yc = Symbol.for('react.offscreen'),
  gs = Symbol.iterator
function Dn(e) {
  return e === null || typeof e != 'object' ? null : ((e = (gs && e[gs]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var G = Object.assign,
  El
function Yn(e) {
  if (El === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      El = (t && t[1]) || ''
    }
  return (
    `
` +
    El +
    e
  )
}
var xl = !1
function Cl(e, t) {
  if (!e || xl) return ''
  xl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (a) {
          var r = a
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (a) {
          r = a
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (a) {
        r = a
      }
      e()
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];

      )
        u--
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u])) {
                var s =
                  `
` + o[i].replace(' at new ', ' at ')
                return e.displayName && s.includes('<anonymous>') && (s = s.replace('<anonymous>', e.displayName)), s
              }
            while (1 <= i && 0 <= u)
          break
        }
    }
  } finally {
    ;(xl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Yn(e) : ''
}
function Xp(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type)
    case 16:
      return Yn('Lazy')
    case 13:
      return Yn('Suspense')
    case 19:
      return Yn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e
    case 11:
      return (e = Cl(e.type.render, !1)), e
    case 1:
      return (e = Cl(e.type, !0)), e
    default:
      return ''
  }
}
function ii(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case un:
      return 'Fragment'
    case ln:
      return 'Portal'
    case ri:
      return 'Profiler'
    case du:
      return 'StrictMode'
    case oi:
      return 'Suspense'
    case li:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case mc:
        return (e.displayName || 'Context') + '.Consumer'
      case hc:
        return (e._context.displayName || 'Context') + '.Provider'
      case pu:
        var t = e.render
        return (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e
      case hu:
        return (t = e.displayName || null), t !== null ? t : ii(e.type) || 'Memo'
      case vt:
        ;(t = e._payload), (e = e._init)
        try {
          return ii(e(t))
        } catch {}
    }
  return null
}
function Jp(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ii(t)
    case 8:
      return t === du ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function zt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function vc(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function qp(e) {
  var t = vc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      l = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (i) {
          ;(r = '' + i), l.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = '' + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Br(e) {
  e._valueTracker || (e._valueTracker = qp(e))
}
function gc(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return e && (r = vc(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function Eo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function ui(e, t) {
  var n = t.checked
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked })
}
function ws(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function wc(e, t) {
  ;(t = t.checked), t != null && fu(e, 'checked', t, !1)
}
function si(e, t) {
  wc(e, t)
  var n = zt(t.value),
    r = t.type
  if (n != null)
    r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value') ? ai(e, t.type, n) : t.hasOwnProperty('defaultValue') && ai(e, t.type, zt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ss(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
  }
  ;(n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n)
}
function ai(e, t, n) {
  ;(t !== 'number' || Eo(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Gn = Array.isArray
function gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + zt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91))
  return G({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function Es(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92))
      if (Gn(n)) {
        if (1 < n.length) throw Error(C(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: zt(n) }
}
function Sc(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue)
  n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function xs(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Ec(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function fi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ec(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Wr,
  xc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        Wr = Wr || document.createElement('div'), Wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = Wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function ur(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var qn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zp = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(qn).forEach(function (e) {
  Zp.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e])
  })
})
function Cc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (qn.hasOwnProperty(e) && qn[e])
      ? ('' + t).trim()
      : t + 'px'
}
function kc(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Cc(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var bp = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function di(e, t) {
  if (t) {
    if (bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(C(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62))
  }
}
function pi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var hi = null
function mu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var mi = null,
  wn = null,
  Sn = null
function Cs(e) {
  if ((e = Ar(e))) {
    if (typeof mi != 'function') throw Error(C(280))
    var t = e.stateNode
    t && ((t = tl(t)), mi(e.stateNode, e.type, t))
  }
}
function _c(e) {
  wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e)
}
function Pc() {
  if (wn) {
    var e = wn,
      t = Sn
    if (((Sn = wn = null), Cs(e), t)) for (e = 0; e < t.length; e++) Cs(t[e])
  }
}
function Rc(e, t) {
  return e(t)
}
function Oc() {}
var kl = !1
function Tc(e, t, n) {
  if (kl) return e(t, n)
  kl = !0
  try {
    return Rc(e, t, n)
  } finally {
    ;(kl = !1), (wn !== null || Sn !== null) && (Oc(), Pc())
  }
}
function sr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = tl(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n))
  return n
}
var yi = !1
if (at)
  try {
    var Un = {}
    Object.defineProperty(Un, 'passive', {
      get: function () {
        yi = !0
      },
    }),
      window.addEventListener('test', Un, Un),
      window.removeEventListener('test', Un, Un)
  } catch {
    yi = !1
  }
function eh(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (f) {
    this.onError(f)
  }
}
var Zn = !1,
  xo = null,
  Co = !1,
  vi = null,
  th = {
    onError: function (e) {
      ;(Zn = !0), (xo = e)
    },
  }
function nh(e, t, n, r, o, l, i, u, s) {
  ;(Zn = !1), (xo = null), eh.apply(th, arguments)
}
function rh(e, t, n, r, o, l, i, u, s) {
  if ((nh.apply(this, arguments), Zn)) {
    if (Zn) {
      var a = xo
      ;(Zn = !1), (xo = null)
    } else throw Error(C(198))
    Co || ((Co = !0), (vi = a))
  }
}
function tn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Nc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
  }
  return null
}
function ks(e) {
  if (tn(e) !== e) throw Error(C(188))
}
function oh(e) {
  var t = e.alternate
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(C(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var l = o.alternate
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return ks(o), e
        if (l === r) return ks(o), t
        l = l.sibling
      }
      throw Error(C(188))
    }
    if (n.return !== r.return) (n = o), (r = l)
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          ;(i = !0), (n = o), (r = l)
          break
        }
        if (u === r) {
          ;(i = !0), (r = o), (n = l)
          break
        }
        u = u.sibling
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            ;(i = !0), (n = l), (r = o)
            break
          }
          if (u === r) {
            ;(i = !0), (r = l), (n = o)
            break
          }
          u = u.sibling
        }
        if (!i) throw Error(C(189))
      }
    }
    if (n.alternate !== r) throw Error(C(190))
  }
  if (n.tag !== 3) throw Error(C(188))
  return n.stateNode.current === n ? e : t
}
function Lc(e) {
  return (e = oh(e)), e !== null ? Ac(e) : null
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Ac(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var jc = Te.unstable_scheduleCallback,
  _s = Te.unstable_cancelCallback,
  lh = Te.unstable_shouldYield,
  ih = Te.unstable_requestPaint,
  J = Te.unstable_now,
  uh = Te.unstable_getCurrentPriorityLevel,
  yu = Te.unstable_ImmediatePriority,
  zc = Te.unstable_UserBlockingPriority,
  ko = Te.unstable_NormalPriority,
  sh = Te.unstable_LowPriority,
  Fc = Te.unstable_IdlePriority,
  qo = null,
  et = null
function ah(e) {
  if (et && typeof et.onCommitFiberRoot == 'function')
    try {
      et.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : dh,
  ch = Math.log,
  fh = Math.LN2
function dh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ch(e) / fh) | 0)) | 0
}
var Vr = 64,
  Hr = 4194304
function Xn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function _o(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var u = i & ~o
    u !== 0 ? (r = Xn(u)) : ((l &= i), l !== 0 && (r = Xn(l)))
  } else (i = n & ~o), i !== 0 ? (r = Xn(i)) : l !== 0 && (r = Xn(l))
  if (r === 0) return 0
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))) return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ye(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function ph(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function hh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - Ye(l),
      u = 1 << i,
      s = o[i]
    s === -1 ? (!(u & n) || u & r) && (o[i] = ph(u, t)) : s <= t && (e.expiredLanes |= u), (l &= ~u)
  }
}
function gi(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ic() {
  var e = Vr
  return (Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Nr(e, t, n) {
  ;(e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Ye(t)), (e[t] = n)
}
function mh(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ye(n),
      l = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l)
  }
}
function vu(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var D = 0
function Mc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Dc,
  gu,
  Uc,
  $c,
  Bc,
  wi = !1,
  Qr = [],
  kt = null,
  _t = null,
  Pt = null,
  ar = new Map(),
  cr = new Map(),
  wt = [],
  yh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Ps(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      kt = null
      break
    case 'dragenter':
    case 'dragleave':
      _t = null
      break
    case 'mouseover':
    case 'mouseout':
      Pt = null
      break
    case 'pointerover':
    case 'pointerout':
      ar.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      cr.delete(t.pointerId)
  }
}
function $n(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }),
      t !== null && ((t = Ar(t)), t !== null && gu(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e)
}
function vh(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (kt = $n(kt, e, t, n, r, o)), !0
    case 'dragenter':
      return (_t = $n(_t, e, t, n, r, o)), !0
    case 'mouseover':
      return (Pt = $n(Pt, e, t, n, r, o)), !0
    case 'pointerover':
      var l = o.pointerId
      return ar.set(l, $n(ar.get(l) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (l = o.pointerId), cr.set(l, $n(cr.get(l) || null, e, t, n, r, o)), !0
  }
  return !1
}
function Wc(e) {
  var t = Ht(e.target)
  if (t !== null) {
    var n = tn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Nc(n)), t !== null)) {
          ;(e.blockedOn = t),
            Bc(e.priority, function () {
              Uc(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function lo(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Si(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(hi = r), n.target.dispatchEvent(r), (hi = null)
    } else return (t = Ar(n)), t !== null && gu(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Rs(e, t, n) {
  lo(e) && n.delete(t)
}
function gh() {
  ;(wi = !1),
    kt !== null && lo(kt) && (kt = null),
    _t !== null && lo(_t) && (_t = null),
    Pt !== null && lo(Pt) && (Pt = null),
    ar.forEach(Rs),
    cr.forEach(Rs)
}
function Bn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), wi || ((wi = !0), Te.unstable_scheduleCallback(Te.unstable_NormalPriority, gh)))
}
function fr(e) {
  function t(o) {
    return Bn(o, e)
  }
  if (0 < Qr.length) {
    Bn(Qr[0], e)
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    kt !== null && Bn(kt, e), _t !== null && Bn(_t, e), Pt !== null && Bn(Pt, e), ar.forEach(t), cr.forEach(t), n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); ) Wc(n), n.blockedOn === null && wt.shift()
}
var En = pt.ReactCurrentBatchConfig,
  Po = !0
function wh(e, t, n, r) {
  var o = D,
    l = En.transition
  En.transition = null
  try {
    ;(D = 1), wu(e, t, n, r)
  } finally {
    ;(D = o), (En.transition = l)
  }
}
function Sh(e, t, n, r) {
  var o = D,
    l = En.transition
  En.transition = null
  try {
    ;(D = 4), wu(e, t, n, r)
  } finally {
    ;(D = o), (En.transition = l)
  }
}
function wu(e, t, n, r) {
  if (Po) {
    var o = Si(e, t, n, r)
    if (o === null) Fl(e, t, r, Ro, n), Ps(e, r)
    else if (vh(o, e, t, n, r)) r.stopPropagation()
    else if ((Ps(e, r), t & 4 && -1 < yh.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ar(o)
        if ((l !== null && Dc(l), (l = Si(e, t, n, r)), l === null && Fl(e, t, r, Ro, n), l === o)) break
        o = l
      }
      o !== null && r.stopPropagation()
    } else Fl(e, t, r, null, n)
  }
}
var Ro = null
function Si(e, t, n, r) {
  if (((Ro = null), (e = mu(r)), (e = Ht(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Nc(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Ro = e), null
}
function Vc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (uh()) {
        case yu:
          return 1
        case zc:
          return 4
        case ko:
        case sh:
          return 16
        case Fc:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Et = null,
  Su = null,
  io = null
function Hc() {
  if (io) return io
  var e,
    t = Su,
    n = t.length,
    r,
    o = 'value' in Et ? Et.value : Et.textContent,
    l = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (io = o.slice(e, 1 < r ? 1 - r : void 0))
}
function uo(e) {
  var t = e.keyCode
  return 'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}
function Kr() {
  return !0
}
function Os() {
  return !1
}
function Le(e) {
  function t(n, r, o, l, i) {
    ;(this._reactName = n), (this._targetInst = o), (this.type = r), (this.nativeEvent = l), (this.target = i), (this.currentTarget = null)
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]))
    return (
      (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Kr : Os),
      (this.isPropagationStopped = Os),
      this
    )
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Kr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kr))
      },
      persist: function () {},
      isPersistent: Kr,
    }),
    t
  )
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Eu = Le(jn),
  Lr = G({}, jn, { view: 0, detail: 0 }),
  Eh = Le(Lr),
  Pl,
  Rl,
  Wn,
  Zo = G({}, Lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Wn &&
            (Wn && e.type === 'mousemove' ? ((Pl = e.screenX - Wn.screenX), (Rl = e.screenY - Wn.screenY)) : (Rl = Pl = 0), (Wn = e)),
          Pl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Rl
    },
  }),
  Ts = Le(Zo),
  xh = G({}, Zo, { dataTransfer: 0 }),
  Ch = Le(xh),
  kh = G({}, Lr, { relatedTarget: 0 }),
  Ol = Le(kh),
  _h = G({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ph = Le(_h),
  Rh = G({}, jn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Oh = Le(Rh),
  Th = G({}, jn, { data: 0 }),
  Ns = Le(Th),
  Nh = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Lh = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ah = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function jh(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Ah[e]) ? !!t[e] : !1
}
function xu() {
  return jh
}
var zh = G({}, Lr, {
    key: function (e) {
      if (e.key) {
        var t = Nh[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = uo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Lh[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xu,
    charCode: function (e) {
      return e.type === 'keypress' ? uo(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress' ? uo(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
  }),
  Fh = Le(zh),
  Ih = G({}, Zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ls = Le(Ih),
  Mh = G({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xu }),
  Dh = Le(Mh),
  Uh = G({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $h = Le(Uh),
  Bh = G({}, Zo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Wh = Le(Bh),
  Vh = [9, 13, 27, 32],
  Cu = at && 'CompositionEvent' in window,
  bn = null
at && 'documentMode' in document && (bn = document.documentMode)
var Hh = at && 'TextEvent' in window && !bn,
  Qc = at && (!Cu || (bn && 8 < bn && 11 >= bn)),
  As = ' ',
  js = !1
function Kc(e, t) {
  switch (e) {
    case 'keyup':
      return Vh.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Yc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var sn = !1
function Qh(e, t) {
  switch (e) {
    case 'compositionend':
      return Yc(t)
    case 'keypress':
      return t.which !== 32 ? null : ((js = !0), As)
    case 'textInput':
      return (e = t.data), e === As && js ? null : e
    default:
      return null
  }
}
function Kh(e, t) {
  if (sn) return e === 'compositionend' || (!Cu && Kc(e, t)) ? ((e = Hc()), (io = Su = Et = null), (sn = !1), e) : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Qc && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Yh = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Yh[e.type] : t === 'textarea'
}
function Gc(e, t, n, r) {
  _c(r), (t = Oo(t, 'onChange')), 0 < t.length && ((n = new Eu('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var er = null,
  dr = null
function Gh(e) {
  lf(e, 0)
}
function bo(e) {
  var t = fn(e)
  if (gc(t)) return e
}
function Xh(e, t) {
  if (e === 'change') return t
}
var Xc = !1
if (at) {
  var Tl
  if (at) {
    var Nl = 'oninput' in document
    if (!Nl) {
      var Fs = document.createElement('div')
      Fs.setAttribute('oninput', 'return;'), (Nl = typeof Fs.oninput == 'function')
    }
    Tl = Nl
  } else Tl = !1
  Xc = Tl && (!document.documentMode || 9 < document.documentMode)
}
function Is() {
  er && (er.detachEvent('onpropertychange', Jc), (dr = er = null))
}
function Jc(e) {
  if (e.propertyName === 'value' && bo(dr)) {
    var t = []
    Gc(t, dr, e, mu(e)), Tc(Gh, t)
  }
}
function Jh(e, t, n) {
  e === 'focusin' ? (Is(), (er = t), (dr = n), er.attachEvent('onpropertychange', Jc)) : e === 'focusout' && Is()
}
function qh(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bo(dr)
}
function Zh(e, t) {
  if (e === 'click') return bo(t)
}
function bh(e, t) {
  if (e === 'input' || e === 'change') return bo(t)
}
function em(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Xe = typeof Object.is == 'function' ? Object.is : em
function pr(e, t) {
  if (Xe(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!ni.call(t, o) || !Xe(e[o], t[o])) return !1
  }
  return !0
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Ds(e, t) {
  var n = Ms(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Ms(n)
  }
}
function qc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qc(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function Zc() {
  for (var e = window, t = Eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Eo(e.document)
  }
  return t
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function tm(e) {
  var t = Zc(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && qc(n.ownerDocument.documentElement, n)) {
    if (r !== null && ku(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection()
        var o = n.textContent.length,
          l = Math.min(r.start, o)
        ;(r = r.end === void 0 ? l : Math.min(r.end, o)), !e.extend && l > r && ((o = r), (r = l), (l = o)), (o = Ds(n, l))
        var i = Ds(n, r)
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var nm = at && 'documentMode' in document && 11 >= document.documentMode,
  an = null,
  Ei = null,
  tr = null,
  xi = !1
function Us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  xi ||
    an == null ||
    an !== Eo(r) ||
    ((r = an),
    'selectionStart' in r && ku(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (tr && pr(tr, r)) ||
      ((tr = r),
      (r = Oo(Ei, 'onSelect')),
      0 < r.length && ((t = new Eu('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = an))))
}
function Yr(e, t) {
  var n = {}
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
}
var cn = {
    animationend: Yr('Animation', 'AnimationEnd'),
    animationiteration: Yr('Animation', 'AnimationIteration'),
    animationstart: Yr('Animation', 'AnimationStart'),
    transitionend: Yr('Transition', 'TransitionEnd'),
  },
  Ll = {},
  bc = {}
at &&
  ((bc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cn.animationend.animation, delete cn.animationiteration.animation, delete cn.animationstart.animation),
  'TransitionEvent' in window || delete cn.transitionend.transition)
function el(e) {
  if (Ll[e]) return Ll[e]
  if (!cn[e]) return e
  var t = cn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return (Ll[e] = t[n])
  return e
}
var ef = el('animationend'),
  tf = el('animationiteration'),
  nf = el('animationstart'),
  rf = el('transitionend'),
  of = new Map(),
  $s =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function It(e, t) {
  of.set(e, t), en(t, [e])
}
for (var Al = 0; Al < $s.length; Al++) {
  var jl = $s[Al],
    rm = jl.toLowerCase(),
    om = jl[0].toUpperCase() + jl.slice(1)
  It(rm, 'on' + om)
}
It(ef, 'onAnimationEnd')
It(tf, 'onAnimationIteration')
It(nf, 'onAnimationStart')
It('dblclick', 'onDoubleClick')
It('focusin', 'onFocus')
It('focusout', 'onBlur')
It(rf, 'onTransitionEnd')
kn('onMouseEnter', ['mouseout', 'mouseover'])
kn('onMouseLeave', ['mouseout', 'mouseover'])
kn('onPointerEnter', ['pointerout', 'pointerover'])
kn('onPointerLeave', ['pointerout', 'pointerover'])
en('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
en('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
en('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
en('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
en('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
en('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var Jn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  lm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jn))
function Bs(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), rh(r, t, void 0, e), (e.currentTarget = null)
}
function lf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var l = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget
          if (((u = u.listener), s !== l && o.isPropagationStopped())) break e
          Bs(o, u, a), (l = s)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (((u = r[i]), (s = u.instance), (a = u.currentTarget), (u = u.listener), s !== l && o.isPropagationStopped())) break e
          Bs(o, u, a), (l = s)
        }
    }
  }
  if (Co) throw ((e = vi), (Co = !1), (vi = null), e)
}
function V(e, t) {
  var n = t[Ri]
  n === void 0 && (n = t[Ri] = new Set())
  var r = e + '__bubble'
  n.has(r) || (uf(t, e, 2, !1), n.add(r))
}
function zl(e, t, n) {
  var r = 0
  t && (r |= 4), uf(n, e, r, t)
}
var Gr = '_reactListening' + Math.random().toString(36).slice(2)
function hr(e) {
  if (!e[Gr]) {
    ;(e[Gr] = !0),
      pc.forEach(function (n) {
        n !== 'selectionchange' && (lm.has(n) || zl(n, !1, e), zl(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Gr] || ((t[Gr] = !0), zl('selectionchange', !1, t))
  }
}
function uf(e, t, n, r) {
  switch (Vc(t)) {
    case 1:
      var o = wh
      break
    case 4:
      o = Sh
      break
    default:
      o = wu
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !yi || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function Fl(e, t, n, r, o) {
  var l = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag
            if ((s === 3 || s === 4) && ((s = i.stateNode.containerInfo), s === o || (s.nodeType === 8 && s.parentNode === o))) return
            i = i.return
          }
        for (; u !== null; ) {
          if (((i = Ht(u)), i === null)) return
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Tc(function () {
    var a = l,
      f = mu(n),
      c = []
    e: {
      var m = of.get(e)
      if (m !== void 0) {
        var g = Eu,
          y = e
        switch (e) {
          case 'keypress':
            if (uo(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = Fh
            break
          case 'focusin':
            ;(y = 'focus'), (g = Ol)
            break
          case 'focusout':
            ;(y = 'blur'), (g = Ol)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Ol
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Ts
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Ch
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Dh
            break
          case ef:
          case tf:
          case nf:
            g = Ph
            break
          case rf:
            g = $h
            break
          case 'scroll':
            g = Eh
            break
          case 'wheel':
            g = Wh
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Oh
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Ls
        }
        var v = (t & 4) !== 0,
          w = !v && e === 'scroll',
          p = v ? (m !== null ? m + 'Capture' : null) : m
        v = []
        for (var d = a, h; d !== null; ) {
          h = d
          var S = h.stateNode
          if ((h.tag === 5 && S !== null && ((h = S), p !== null && ((S = sr(d, p)), S != null && v.push(mr(d, S, h)))), w)) break
          d = d.return
        }
        0 < v.length && ((m = new g(m, y, null, n, f)), c.push({ event: m, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          m && n !== hi && (y = n.relatedTarget || n.fromElement) && (Ht(y) || y[ct]))
        )
          break e
        if (
          (g || m) &&
          ((m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? Ht(y) : null),
              y !== null && ((w = tn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) && (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((v = Ts),
            (S = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') && ((v = Ls), (S = 'onPointerLeave'), (p = 'onPointerEnter'), (d = 'pointer')),
            (w = g == null ? m : fn(g)),
            (h = y == null ? m : fn(y)),
            (m = new v(S, d + 'leave', g, n, f)),
            (m.target = w),
            (m.relatedTarget = h),
            (S = null),
            Ht(f) === a && ((v = new v(p, d + 'enter', y, n, f)), (v.target = h), (v.relatedTarget = w), (S = v)),
            (w = S),
            g && y)
          )
            t: {
              for (v = g, p = y, d = 0, h = v; h; h = on(h)) d++
              for (h = 0, S = p; S; S = on(S)) h++
              for (; 0 < d - h; ) (v = on(v)), d--
              for (; 0 < h - d; ) (p = on(p)), h--
              for (; d--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t
                ;(v = on(v)), (p = on(p))
              }
              v = null
            }
          else v = null
          g !== null && Ws(c, m, g, v, !1), y !== null && w !== null && Ws(c, w, y, v, !0)
        }
      }
      e: {
        if (
          ((m = a ? fn(a) : window), (g = m.nodeName && m.nodeName.toLowerCase()), g === 'select' || (g === 'input' && m.type === 'file'))
        )
          var k = Xh
        else if (zs(m))
          if (Xc) k = bh
          else {
            k = qh
            var T = Jh
          }
        else (g = m.nodeName) && g.toLowerCase() === 'input' && (m.type === 'checkbox' || m.type === 'radio') && (k = Zh)
        if (k && (k = k(e, a))) {
          Gc(c, k, n, f)
          break e
        }
        T && T(e, m, a), e === 'focusout' && (T = m._wrapperState) && T.controlled && m.type === 'number' && ai(m, 'number', m.value)
      }
      switch (((T = a ? fn(a) : window), e)) {
        case 'focusin':
          ;(zs(T) || T.contentEditable === 'true') && ((an = T), (Ei = a), (tr = null))
          break
        case 'focusout':
          tr = Ei = an = null
          break
        case 'mousedown':
          xi = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(xi = !1), Us(c, n, f)
          break
        case 'selectionchange':
          if (nm) break
        case 'keydown':
        case 'keyup':
          Us(c, n, f)
      }
      var P
      if (Cu)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart'
              break e
            case 'compositionend':
              N = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              N = 'onCompositionUpdate'
              break e
          }
          N = void 0
        }
      else sn ? Kc(e, n) && (N = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart')
      N &&
        (Qc &&
          n.locale !== 'ko' &&
          (sn || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && sn && (P = Hc())
            : ((Et = f), (Su = 'value' in Et ? Et.value : Et.textContent), (sn = !0))),
        (T = Oo(a, N)),
        0 < T.length &&
          ((N = new Ns(N, e, null, n, f)),
          c.push({ event: N, listeners: T }),
          P ? (N.data = P) : ((P = Yc(n)), P !== null && (N.data = P)))),
        (P = Hh ? Qh(e, n) : Kh(e, n)) &&
          ((a = Oo(a, 'onBeforeInput')),
          0 < a.length && ((f = new Ns('onBeforeInput', 'beforeinput', null, n, f)), c.push({ event: f, listeners: a }), (f.data = P)))
    }
    lf(c, t)
  })
}
function mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Oo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      l = o.stateNode
    o.tag === 5 &&
      l !== null &&
      ((o = l), (l = sr(e, n)), l != null && r.unshift(mr(e, l, o)), (l = sr(e, t)), l != null && r.push(mr(e, l, o))),
      (e = e.return)
  }
  return r
}
function on(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Ws(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      a !== null &&
      ((u = a), o ? ((s = sr(n, l)), s != null && i.unshift(mr(n, s, u))) : o || ((s = sr(n, l)), s != null && i.push(mr(n, s, u)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var im = /\r\n?/g,
  um = /\u0000|\uFFFD/g
function Vs(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      im,
      `
`,
    )
    .replace(um, '')
}
function Xr(e, t, n) {
  if (((t = Vs(t)), Vs(e) !== t && n)) throw Error(C(425))
}
function To() {}
var Ci = null,
  ki = null
function _i(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  )
}
var Pi = typeof setTimeout == 'function' ? setTimeout : void 0,
  sm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hs = typeof Promise == 'function' ? Promise : void 0,
  am =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hs < 'u'
        ? function (e) {
            return Hs.resolve(null).then(e).catch(cm)
          }
        : Pi
function cm(e) {
  setTimeout(function () {
    throw e
  })
}
function Il(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), fr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  fr(t)
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Qs(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var zn = Math.random().toString(36).slice(2),
  Ze = '__reactFiber$' + zn,
  yr = '__reactProps$' + zn,
  ct = '__reactContainer$' + zn,
  Ri = '__reactEvents$' + zn,
  fm = '__reactListeners$' + zn,
  dm = '__reactHandles$' + zn
function Ht(e) {
  var t = e[Ze]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[ct] || n[Ze])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Qs(e); e !== null; ) {
          if ((n = e[Ze])) return n
          e = Qs(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Ar(e) {
  return (e = e[Ze] || e[ct]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(C(33))
}
function tl(e) {
  return e[yr] || null
}
var Oi = [],
  dn = -1
function Mt(e) {
  return { current: e }
}
function H(e) {
  0 > dn || ((e.current = Oi[dn]), (Oi[dn] = null), dn--)
}
function W(e, t) {
  dn++, (Oi[dn] = e.current), (e.current = t)
}
var Ft = {},
  pe = Mt(Ft),
  Ce = Mt(!1),
  Xt = Ft
function _n(e, t) {
  var n = e.type.contextTypes
  if (!n) return Ft
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    l
  for (l in n) o[l] = t[l]
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o
}
function ke(e) {
  return (e = e.childContextTypes), e != null
}
function No() {
  H(Ce), H(pe)
}
function Ks(e, t, n) {
  if (pe.current !== Ft) throw Error(C(168))
  W(pe, t), W(Ce, n)
}
function sf(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(C(108, Jp(e) || 'Unknown', o))
  return G({}, n, r)
}
function Lo(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft), (Xt = pe.current), W(pe, e), W(Ce, Ce.current), !0
}
function Ys(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(C(169))
  n ? ((e = sf(e, t, Xt)), (r.__reactInternalMemoizedMergedChildContext = e), H(Ce), H(pe), W(pe, e)) : H(Ce), W(Ce, n)
}
var ot = null,
  nl = !1,
  Ml = !1
function af(e) {
  ot === null ? (ot = [e]) : ot.push(e)
}
function pm(e) {
  ;(nl = !0), af(e)
}
function Dt() {
  if (!Ml && ot !== null) {
    Ml = !0
    var e = 0,
      t = D
    try {
      var n = ot
      for (D = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(ot = null), (nl = !1)
    } catch (o) {
      throw (ot !== null && (ot = ot.slice(e + 1)), jc(yu, Dt), o)
    } finally {
      ;(D = t), (Ml = !1)
    }
  }
  return null
}
var pn = [],
  hn = 0,
  Ao = null,
  jo = 0,
  ze = [],
  Fe = 0,
  Jt = null,
  lt = 1,
  it = ''
function Wt(e, t) {
  ;(pn[hn++] = jo), (pn[hn++] = Ao), (Ao = e), (jo = t)
}
function cf(e, t, n) {
  ;(ze[Fe++] = lt), (ze[Fe++] = it), (ze[Fe++] = Jt), (Jt = e)
  var r = lt
  e = it
  var o = 32 - Ye(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var l = 32 - Ye(t) + o
  if (30 < l) {
    var i = o - (o % 5)
    ;(l = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (o -= i), (lt = (1 << (32 - Ye(t) + o)) | (n << o) | r), (it = l + e)
  } else (lt = (1 << l) | (n << o) | r), (it = e)
}
function _u(e) {
  e.return !== null && (Wt(e, 1), cf(e, 1, 0))
}
function Pu(e) {
  for (; e === Ao; ) (Ao = pn[--hn]), (pn[hn] = null), (jo = pn[--hn]), (pn[hn] = null)
  for (; e === Jt; ) (Jt = ze[--Fe]), (ze[Fe] = null), (it = ze[--Fe]), (ze[Fe] = null), (lt = ze[--Fe]), (ze[Fe] = null)
}
var Oe = null,
  Re = null,
  Q = !1,
  Ke = null
function ff(e, t) {
  var n = Ie(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Gs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Re = Rt(t.firstChild)), !0) : !1
      )
    case 6:
      return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Oe = e), (Re = null), !0) : !1
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: lt, overflow: it } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Re = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ti(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ni(e) {
  if (Q) {
    var t = Re
    if (t) {
      var n = t
      if (!Gs(e, t)) {
        if (Ti(e)) throw Error(C(418))
        t = Rt(n.nextSibling)
        var r = Oe
        t && Gs(e, t) ? ff(r, n) : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Oe = e))
      }
    } else {
      if (Ti(e)) throw Error(C(418))
      ;(e.flags = (e.flags & -4097) | 2), (Q = !1), (Oe = e)
    }
  }
}
function Xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Oe = e
}
function Jr(e) {
  if (e !== Oe) return !1
  if (!Q) return Xs(e), (Q = !0), !1
  var t
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !_i(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (Ti(e)) throw (df(), Error(C(418)))
    for (; t; ) ff(e, t), (t = Rt(t.nextSibling))
  }
  if ((Xs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(C(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Re = Rt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Re = null
    }
  } else Re = Oe ? Rt(e.stateNode.nextSibling) : null
  return !0
}
function df() {
  for (var e = Re; e; ) e = Rt(e.nextSibling)
}
function Pn() {
  ;(Re = Oe = null), (Q = !1)
}
function Ru(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e)
}
var hm = pt.ReactCurrentBatchConfig
function He(e, t) {
  if (e && e.defaultProps) {
    ;(t = G({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var zo = Mt(null),
  Fo = null,
  mn = null,
  Ou = null
function Tu() {
  Ou = mn = Fo = null
}
function Nu(e) {
  var t = zo.current
  H(zo), (e._currentValue = t)
}
function Li(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function xn(e, t) {
  ;(Fo = e),
    (Ou = mn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), (e.firstContext = null))
}
function Ue(e) {
  var t = e._currentValue
  if (Ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
      if (Fo === null) throw Error(C(308))
      ;(mn = e), (Fo.dependencies = { lanes: 0, firstContext: e })
    } else mn = mn.next = e
  return t
}
var Qt = null
function Lu(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e)
}
function pf(e, t, n, r) {
  var o = t.interleaved
  return o === null ? ((n.next = n), Lu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), ft(e, r)
}
function ft(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var gt = !1
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function hf(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Ot(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), M & 2)) {
    var o = r.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), ft(e, n)
  }
  return (o = r.interleaved), o === null ? ((t.next = t), Lu(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), ft(e, n)
}
function so(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n)
  }
}
function Js(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null }
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next)
      } while (n !== null)
      l === null ? (o = l = t) : (l = l.next = t)
    } else o = l = t
    ;(n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }), (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function Io(e, t, n, r) {
  var o = e.updateQueue
  gt = !1
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    u = o.shared.pending
  if (u !== null) {
    o.shared.pending = null
    var s = u,
      a = s.next
    ;(s.next = null), i === null ? (l = a) : (i.next = a), (i = s)
    var f = e.alternate
    f !== null &&
      ((f = f.updateQueue),
      (u = f.lastBaseUpdate),
      u !== i && (u === null ? (f.firstBaseUpdate = a) : (u.next = a), (f.lastBaseUpdate = s)))
  }
  if (l !== null) {
    var c = o.baseState
    ;(i = 0), (f = a = s = null), (u = l)
    do {
      var m = u.lane,
        g = u.eventTime
      if ((r & m) === m) {
        f !== null && (f = f.next = { eventTime: g, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null })
        e: {
          var y = e,
            v = u
          switch (((m = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                c = y.call(g, c, m)
                break e
              }
              c = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (((y = v.payload), (m = typeof y == 'function' ? y.call(g, c, m) : y), m == null)) break e
              c = G({}, c, m)
              break e
            case 2:
              gt = !0
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [u]) : m.push(u))
      } else
        (g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
          f === null ? ((a = f = g), (s = c)) : (f = f.next = g),
          (i |= m)
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break
        ;(m = u), (u = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null)
      }
    } while (!0)
    if (
      (f === null && (s = c), (o.baseState = s), (o.firstBaseUpdate = a), (o.lastBaseUpdate = f), (t = o.shared.interleaved), t !== null)
    ) {
      o = t
      do (i |= o.lane), (o = o.next)
      while (o !== t)
    } else l === null && (o.shared.lanes = 0)
    ;(Zt |= i), (e.lanes = i), (e.memoizedState = c)
  }
}
function qs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(C(191, o))
        o.call(r)
      }
    }
}
var mf = new dc.Component().refs
function Ai(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = me(),
      o = Nt(e),
      l = ut(r, o)
    ;(l.payload = t), n != null && (l.callback = n), (t = Ot(e, l, o)), t !== null && (Ge(t, e, o, r), so(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = me(),
      o = Nt(e),
      l = ut(r, o)
    ;(l.tag = 1), (l.payload = t), n != null && (l.callback = n), (t = Ot(e, l, o)), t !== null && (Ge(t, e, o, r), so(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = me(),
      r = Nt(e),
      o = ut(n, r)
    ;(o.tag = 2), t != null && (o.callback = t), (t = Ot(e, o, r)), t !== null && (Ge(t, e, r, n), so(t, e, r))
  },
}
function Zs(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, r) || !pr(o, l)
        : !0
  )
}
function yf(e, t, n) {
  var r = !1,
    o = Ft,
    l = t.contextType
  return (
    typeof l == 'object' && l !== null
      ? (l = Ue(l))
      : ((o = ke(t) ? Xt : pe.current), (r = t.contextTypes), (l = (r = r != null) ? _n(e, o) : Ft)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  )
}
function bs(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rl.enqueueReplaceState(t, t.state, null)
}
function ji(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = mf), Au(e)
  var l = t.contextType
  typeof l == 'object' && l !== null ? (o.context = Ue(l)) : ((l = ke(t) ? Xt : pe.current), (o.context = _n(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == 'function' && (Ai(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && rl.enqueueReplaceState(o, o.state, null),
      Io(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Vn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309))
        var r = n.stateNode
      }
      if (!r) throw Error(C(147, e))
      var o = r,
        l = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var u = o.refs
            u === mf && (u = o.refs = {}), i === null ? delete u[l] : (u[l] = i)
          }),
          (t._stringRef = l),
          t)
    }
    if (typeof e != 'string') throw Error(C(284))
    if (!n._owner) throw Error(C(290, e))
  }
  return e
}
function qr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(C(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  )
}
function ea(e) {
  var t = e._init
  return t(e._payload)
}
function vf(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d)
    }
  }
  function n(p, d) {
    if (!e) return null
    for (; d !== null; ) t(p, d), (d = d.sibling)
    return null
  }
  function r(p, d) {
    for (p = new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling)
    return p
  }
  function o(p, d) {
    return (p = Lt(p, d)), (p.index = 0), (p.sibling = null), p
  }
  function l(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate), h !== null ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h) : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    )
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function u(p, d, h, S) {
    return d === null || d.tag !== 6 ? ((d = Hl(h, p.mode, S)), (d.return = p), d) : ((d = o(d, h)), (d.return = p), d)
  }
  function s(p, d, h, S) {
    var k = h.type
    return k === un
      ? f(p, d, h.props.children, S, h.key)
      : d !== null && (d.elementType === k || (typeof k == 'object' && k !== null && k.$$typeof === vt && ea(k) === d.type))
        ? ((S = o(d, h.props)), (S.ref = Vn(p, d, h)), (S.return = p), S)
        : ((S = mo(h.type, h.key, h.props, null, p.mode, S)), (S.ref = Vn(p, d, h)), (S.return = p), S)
  }
  function a(p, d, h, S) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation
      ? ((d = Ql(h, p.mode, S)), (d.return = p), d)
      : ((d = o(d, h.children || [])), (d.return = p), d)
  }
  function f(p, d, h, S, k) {
    return d === null || d.tag !== 7 ? ((d = Gt(h, p.mode, S, k)), (d.return = p), d) : ((d = o(d, h)), (d.return = p), d)
  }
  function c(p, d, h) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number') return (d = Hl('' + d, p.mode, h)), (d.return = p), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case $r:
          return (h = mo(d.type, d.key, d.props, null, p.mode, h)), (h.ref = Vn(p, null, d)), (h.return = p), h
        case ln:
          return (d = Ql(d, p.mode, h)), (d.return = p), d
        case vt:
          var S = d._init
          return c(p, S(d._payload), h)
      }
      if (Gn(d) || Dn(d)) return (d = Gt(d, p.mode, h, null)), (d.return = p), d
      qr(p, d)
    }
    return null
  }
  function m(p, d, h, S) {
    var k = d !== null ? d.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number') return k !== null ? null : u(p, d, '' + h, S)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case $r:
          return h.key === k ? s(p, d, h, S) : null
        case ln:
          return h.key === k ? a(p, d, h, S) : null
        case vt:
          return (k = h._init), m(p, d, k(h._payload), S)
      }
      if (Gn(h) || Dn(h)) return k !== null ? null : f(p, d, h, S, null)
      qr(p, h)
    }
    return null
  }
  function g(p, d, h, S, k) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (p = p.get(h) || null), u(d, p, '' + S, k)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case $r:
          return (p = p.get(S.key === null ? h : S.key) || null), s(d, p, S, k)
        case ln:
          return (p = p.get(S.key === null ? h : S.key) || null), a(d, p, S, k)
        case vt:
          var T = S._init
          return g(p, d, h, T(S._payload), k)
      }
      if (Gn(S) || Dn(S)) return (p = p.get(h) || null), f(d, p, S, k, null)
      qr(d, S)
    }
    return null
  }
  function y(p, d, h, S) {
    for (var k = null, T = null, P = d, N = (d = 0), U = null; P !== null && N < h.length; N++) {
      P.index > N ? ((U = P), (P = null)) : (U = P.sibling)
      var L = m(p, P, h[N], S)
      if (L === null) {
        P === null && (P = U)
        break
      }
      e && P && L.alternate === null && t(p, P), (d = l(L, d, N)), T === null ? (k = L) : (T.sibling = L), (T = L), (P = U)
    }
    if (N === h.length) return n(p, P), Q && Wt(p, N), k
    if (P === null) {
      for (; N < h.length; N++) (P = c(p, h[N], S)), P !== null && ((d = l(P, d, N)), T === null ? (k = P) : (T.sibling = P), (T = P))
      return Q && Wt(p, N), k
    }
    for (P = r(p, P); N < h.length; N++)
      (U = g(P, p, N, h[N], S)),
        U !== null &&
          (e && U.alternate !== null && P.delete(U.key === null ? N : U.key),
          (d = l(U, d, N)),
          T === null ? (k = U) : (T.sibling = U),
          (T = U))
    return (
      e &&
        P.forEach(function (ee) {
          return t(p, ee)
        }),
      Q && Wt(p, N),
      k
    )
  }
  function v(p, d, h, S) {
    var k = Dn(h)
    if (typeof k != 'function') throw Error(C(150))
    if (((h = k.call(h)), h == null)) throw Error(C(151))
    for (var T = (k = null), P = d, N = (d = 0), U = null, L = h.next(); P !== null && !L.done; N++, L = h.next()) {
      P.index > N ? ((U = P), (P = null)) : (U = P.sibling)
      var ee = m(p, P, L.value, S)
      if (ee === null) {
        P === null && (P = U)
        break
      }
      e && P && ee.alternate === null && t(p, P), (d = l(ee, d, N)), T === null ? (k = ee) : (T.sibling = ee), (T = ee), (P = U)
    }
    if (L.done) return n(p, P), Q && Wt(p, N), k
    if (P === null) {
      for (; !L.done; N++, L = h.next())
        (L = c(p, L.value, S)), L !== null && ((d = l(L, d, N)), T === null ? (k = L) : (T.sibling = L), (T = L))
      return Q && Wt(p, N), k
    }
    for (P = r(p, P); !L.done; N++, L = h.next())
      (L = g(P, p, N, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? N : L.key),
          (d = l(L, d, N)),
          T === null ? (k = L) : (T.sibling = L),
          (T = L))
    return (
      e &&
        P.forEach(function (re) {
          return t(p, re)
        }),
      Q && Wt(p, N),
      k
    )
  }
  function w(p, d, h, S) {
    if (
      (typeof h == 'object' && h !== null && h.type === un && h.key === null && (h = h.props.children), typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case $r:
          e: {
            for (var k = h.key, T = d; T !== null; ) {
              if (T.key === k) {
                if (((k = h.type), k === un)) {
                  if (T.tag === 7) {
                    n(p, T.sibling), (d = o(T, h.props.children)), (d.return = p), (p = d)
                    break e
                  }
                } else if (T.elementType === k || (typeof k == 'object' && k !== null && k.$$typeof === vt && ea(k) === T.type)) {
                  n(p, T.sibling), (d = o(T, h.props)), (d.ref = Vn(p, T, h)), (d.return = p), (p = d)
                  break e
                }
                n(p, T)
                break
              } else t(p, T)
              T = T.sibling
            }
            h.type === un
              ? ((d = Gt(h.props.children, p.mode, S, h.key)), (d.return = p), (p = d))
              : ((S = mo(h.type, h.key, h.props, null, p.mode, S)), (S.ref = Vn(p, d, h)), (S.return = p), (p = S))
          }
          return i(p)
        case ln:
          e: {
            for (T = h.key; d !== null; ) {
              if (d.key === T)
                if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                  n(p, d.sibling), (d = o(d, h.children || [])), (d.return = p), (p = d)
                  break e
                } else {
                  n(p, d)
                  break
                }
              else t(p, d)
              d = d.sibling
            }
            ;(d = Ql(h, p.mode, S)), (d.return = p), (p = d)
          }
          return i(p)
        case vt:
          return (T = h._init), w(p, d, T(h._payload), S)
      }
      if (Gn(h)) return y(p, d, h, S)
      if (Dn(h)) return v(p, d, h, S)
      qr(p, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = o(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = Hl(h, p.mode, S)), (d.return = p), (p = d)),
        i(p))
      : n(p, d)
  }
  return w
}
var Rn = vf(!0),
  gf = vf(!1),
  jr = {},
  tt = Mt(jr),
  vr = Mt(jr),
  gr = Mt(jr)
function Kt(e) {
  if (e === jr) throw Error(C(174))
  return e
}
function ju(e, t) {
  switch ((W(gr, t), W(vr, e), W(tt, jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fi(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = fi(t, e))
  }
  H(tt), W(tt, t)
}
function On() {
  H(tt), H(vr), H(gr)
}
function wf(e) {
  Kt(gr.current)
  var t = Kt(tt.current),
    n = fi(t, e.type)
  t !== n && (W(vr, e), W(tt, n))
}
function zu(e) {
  vr.current === e && (H(tt), H(vr))
}
var K = Mt(0)
function Mo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Dl = []
function Fu() {
  for (var e = 0; e < Dl.length; e++) Dl[e]._workInProgressVersionPrimary = null
  Dl.length = 0
}
var ao = pt.ReactCurrentDispatcher,
  Ul = pt.ReactCurrentBatchConfig,
  qt = 0,
  Y = null,
  te = null,
  le = null,
  Do = !1,
  nr = !1,
  wr = 0,
  mm = 0
function ce() {
  throw Error(C(321))
}
function Iu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xe(e[n], t[n])) return !1
  return !0
}
function Mu(e, t, n, r, o, l) {
  if (
    ((qt = l),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ao.current = e === null || e.memoizedState === null ? wm : Sm),
    (e = n(r, o)),
    nr)
  ) {
    l = 0
    do {
      if (((nr = !1), (wr = 0), 25 <= l)) throw Error(C(301))
      ;(l += 1), (le = te = null), (t.updateQueue = null), (ao.current = Em), (e = n(r, o))
    } while (nr)
  }
  if (((ao.current = Uo), (t = te !== null && te.next !== null), (qt = 0), (le = te = Y = null), (Do = !1), t)) throw Error(C(300))
  return e
}
function Du() {
  var e = wr !== 0
  return (wr = 0), e
}
function qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le
}
function $e() {
  if (te === null) {
    var e = Y.alternate
    e = e !== null ? e.memoizedState : null
  } else e = te.next
  var t = le === null ? Y.memoizedState : le.next
  if (t !== null) (le = t), (te = e)
  else {
    if (e === null) throw Error(C(310))
    ;(te = e),
      (e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e)
  }
  return le
}
function Sr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function $l(e) {
  var t = $e(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = te,
    o = r.baseQueue,
    l = n.pending
  if (l !== null) {
    if (o !== null) {
      var i = o.next
      ;(o.next = l.next), (l.next = i)
    }
    ;(r.baseQueue = o = l), (n.pending = null)
  }
  if (o !== null) {
    ;(l = o.next), (r = r.baseState)
    var u = (i = null),
      s = null,
      a = l
    do {
      var f = a.lane
      if ((qt & f) === f)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action))
      else {
        var c = { lane: f, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }
        s === null ? ((u = s = c), (i = r)) : (s = s.next = c), (Y.lanes |= f), (Zt |= f)
      }
      a = a.next
    } while (a !== null && a !== l)
    s === null ? (i = r) : (s.next = u),
      Xe(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (l = o.lane), (Y.lanes |= l), (Zt |= l), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Bl(e) {
  var t = $e(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState
  if (o !== null) {
    n.pending = null
    var i = (o = o.next)
    do (l = e(l, i.action)), (i = i.next)
    while (i !== o)
    Xe(l, t.memoizedState) || (xe = !0), (t.memoizedState = l), t.baseQueue === null && (t.baseState = l), (n.lastRenderedState = l)
  }
  return [l, r]
}
function Sf() {}
function Ef(e, t) {
  var n = Y,
    r = $e(),
    o = t(),
    l = !Xe(r.memoizedState, o)
  if (
    (l && ((r.memoizedState = o), (xe = !0)),
    (r = r.queue),
    Uu(kf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Er(9, Cf.bind(null, n, r, o, t), void 0, null), ie === null)) throw Error(C(349))
    qt & 30 || xf(n, t, o)
  }
  return o
}
function xf(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Cf(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), _f(t) && Pf(e)
}
function kf(e, t, n) {
  return n(function () {
    _f(t) && Pf(e)
  })
}
function _f(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Xe(e, n)
  } catch {
    return !0
  }
}
function Pf(e) {
  var t = ft(e, 1)
  t !== null && Ge(t, e, 1, -1)
}
function ta(e) {
  var t = qe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = gm.bind(null, Y, e)),
    [t.memoizedState, e]
  )
}
function Er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Rf() {
  return $e().memoizedState
}
function co(e, t, n, r) {
  var o = qe()
  ;(Y.flags |= e), (o.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r))
}
function ol(e, t, n, r) {
  var o = $e()
  r = r === void 0 ? null : r
  var l = void 0
  if (te !== null) {
    var i = te.memoizedState
    if (((l = i.destroy), r !== null && Iu(r, i.deps))) {
      o.memoizedState = Er(t, n, l, r)
      return
    }
  }
  ;(Y.flags |= e), (o.memoizedState = Er(1 | t, n, l, r))
}
function na(e, t) {
  return co(8390656, 8, e, t)
}
function Uu(e, t) {
  return ol(2048, 8, e, t)
}
function Of(e, t) {
  return ol(4, 2, e, t)
}
function Tf(e, t) {
  return ol(4, 4, e, t)
}
function Nf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Lf(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ol(4, 4, Nf.bind(null, t, e), n)
}
function $u() {}
function Af(e, t) {
  var n = $e()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Iu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function jf(e, t) {
  var n = $e()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Iu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function zf(e, t, n) {
  return qt & 21
    ? (Xe(n, t) || ((n = Ic()), (Y.lanes |= n), (Zt |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n))
}
function ym(e, t) {
  var n = D
  ;(D = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Ul.transition
  Ul.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(D = n), (Ul.transition = r)
  }
}
function Ff() {
  return $e().memoizedState
}
function vm(e, t, n) {
  var r = Nt(e)
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), If(e))) Mf(t, n)
  else if (((n = pf(e, t, n, r)), n !== null)) {
    var o = me()
    Ge(n, e, r, o), Df(n, t, r)
  }
}
function gm(e, t, n) {
  var r = Nt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (If(e)) Mf(t, o)
  else {
    var l = e.alternate
    if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
      try {
        var i = t.lastRenderedState,
          u = l(i, n)
        if (((o.hasEagerState = !0), (o.eagerState = u), Xe(u, i))) {
          var s = t.interleaved
          s === null ? ((o.next = o), Lu(t)) : ((o.next = s.next), (s.next = o)), (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = pf(e, t, o, r)), n !== null && ((o = me()), Ge(n, e, r, o), Df(n, t, r))
  }
}
function If(e) {
  var t = e.alternate
  return e === Y || (t !== null && t === Y)
}
function Mf(e, t) {
  nr = Do = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Df(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n)
  }
}
var Uo = {
    readContext: Ue,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (qe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Ue,
    useEffect: na,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), co(4194308, 4, Nf.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return co(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return co(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = qe()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = qe()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = vm.bind(null, Y, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = qe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: ta,
    useDebugValue: $u,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e)
    },
    useTransition: function () {
      var e = ta(!1),
        t = e[0]
      return (e = ym.bind(null, e[1])), (qe().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        o = qe()
      if (Q) {
        if (n === void 0) throw Error(C(407))
        n = n()
      } else {
        if (((n = t()), ie === null)) throw Error(C(349))
        qt & 30 || xf(r, t, n)
      }
      o.memoizedState = n
      var l = { value: n, getSnapshot: t }
      return (o.queue = l), na(kf.bind(null, r, l, e), [e]), (r.flags |= 2048), Er(9, Cf.bind(null, r, l, n, t), void 0, null), n
    },
    useId: function () {
      var e = qe(),
        t = ie.identifierPrefix
      if (Q) {
        var n = it,
          r = lt
        ;(n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = wr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = mm++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Sm = {
    readContext: Ue,
    useCallback: Af,
    useContext: Ue,
    useEffect: Uu,
    useImperativeHandle: Lf,
    useInsertionEffect: Of,
    useLayoutEffect: Tf,
    useMemo: jf,
    useReducer: $l,
    useRef: Rf,
    useState: function () {
      return $l(Sr)
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = $e()
      return zf(t, te.memoizedState, e)
    },
    useTransition: function () {
      var e = $l(Sr)[0],
        t = $e().memoizedState
      return [e, t]
    },
    useMutableSource: Sf,
    useSyncExternalStore: Ef,
    useId: Ff,
    unstable_isNewReconciler: !1,
  },
  Em = {
    readContext: Ue,
    useCallback: Af,
    useContext: Ue,
    useEffect: Uu,
    useImperativeHandle: Lf,
    useInsertionEffect: Of,
    useLayoutEffect: Tf,
    useMemo: jf,
    useReducer: Bl,
    useRef: Rf,
    useState: function () {
      return Bl(Sr)
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = $e()
      return te === null ? (t.memoizedState = e) : zf(t, te.memoizedState, e)
    },
    useTransition: function () {
      var e = Bl(Sr)[0],
        t = $e().memoizedState
      return [e, t]
    },
    useMutableSource: Sf,
    useSyncExternalStore: Ef,
    useId: Ff,
    unstable_isNewReconciler: !1,
  }
function Tn(e, t) {
  try {
    var n = '',
      r = t
    do (n += Xp(r)), (r = r.return)
    while (r)
    var o = n
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function zi(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var xm = typeof WeakMap == 'function' ? WeakMap : Map
function Uf(e, t, n) {
  ;(n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Bo || ((Bo = !0), (Hi = r)), zi(e, t)
    }),
    n
  )
}
function $f(e, t, n) {
  ;(n = ut(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        zi(e, t)
      })
  }
  var l = e.stateNode
  return (
    l !== null &&
      typeof l.componentDidCatch == 'function' &&
      (n.callback = function () {
        zi(e, t), typeof r != 'function' && (Tt === null ? (Tt = new Set([this])) : Tt.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function ra(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new xm()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = Im.bind(null, e, t, n)), t.then(e, e))
}
function oa(e) {
  do {
    var t
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
    e = e.return
  } while (e !== null)
  return null
}
function la(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = ut(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Cm = pt.ReactCurrentOwner,
  xe = !1
function he(e, t, n, r) {
  t.child = e === null ? gf(t, null, n, r) : Rn(t, e.child, n, r)
}
function ia(e, t, n, r, o) {
  n = n.render
  var l = t.ref
  return (
    xn(t, o),
    (r = Mu(e, t, n, r, l, o)),
    (n = Du()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), dt(e, t, o))
      : (Q && n && _u(t), (t.flags |= 1), he(e, t, r, o), t.child)
  )
}
function ua(e, t, n, r, o) {
  if (e === null) {
    var l = n.type
    return typeof l == 'function' && !Gu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Bf(e, t, l, r, o))
      : ((e = mo(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : pr), n(i, r) && e.ref === t.ref)) return dt(e, t, o)
  }
  return (t.flags |= 1), (e = Lt(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function Bf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps
    if (pr(l, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0)) e.flags & 131072 && (xe = !0)
      else return (t.lanes = e.lanes), dt(e, t, o)
  }
  return Fi(e, t, n, r, o)
}
function Wf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), W(vn, Pe), (Pe |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          W(vn, Pe),
          (Pe |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = l !== null ? l.baseLanes : n), W(vn, Pe), (Pe |= r)
    }
  else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), W(vn, Pe), (Pe |= r)
  return he(e, t, o, n), t.child
}
function Vf(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function Fi(e, t, n, r, o) {
  var l = ke(n) ? Xt : pe.current
  return (
    (l = _n(t, l)),
    xn(t, o),
    (n = Mu(e, t, n, r, l, o)),
    (r = Du()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), dt(e, t, o))
      : (Q && r && _u(t), (t.flags |= 1), he(e, t, n, o), t.child)
  )
}
function sa(e, t, n, r, o) {
  if (ke(n)) {
    var l = !0
    Lo(t)
  } else l = !1
  if ((xn(t, o), t.stateNode === null)) fo(e, t), yf(t, n, r), ji(t, n, r, o), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps
    i.props = u
    var s = i.context,
      a = n.contextType
    typeof a == 'object' && a !== null ? (a = Ue(a)) : ((a = ke(n) ? Xt : pe.current), (a = _n(t, a)))
    var f = n.getDerivedStateFromProps,
      c = typeof f == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && bs(t, i, r, a)),
      (gt = !1)
    var m = t.memoizedState
    ;(i.state = m),
      Io(t, r, i, o),
      (s = t.memoizedState),
      u !== r || m !== s || Ce.current || gt
        ? (typeof f == 'function' && (Ai(t, n, f, r), (s = t.memoizedState)),
          (u = gt || Zs(t, n, u, r, m, s, a))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(i = t.stateNode),
      hf(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : He(t.type, u)),
      (i.props = a),
      (c = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null ? (s = Ue(s)) : ((s = ke(n) ? Xt : pe.current), (s = _n(t, s)))
    var g = n.getDerivedStateFromProps
    ;(f = typeof g == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
      ((u !== c || m !== s) && bs(t, i, r, s)),
      (gt = !1),
      (m = t.memoizedState),
      (i.state = m),
      Io(t, r, i, o)
    var y = t.memoizedState
    u !== c || m !== y || Ce.current || gt
      ? (typeof g == 'function' && (Ai(t, n, g, r), (y = t.memoizedState)),
        (a = gt || Zs(t, n, a, r, m, y, s) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' || (u === e.memoizedProps && m === e.memoizedState) || (t.flags |= 1024),
        (r = !1))
  }
  return Ii(e, t, n, r, l, o)
}
function Ii(e, t, n, r, o, l) {
  Vf(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return o && Ys(t, n, !1), dt(e, t, l)
  ;(r = t.stateNode), (Cm.current = t)
  var u = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i ? ((t.child = Rn(t, e.child, null, l)), (t.child = Rn(t, null, u, l))) : he(e, t, u, l),
    (t.memoizedState = r.state),
    o && Ys(t, n, !0),
    t.child
  )
}
function Hf(e) {
  var t = e.stateNode
  t.pendingContext ? Ks(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ks(e, t.context, !1), ju(e, t.containerInfo)
}
function aa(e, t, n, r, o) {
  return Pn(), Ru(o), (t.flags |= 256), he(e, t, n, r), t.child
}
var Mi = { dehydrated: null, treeContext: null, retryLane: 0 }
function Di(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    o = K.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    u
  if (
    ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    W(K, o & 1),
    e === null)
  )
    return (
      Ni(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = i)) : (l = ul(i, r, 0, null)),
              (e = Gt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Di(n)),
              (t.memoizedState = Mi),
              e)
            : Bu(t, i))
    )
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null))) return km(e, t, i, r, u, o, n)
  if (l) {
    ;(l = r.fallback), (i = t.mode), (o = e.child), (u = o.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = Lt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (l = Lt(u, l)) : ((l = Gt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i = i === null ? Di(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Mi),
      r
    )
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Lt(l, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Bu(e, t) {
  return (t = ul({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function Zr(e, t, n, r) {
  return r !== null && Ru(r), Rn(t, e.child, null, n), (e = Bu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e
}
function km(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(C(422)))), Zr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = ul({ mode: 'visible', children: r.children }, o, 0, null)),
          (l = Gt(l, o, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Rn(t, e.child, null, i),
          (t.child.memoizedState = Di(i)),
          (t.memoizedState = Mi),
          l)
  if (!(t.mode & 1)) return Zr(e, t, i, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (l = Error(C(419))), (r = Wl(l, r, void 0)), Zr(e, t, i, r)
  }
  if (((u = (i & e.childLanes) !== 0), xe || u)) {
    if (((r = ie), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | i) ? 0 : o), o !== 0 && o !== l.retryLane && ((l.retryLane = o), ft(e, o), Ge(r, e, o, -1))
    }
    return Yu(), (r = Wl(Error(C(421)))), Zr(e, t, i, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = Mm.bind(null, e)), (o._reactRetry = t), null)
    : ((e = l.treeContext),
      (Re = Rt(o.nextSibling)),
      (Oe = t),
      (Q = !0),
      (Ke = null),
      e !== null && ((ze[Fe++] = lt), (ze[Fe++] = it), (ze[Fe++] = Jt), (lt = e.id), (it = e.overflow), (Jt = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t)
}
function ca(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Li(e.return, t, n)
}
function Vl(e, t, n, r, o) {
  var l = e.memoizedState
  l === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailMode = o))
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail
  if ((he(e, t, r.children, n), (r = K.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ca(e, n, t)
        else if (e.tag === 19) ca(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((W(K, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && Mo(e) === null && (o = n), (n = n.sibling)
        ;(n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Vl(t, !1, o, n, l)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Mo(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Vl(t, !0, n, null, l)
        break
      case 'together':
        Vl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function fo(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function dt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Zt |= t.lanes), !(n & t.childLanes))) return null
  if (e !== null && t.child !== e.child) throw Error(C(153))
  if (t.child !== null) {
    for (e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function _m(e, t, n) {
  switch (t.tag) {
    case 3:
      Hf(t), Pn()
      break
    case 5:
      wf(t)
      break
    case 1:
      ke(t.type) && Lo(t)
      break
    case 4:
      ju(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      W(zo, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Qf(e, t, n)
            : (W(K, K.current & 1), (e = dt(e, t, n)), e !== null ? e.sibling : null)
      W(K, K.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Kf(e, t, n)
        t.flags |= 128
      }
      if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), W(K, K.current), r)) break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Wf(e, t, n)
  }
  return dt(e, t, n)
}
var Yf, Ui, Gf, Xf
Yf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Ui = function () {}
Gf = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Kt(tt.current)
    var l = null
    switch (n) {
      case 'input':
        ;(o = ui(e, o)), (r = ui(e, r)), (l = [])
        break
      case 'select':
        ;(o = G({}, o, { value: void 0 })), (r = G({}, r, { value: void 0 })), (l = [])
        break
      case 'textarea':
        ;(o = ci(e, o)), (r = ci(e, r)), (l = [])
        break
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = To)
    }
    di(n, r)
    var i
    n = null
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a]
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (ir.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null))
    for (a in r) {
      var s = r[a]
      if (((u = o != null ? o[a] : void 0), r.hasOwnProperty(a) && s !== u && (s != null || u != null)))
        if (a === 'style')
          if (u) {
            for (i in u) !u.hasOwnProperty(i) || (s && s.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''))
            for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), (n[i] = s[i]))
          } else n || (l || (l = []), l.push(a, n)), (n = s)
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), s != null && u !== s && (l = l || []).push(a, s))
            : a === 'children'
              ? (typeof s != 'string' && typeof s != 'number') || (l = l || []).push(a, '' + s)
              : a !== 'suppressContentEditableWarning' &&
                a !== 'suppressHydrationWarning' &&
                (ir.hasOwnProperty(a)
                  ? (s != null && a === 'onScroll' && V('scroll', e), l || u === s || (l = []))
                  : (l = l || []).push(a, s))
    }
    n && (l = l || []).push('style', n)
    var a = l
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
Xf = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Hn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
    }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling)
  else for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Pm(e, t, n) {
  var r = t.pendingProps
  switch ((Pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return fe(t), null
    case 1:
      return ke(t.type) && No(), fe(t), null
    case 3:
      return (
        (r = t.stateNode),
        On(),
        H(Ce),
        H(pe),
        Fu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (Yi(Ke), (Ke = null)))),
        Ui(e, t),
        fe(t),
        null
      )
    case 5:
      zu(t)
      var o = Kt(gr.current)
      if (((n = t.type), e !== null && t.stateNode != null)) Gf(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166))
          return fe(t), null
        }
        if (((e = Kt(tt.current)), Jr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var l = t.memoizedProps
          switch (((r[Ze] = t), (r[yr] = l), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              V('cancel', r), V('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Jn.length; o++) V(Jn[o], r)
              break
            case 'source':
              V('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r)
              break
            case 'details':
              V('toggle', r)
              break
            case 'input':
              ws(r, l), V('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!l.multiple }), V('invalid', r)
              break
            case 'textarea':
              Es(r, l), V('invalid', r)
          }
          di(n, l), (o = null)
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i]
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (l.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), (o = ['children', '' + u]))
                : ir.hasOwnProperty(i) && u != null && i === 'onScroll' && V('scroll', r)
            }
          switch (n) {
            case 'input':
              Br(r), Ss(r, l, !0)
              break
            case 'textarea':
              Br(r), xs(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof l.onClick == 'function' && (r.onclick = To)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ec(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)), n === 'select' && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ze] = t),
            (e[yr] = r),
            Yf(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = pi(n, r)), n)) {
              case 'dialog':
                V('cancel', e), V('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                V('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Jn.length; o++) V(Jn[o], e)
                o = r
                break
              case 'source':
                V('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                V('error', e), V('load', e), (o = r)
                break
              case 'details':
                V('toggle', e), (o = r)
                break
              case 'input':
                ws(e, r), (o = ui(e, r)), V('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }), (o = G({}, r, { value: void 0 })), V('invalid', e)
                break
              case 'textarea':
                Es(e, r), (o = ci(e, r)), V('invalid', e)
                break
              default:
                o = r
            }
            di(n, o), (u = o)
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l]
                l === 'style'
                  ? kc(e, s)
                  : l === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && xc(e, s))
                    : l === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && ur(e, s)
                        : typeof s == 'number' && ur(e, '' + s)
                      : l !== 'suppressContentEditableWarning' &&
                        l !== 'suppressHydrationWarning' &&
                        l !== 'autoFocus' &&
                        (ir.hasOwnProperty(l) ? s != null && l === 'onScroll' && V('scroll', e) : s != null && fu(e, l, s, i))
              }
            switch (n) {
              case 'input':
                Br(e), Ss(e, r, !1)
                break
              case 'textarea':
                Br(e), xs(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + zt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null ? gn(e, !!r.multiple, l, !1) : r.defaultValue != null && gn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = To)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return fe(t), null
    case 6:
      if (e && t.stateNode != null) Xf(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166))
        if (((n = Kt(gr.current)), Kt(tt.current), Jr(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Ze] = t), (l = r.nodeValue !== n) && ((e = Oe), e !== null)))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          l && (t.flags |= 4)
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ze] = t), (t.stateNode = r)
      }
      return fe(t), null
    case 13:
      if ((H(K), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (Q && Re !== null && t.mode & 1 && !(t.flags & 128)) df(), Pn(), (t.flags |= 98560), (l = !1)
        else if (((l = Jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(C(318))
            if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(C(317))
            l[Ze] = t
          } else Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          fe(t), (l = !1)
        } else Ke !== null && (Yi(Ke), (Ke = null)), (l = !0)
        if (!l) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || K.current & 1 ? ne === 0 && (ne = 3) : Yu())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null)
    case 4:
      return On(), Ui(e, t), e === null && hr(t.stateNode.containerInfo), fe(t), null
    case 10:
      return Nu(t.type._context), fe(t), null
    case 17:
      return ke(t.type) && No(), fe(t), null
    case 19:
      if ((H(K), (l = t.memoizedState), l === null)) return fe(t), null
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Hn(l, !1)
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Mo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return W(K, (K.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          l.tail !== null && J() > Nn && ((t.flags |= 128), (r = !0), Hn(l, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Mo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(l, !0),
              l.tail === null && l.tailMode === 'hidden' && !i.alternate && !Q)
            )
              return fe(t), null
          } else 2 * J() - l.renderingStartTime > Nn && n !== 1073741824 && ((t.flags |= 128), (r = !0), Hn(l, !1), (t.lanes = 4194304))
        l.isBackwards ? ((i.sibling = t.child), (t.child = i)) : ((n = l.last), n !== null ? (n.sibling = i) : (t.child = i), (l.last = i))
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          W(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null)
    case 22:
    case 23:
      return (
        Ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Pe & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(C(156, t.tag))
}
function Rm(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return ke(t.type) && No(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 3:
      return On(), H(Ce), H(pe), Fu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
    case 5:
      return zu(t), null
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340))
        Pn()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return H(K), null
    case 4:
      return On(), null
    case 10:
      return Nu(t.type._context), null
    case 22:
    case 23:
      return Ku(), null
    case 24:
      return null
    default:
      return null
  }
}
var br = !1,
  de = !1,
  Om = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null
function yn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        X(e, t, r)
      }
    else n.current = null
}
function $i(e, t, n) {
  try {
    n()
  } catch (r) {
    X(e, t, r)
  }
}
var fa = !1
function Tm(e, t) {
  if (((Ci = Po), (e = Zc()), ku(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            l = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, l.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            f = 0,
            c = e,
            m = null
          t: for (;;) {
            for (
              var g;
              c !== n || (o !== 0 && c.nodeType !== 3) || (u = i + o),
                c !== l || (r !== 0 && c.nodeType !== 3) || (s = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (g = c.firstChild) !== null;

            )
              (m = c), (c = g)
            for (;;) {
              if (c === e) break t
              if ((m === n && ++a === o && (u = i), m === l && ++f === r && (s = i), (g = c.nextSibling) !== null)) break
              ;(c = m), (m = c.parentNode)
            }
            c = g
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (ki = { focusedElem: e, selectionRange: n }, Po = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (O = e)
    else
      for (; O !== null; ) {
        t = O
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : He(t.type, v), w)
                  p.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var h = t.stateNode.containerInfo
                h.nodeType === 1 ? (h.textContent = '') : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(C(163))
            }
        } catch (S) {
          X(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (O = e)
          break
        }
        O = t.return
      }
  return (y = fa), (fa = !1), y
}
function rr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy
        ;(o.destroy = void 0), l !== void 0 && $i(t, n, l)
      }
      o = o.next
    } while (o !== r)
  }
}
function ll(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Bi(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Jf(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Jf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Ze], delete t[yr], delete t[Ri], delete t[fm], delete t[dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function da(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qf(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Wi(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = To))
  else if (r !== 4 && ((e = e.child), e !== null)) for (Wi(e, t, n), e = e.sibling; e !== null; ) Wi(e, t, n), (e = e.sibling)
}
function Vi(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null)) for (Vi(e, t, n), e = e.sibling; e !== null; ) Vi(e, t, n), (e = e.sibling)
}
var ue = null,
  Qe = !1
function mt(e, t, n) {
  for (n = n.child; n !== null; ) Zf(e, t, n), (n = n.sibling)
}
function Zf(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == 'function')
    try {
      et.onCommitFiberUnmount(qo, n)
    } catch {}
  switch (n.tag) {
    case 5:
      de || yn(n, t)
    case 6:
      var r = ue,
        o = Qe
      ;(ue = null),
        mt(e, t, n),
        (ue = r),
        (Qe = o),
        ue !== null &&
          (Qe
            ? ((e = ue), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode))
      break
    case 18:
      ue !== null &&
        (Qe
          ? ((e = ue), (n = n.stateNode), e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), fr(e))
          : Il(ue, n.stateNode))
      break
    case 4:
      ;(r = ue), (o = Qe), (ue = n.stateNode.containerInfo), (Qe = !0), mt(e, t, n), (ue = r), (Qe = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next
        do {
          var l = o,
            i = l.destroy
          ;(l = l.tag), i !== void 0 && (l & 2 || l & 4) && $i(n, t, i), (o = o.next)
        } while (o !== r)
      }
      mt(e, t, n)
      break
    case 1:
      if (!de && (yn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
        } catch (u) {
          X(n, t, u)
        }
      mt(e, t, n)
      break
    case 21:
      mt(e, t, n)
      break
    case 22:
      n.mode & 1 ? ((de = (r = de) || n.memoizedState !== null), mt(e, t, n), (de = r)) : mt(e, t, n)
      break
    default:
      mt(e, t, n)
  }
}
function pa(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Om()),
      t.forEach(function (r) {
        var o = Dm.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Ve(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var l = e,
          i = t,
          u = i
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(ue = u.stateNode), (Qe = !1)
              break e
            case 3:
              ;(ue = u.stateNode.containerInfo), (Qe = !0)
              break e
            case 4:
              ;(ue = u.stateNode.containerInfo), (Qe = !0)
              break e
          }
          u = u.return
        }
        if (ue === null) throw Error(C(160))
        Zf(l, i, o), (ue = null), (Qe = !1)
        var s = o.alternate
        s !== null && (s.return = null), (o.return = null)
      } catch (a) {
        X(o, t, a)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bf(t, e), (t = t.sibling)
}
function bf(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), Je(e), r & 4)) {
        try {
          rr(3, e, e.return), ll(3, e)
        } catch (v) {
          X(e, e.return, v)
        }
        try {
          rr(5, e, e.return)
        } catch (v) {
          X(e, e.return, v)
        }
      }
      break
    case 1:
      Ve(t, e), Je(e), r & 512 && n !== null && yn(n, n.return)
      break
    case 5:
      if ((Ve(t, e), Je(e), r & 512 && n !== null && yn(n, n.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          ur(o, '')
        } catch (v) {
          X(e, e.return, v)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          u = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && l.type === 'radio' && l.name != null && wc(o, l), pi(u, i)
            var a = pi(u, l)
            for (i = 0; i < s.length; i += 2) {
              var f = s[i],
                c = s[i + 1]
              f === 'style' ? kc(o, c) : f === 'dangerouslySetInnerHTML' ? xc(o, c) : f === 'children' ? ur(o, c) : fu(o, f, c, a)
            }
            switch (u) {
              case 'input':
                si(o, l)
                break
              case 'textarea':
                Sc(o, l)
                break
              case 'select':
                var m = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!l.multiple
                var g = l.value
                g != null
                  ? gn(o, !!l.multiple, g, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null ? gn(o, !!l.multiple, l.defaultValue, !0) : gn(o, !!l.multiple, l.multiple ? [] : '', !1))
            }
            o[yr] = l
          } catch (v) {
            X(e, e.return, v)
          }
      }
      break
    case 6:
      if ((Ve(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162))
        ;(o = e.stateNode), (l = e.memoizedProps)
        try {
          o.nodeValue = l
        } catch (v) {
          X(e, e.return, v)
        }
      }
      break
    case 3:
      if ((Ve(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          fr(t.containerInfo)
        } catch (v) {
          X(e, e.return, v)
        }
      break
    case 4:
      Ve(t, e), Je(e)
      break
    case 13:
      Ve(t, e),
        Je(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l || (o.alternate !== null && o.alternate.memoizedState !== null) || (Hu = J())),
        r & 4 && pa(e)
      break
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null), e.mode & 1 ? ((de = (a = de) || f), Ve(t, e), (de = a)) : Ve(t, e), Je(e), r & 8192)
      ) {
        if (((a = e.memoizedState !== null), (e.stateNode.isHidden = a) && !f && e.mode & 1))
          for (O = e, f = e.child; f !== null; ) {
            for (c = O = f; O !== null; ) {
              switch (((m = O), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, m, m.return)
                  break
                case 1:
                  yn(m, m.return)
                  var y = m.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = m), (n = m.return)
                    try {
                      ;(t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount()
                    } catch (v) {
                      X(r, n, v)
                    }
                  }
                  break
                case 5:
                  yn(m, m.return)
                  break
                case 22:
                  if (m.memoizedState !== null) {
                    ma(c)
                    continue
                  }
              }
              g !== null ? ((g.return = m), (O = g)) : ma(c)
            }
            f = f.sibling
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c
              try {
                ;(o = c.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == 'function' ? l.setProperty('display', 'none', 'important') : (l.display = 'none'))
                    : ((u = c.stateNode),
                      (s = c.memoizedProps.style),
                      (i = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (u.style.display = Cc('display', i)))
              } catch (v) {
                X(e, e.return, v)
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = a ? '' : c.memoizedProps
              } catch (v) {
                X(e, e.return, v)
              }
          } else if (((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) && c.child !== null) {
            ;(c.child.return = c), (c = c.child)
            continue
          }
          if (c === e) break e
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e
            f === c && (f = null), (c = c.return)
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling)
        }
      }
      break
    case 19:
      Ve(t, e), Je(e), r & 4 && pa(e)
      break
    case 21:
      break
    default:
      Ve(t, e), Je(e)
  }
}
function Je(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qf(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(C(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (ur(o, ''), (r.flags &= -33))
          var l = da(e)
          Vi(e, l, o)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = da(e)
          Wi(e, u, i)
          break
        default:
          throw Error(C(161))
      }
    } catch (s) {
      X(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Nm(e, t, n) {
  ;(O = e), ed(e)
}
function ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      l = o.child
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || br
      if (!i) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || de
        u = br
        var a = de
        if (((br = i), (de = s) && !a))
          for (O = o; O !== null; )
            (i = O), (s = i.child), i.tag === 22 && i.memoizedState !== null ? ya(o) : s !== null ? ((s.return = i), (O = s)) : ya(o)
        for (; l !== null; ) (O = l), ed(l), (l = l.sibling)
        ;(O = o), (br = u), (de = a)
      }
      ha(e)
    } else o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (O = l)) : ha(e)
  }
}
function ha(e) {
  for (; O !== null; ) {
    var t = O
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || ll(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount()
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : He(t.type, n.memoizedProps)
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var l = t.updateQueue
              l !== null && qs(t, l, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                qs(t, i, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate
                if (a !== null) {
                  var f = a.memoizedState
                  if (f !== null) {
                    var c = f.dehydrated
                    c !== null && fr(c)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(C(163))
          }
        de || (t.flags & 512 && Bi(t))
      } catch (m) {
        X(t, t.return, m)
      }
    }
    if (t === e) {
      O = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function ma(e) {
  for (; O !== null; ) {
    var t = O
    if (t === e) {
      O = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function ya(e) {
  for (; O !== null; ) {
    var t = O
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ll(4, t)
          } catch (s) {
            X(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              X(t, o, s)
            }
          }
          var l = t.return
          try {
            Bi(t)
          } catch (s) {
            X(t, l, s)
          }
          break
        case 5:
          var i = t.return
          try {
            Bi(t)
          } catch (s) {
            X(t, i, s)
          }
      }
    } catch (s) {
      X(t, t.return, s)
    }
    if (t === e) {
      O = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (O = u)
      break
    }
    O = t.return
  }
}
var Lm = Math.ceil,
  $o = pt.ReactCurrentDispatcher,
  Wu = pt.ReactCurrentOwner,
  Me = pt.ReactCurrentBatchConfig,
  M = 0,
  ie = null,
  Z = null,
  se = 0,
  Pe = 0,
  vn = Mt(0),
  ne = 0,
  xr = null,
  Zt = 0,
  il = 0,
  Vu = 0,
  or = null,
  Ee = null,
  Hu = 0,
  Nn = 1 / 0,
  rt = null,
  Bo = !1,
  Hi = null,
  Tt = null,
  eo = !1,
  xt = null,
  Wo = 0,
  lr = 0,
  Qi = null,
  po = -1,
  ho = 0
function me() {
  return M & 6 ? J() : po !== -1 ? po : (po = J())
}
function Nt(e) {
  return e.mode & 1
    ? M & 2 && se !== 0
      ? se & -se
      : hm.transition !== null
        ? (ho === 0 && (ho = Ic()), ho)
        : ((e = D), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vc(e.type))), e)
    : 1
}
function Ge(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (Qi = null), Error(C(185)))
  Nr(e, n, r),
    (!(M & 2) || e !== ie) &&
      (e === ie && (!(M & 2) && (il |= n), ne === 4 && St(e, se)),
      _e(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Nn = J() + 500), nl && Dt()))
}
function _e(e, t) {
  var n = e.callbackNode
  hh(e, t)
  var r = _o(e, e === ie ? se : 0)
  if (r === 0) n !== null && _s(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _s(n), t === 1))
      e.tag === 0 ? pm(va.bind(null, e)) : af(va.bind(null, e)),
        am(function () {
          !(M & 6) && Dt()
        }),
        (n = null)
    else {
      switch (Mc(r)) {
        case 1:
          n = yu
          break
        case 4:
          n = zc
          break
        case 16:
          n = ko
          break
        case 536870912:
          n = Fc
          break
        default:
          n = ko
      }
      n = sd(n, td.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function td(e, t) {
  if (((po = -1), (ho = 0), M & 6)) throw Error(C(327))
  var n = e.callbackNode
  if (Cn() && e.callbackNode !== n) return null
  var r = _o(e, e === ie ? se : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Vo(e, r)
  else {
    t = r
    var o = M
    M |= 2
    var l = rd()
    ;(ie !== e || se !== t) && ((rt = null), (Nn = J() + 500), Yt(e, t))
    do
      try {
        zm()
        break
      } catch (u) {
        nd(e, u)
      }
    while (!0)
    Tu(), ($o.current = l), (M = o), Z !== null ? (t = 0) : ((ie = null), (se = 0), (t = ne))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = gi(e)), o !== 0 && ((r = o), (t = Ki(e, o)))), t === 1)) throw ((n = xr), Yt(e, 0), St(e, r), _e(e, J()), n)
    if (t === 6) St(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) && !Am(o) && ((t = Vo(e, r)), t === 2 && ((l = gi(e)), l !== 0 && ((r = l), (t = Ki(e, l)))), t === 1))
      )
        throw ((n = xr), Yt(e, 0), St(e, r), _e(e, J()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345))
        case 2:
          Vt(e, Ee, rt)
          break
        case 3:
          if ((St(e, r), (r & 130023424) === r && ((t = Hu + 500 - J()), 10 < t))) {
            if (_o(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Pi(Vt.bind(null, e, Ee, rt), t)
            break
          }
          Vt(e, Ee, rt)
          break
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ye(r)
            ;(l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l)
          }
          if (
            ((r = o),
            (r = J() - r),
            (r =
              (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lm(r / 1960)) -
              r),
            10 < r)
          ) {
            e.timeoutHandle = Pi(Vt.bind(null, e, Ee, rt), r)
            break
          }
          Vt(e, Ee, rt)
          break
        case 5:
          Vt(e, Ee, rt)
          break
        default:
          throw Error(C(329))
      }
    }
  }
  return _e(e, J()), e.callbackNode === n ? td.bind(null, e) : null
}
function Ki(e, t) {
  var n = or
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), (e = Vo(e, t)), e !== 2 && ((t = Ee), (Ee = n), t !== null && Yi(t)), e
  )
}
function Yi(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e)
}
function Am(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot
          o = o.value
          try {
            if (!Xe(l(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function St(e, t) {
  for (t &= ~Vu, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ye(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function va(e) {
  if (M & 6) throw Error(C(327))
  Cn()
  var t = _o(e, 0)
  if (!(t & 1)) return _e(e, J()), null
  var n = Vo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = gi(e)
    r !== 0 && ((t = r), (n = Ki(e, r)))
  }
  if (n === 1) throw ((n = xr), Yt(e, 0), St(e, t), _e(e, J()), n)
  if (n === 6) throw Error(C(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Vt(e, Ee, rt), _e(e, J()), null
}
function Qu(e, t) {
  var n = M
  M |= 1
  try {
    return e(t)
  } finally {
    ;(M = n), M === 0 && ((Nn = J() + 500), nl && Dt())
  }
}
function bt(e) {
  xt !== null && xt.tag === 0 && !(M & 6) && Cn()
  var t = M
  M |= 1
  var n = Me.transition,
    r = D
  try {
    if (((Me.transition = null), (D = 1), e)) return e()
  } finally {
    ;(D = r), (Me.transition = n), (M = t), !(M & 6) && Dt()
  }
}
function Ku() {
  ;(Pe = vn.current), H(vn)
}
function Yt(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), sm(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n
      switch ((Pu(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && No()
          break
        case 3:
          On(), H(Ce), H(pe), Fu()
          break
        case 5:
          zu(r)
          break
        case 4:
          On()
          break
        case 13:
          H(K)
          break
        case 19:
          H(K)
          break
        case 10:
          Nu(r.type._context)
          break
        case 22:
        case 23:
          Ku()
      }
      n = n.return
    }
  if (((ie = e), (Z = e = Lt(e.current, null)), (se = Pe = t), (ne = 0), (xr = null), (Vu = il = Zt = 0), (Ee = or = null), Qt !== null)) {
    for (t = 0; t < Qt.length; t++)
      if (((n = Qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          l = n.pending
        if (l !== null) {
          var i = l.next
          ;(l.next = o), (r.next = i)
        }
        n.pending = r
      }
    Qt = null
  }
  return e
}
function nd(e, t) {
  do {
    var n = Z
    try {
      if ((Tu(), (ao.current = Uo), Do)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Do = !1
      }
      if (((qt = 0), (le = te = Y = null), (nr = !1), (wr = 0), (Wu.current = null), n === null || n.return === null)) {
        ;(ne = 1), (xr = t), (Z = null)
        break
      }
      e: {
        var l = e,
          i = n.return,
          u = n,
          s = t
        if (((t = se), (u.flags |= 32768), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
          var a = s,
            f = u,
            c = f.tag
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var m = f.alternate
            m
              ? ((f.updateQueue = m.updateQueue), (f.memoizedState = m.memoizedState), (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null))
          }
          var g = oa(i)
          if (g !== null) {
            ;(g.flags &= -257), la(g, i, u, l, t), g.mode & 1 && ra(l, a, t), (t = g), (s = a)
            var y = t.updateQueue
            if (y === null) {
              var v = new Set()
              v.add(s), (t.updateQueue = v)
            } else y.add(s)
            break e
          } else {
            if (!(t & 1)) {
              ra(l, a, t), Yu()
              break e
            }
            s = Error(C(426))
          }
        } else if (Q && u.mode & 1) {
          var w = oa(i)
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), la(w, i, u, l, t), Ru(Tn(s, u))
            break e
          }
        }
        ;(l = s = Tn(s, u)), ne !== 4 && (ne = 2), or === null ? (or = [l]) : or.push(l), (l = i)
        do {
          switch (l.tag) {
            case 3:
              ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
              var p = Uf(l, s, t)
              Js(l, p)
              break e
            case 1:
              u = s
              var d = l.type,
                h = l.stateNode
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (h !== null && typeof h.componentDidCatch == 'function' && (Tt === null || !Tt.has(h))))
              ) {
                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                var S = $f(l, u, t)
                Js(l, S)
                break e
              }
          }
          l = l.return
        } while (l !== null)
      }
      ld(n)
    } catch (k) {
      ;(t = k), Z === n && n !== null && (Z = n = n.return)
      continue
    }
    break
  } while (!0)
}
function rd() {
  var e = $o.current
  return ($o.current = Uo), e === null ? Uo : e
}
function Yu() {
  ;(ne === 0 || ne === 3 || ne === 2) && (ne = 4), ie === null || (!(Zt & 268435455) && !(il & 268435455)) || St(ie, se)
}
function Vo(e, t) {
  var n = M
  M |= 2
  var r = rd()
  ;(ie !== e || se !== t) && ((rt = null), Yt(e, t))
  do
    try {
      jm()
      break
    } catch (o) {
      nd(e, o)
    }
  while (!0)
  if ((Tu(), (M = n), ($o.current = r), Z !== null)) throw Error(C(261))
  return (ie = null), (se = 0), ne
}
function jm() {
  for (; Z !== null; ) od(Z)
}
function zm() {
  for (; Z !== null && !lh(); ) od(Z)
}
function od(e) {
  var t = ud(e.alternate, e, Pe)
  ;(e.memoizedProps = e.pendingProps), t === null ? ld(e) : (Z = t), (Wu.current = null)
}
function ld(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rm(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Z = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ne = 6), (Z = null)
        return
      }
    } else if (((n = Pm(n, t, Pe)), n !== null)) {
      Z = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Z = t
      return
    }
    Z = t = e
  } while (t !== null)
  ne === 0 && (ne = 5)
}
function Vt(e, t, n) {
  var r = D,
    o = Me.transition
  try {
    ;(Me.transition = null), (D = 1), Fm(e, t, n, r)
  } finally {
    ;(Me.transition = o), (D = r)
  }
  return null
}
function Fm(e, t, n, r) {
  do Cn()
  while (xt !== null)
  if (M & 6) throw Error(C(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(C(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var l = n.lanes | n.childLanes
  if (
    (mh(e, l),
    e === ie && ((Z = ie = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      eo ||
      ((eo = !0),
      sd(ko, function () {
        return Cn(), null
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ;(l = Me.transition), (Me.transition = null)
    var i = D
    D = 1
    var u = M
    ;(M |= 4),
      (Wu.current = null),
      Tm(e, n),
      bf(n, e),
      tm(ki),
      (Po = !!Ci),
      (ki = Ci = null),
      (e.current = n),
      Nm(n),
      ih(),
      (M = u),
      (D = i),
      (Me.transition = l)
  } else e.current = n
  if ((eo && ((eo = !1), (xt = e), (Wo = o)), (l = e.pendingLanes), l === 0 && (Tt = null), ah(n.stateNode), _e(e, J()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Bo) throw ((Bo = !1), (e = Hi), (Hi = null), e)
  return Wo & 1 && e.tag !== 0 && Cn(), (l = e.pendingLanes), l & 1 ? (e === Qi ? lr++ : ((lr = 0), (Qi = e))) : (lr = 0), Dt(), null
}
function Cn() {
  if (xt !== null) {
    var e = Mc(Wo),
      t = Me.transition,
      n = D
    try {
      if (((Me.transition = null), (D = 16 > e ? 16 : e), xt === null)) var r = !1
      else {
        if (((e = xt), (xt = null), (Wo = 0), M & 6)) throw Error(C(331))
        var o = M
        for (M |= 4, O = e.current; O !== null; ) {
          var l = O,
            i = l.child
          if (O.flags & 16) {
            var u = l.deletions
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s]
                for (O = a; O !== null; ) {
                  var f = O
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, f, l)
                  }
                  var c = f.child
                  if (c !== null) (c.return = f), (O = c)
                  else
                    for (; O !== null; ) {
                      f = O
                      var m = f.sibling,
                        g = f.return
                      if ((Jf(f), f === a)) {
                        O = null
                        break
                      }
                      if (m !== null) {
                        ;(m.return = g), (O = m)
                        break
                      }
                      O = g
                    }
                }
              }
              var y = l.alternate
              if (y !== null) {
                var v = y.child
                if (v !== null) {
                  y.child = null
                  do {
                    var w = v.sibling
                    ;(v.sibling = null), (v = w)
                  } while (v !== null)
                }
              }
              O = l
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (O = i)
          else
            e: for (; O !== null; ) {
              if (((l = O), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rr(9, l, l.return)
                }
              var p = l.sibling
              if (p !== null) {
                ;(p.return = l.return), (O = p)
                break e
              }
              O = l.return
            }
        }
        var d = e.current
        for (O = d; O !== null; ) {
          i = O
          var h = i.child
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (O = h)
          else
            e: for (i = d; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ll(9, u)
                  }
                } catch (k) {
                  X(u, u.return, k)
                }
              if (u === i) {
                O = null
                break e
              }
              var S = u.sibling
              if (S !== null) {
                ;(S.return = u.return), (O = S)
                break e
              }
              O = u.return
            }
        }
        if (((M = o), Dt(), et && typeof et.onPostCommitFiberRoot == 'function'))
          try {
            et.onPostCommitFiberRoot(qo, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(D = n), (Me.transition = t)
    }
  }
  return !1
}
function ga(e, t, n) {
  ;(t = Tn(n, t)), (t = Uf(e, t, 1)), (e = Ot(e, t, 1)), (t = me()), e !== null && (Nr(e, 1, t), _e(e, t))
}
function X(e, t, n) {
  if (e.tag === 3) ga(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ga(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Tt === null || !Tt.has(r)))
        ) {
          ;(e = Tn(n, e)), (e = $f(t, e, 1)), (t = Ot(t, e, 1)), (e = me()), t !== null && (Nr(t, 1, e), _e(t, e))
          break
        }
      }
      t = t.return
    }
}
function Im(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e && (se & n) === n && (ne === 4 || (ne === 3 && (se & 130023424) === se && 500 > J() - Hu) ? Yt(e, 0) : (Vu |= n)),
    _e(e, t)
}
function id(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Hr), (Hr <<= 1), !(Hr & 130023424) && (Hr = 4194304)) : (t = 1))
  var n = me()
  ;(e = ft(e, t)), e !== null && (Nr(e, t, n), _e(e, n))
}
function Mm(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), id(e, n)
}
function Dm(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(C(314))
  }
  r !== null && r.delete(t), id(e, n)
}
var ud
ud = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) xe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), _m(e, t, n)
      xe = !!(e.flags & 131072)
    }
  else (xe = !1), Q && t.flags & 1048576 && cf(t, jo, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      fo(e, t), (e = t.pendingProps)
      var o = _n(t, pe.current)
      xn(t, n), (o = Mu(null, t, r, e, o, n))
      var l = Du()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((l = !0), Lo(t)) : (l = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            Au(t),
            (o.updater = rl),
            (t.stateNode = o),
            (o._reactInternals = t),
            ji(t, r, e, n),
            (t = Ii(null, t, r, !0, l, n)))
          : ((t.tag = 0), Q && l && _u(t), he(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (fo(e, t), (e = t.pendingProps), (o = r._init), (r = o(r._payload)), (t.type = r), (o = t.tag = $m(r)), (e = He(r, e)), o)
        ) {
          case 0:
            t = Fi(null, t, r, e, n)
            break e
          case 1:
            t = sa(null, t, r, e, n)
            break e
          case 11:
            t = ia(null, t, r, e, n)
            break e
          case 14:
            t = ua(null, t, r, He(r.type, e), n)
            break e
        }
        throw Error(C(306, r, ''))
      }
      return t
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : He(r, o)), Fi(e, t, r, o, n)
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : He(r, o)), sa(e, t, r, o, n)
    case 3:
      e: {
        if ((Hf(t), e === null)) throw Error(C(387))
        ;(r = t.pendingProps), (l = t.memoizedState), (o = l.element), hf(e, t), Io(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            ;(o = Tn(Error(C(423)), t)), (t = aa(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Tn(Error(C(424)), t)), (t = aa(e, t, r, n, o))
            break e
          } else
            for (Re = Rt(t.stateNode.containerInfo.firstChild), Oe = t, Q = !0, Ke = null, n = gf(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Pn(), r === o)) {
            t = dt(e, t, n)
            break e
          }
          he(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        wf(t),
        e === null && Ni(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        _i(r, o) ? (i = null) : l !== null && _i(r, l) && (t.flags |= 32),
        Vf(e, t),
        he(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && Ni(t), null
    case 13:
      return Qf(e, t, n)
    case 4:
      return ju(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Rn(t, null, r, n)) : he(e, t, r, n), t.child
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : He(r, o)), ia(e, t, r, o, n)
    case 7:
      return he(e, t, t.pendingProps, n), t.child
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          W(zo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Xe(l.value, i)) {
            if (l.children === o.children && !Ce.current) {
              t = dt(e, t, n)
              break e
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies
              if (u !== null) {
                i = l.child
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      ;(s = ut(-1, n & -n)), (s.tag = 2)
                      var a = l.updateQueue
                      if (a !== null) {
                        a = a.shared
                        var f = a.pending
                        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (a.pending = s)
                      }
                    }
                    ;(l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), Li(l.return, n, t), (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(C(341))
                ;(i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), Li(i, n, t), (i = l.sibling)
              } else i = l.child
              if (i !== null) i.return = l
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((l = i.sibling), l !== null)) {
                    ;(l.return = i.return), (i = l)
                    break
                  }
                  i = i.return
                }
              l = i
            }
        he(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (o = t.type), (r = t.pendingProps.children), xn(t, n), (o = Ue(o)), (r = r(o)), (t.flags |= 1), he(e, t, r, n), t.child
    case 14:
      return (r = t.type), (o = He(r, t.pendingProps)), (o = He(r.type, o)), ua(e, t, r, o, n)
    case 15:
      return Bf(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        fo(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Lo(t)) : (e = !1),
        xn(t, n),
        yf(t, r, o),
        ji(t, r, o, n),
        Ii(null, t, r, !0, e, n)
      )
    case 19:
      return Kf(e, t, n)
    case 22:
      return Wf(e, t, n)
  }
  throw Error(C(156, t.tag))
}
function sd(e, t) {
  return jc(e, t)
}
function Um(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ie(e, t, n, r) {
  return new Um(e, t, n, r)
}
function Gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function $m(e) {
  if (typeof e == 'function') return Gu(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === pu)) return 11
    if (e === hu) return 14
  }
  return 2
}
function Lt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function mo(e, t, n, r, o, l) {
  var i = 2
  if (((r = e), typeof e == 'function')) Gu(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case un:
        return Gt(n.children, o, l, t)
      case du:
        ;(i = 8), (o |= 8)
        break
      case ri:
        return (e = Ie(12, n, t, o | 2)), (e.elementType = ri), (e.lanes = l), e
      case oi:
        return (e = Ie(13, n, t, o)), (e.elementType = oi), (e.lanes = l), e
      case li:
        return (e = Ie(19, n, t, o)), (e.elementType = li), (e.lanes = l), e
      case yc:
        return ul(n, o, l, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case hc:
              i = 10
              break e
            case mc:
              i = 9
              break e
            case pu:
              i = 11
              break e
            case hu:
              i = 14
              break e
            case vt:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(C(130, e == null ? e : typeof e, ''))
    }
  return (t = Ie(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
}
function Gt(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e
}
function ul(e, t, n, r) {
  return (e = Ie(22, e, r, t)), (e.elementType = yc), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function Hl(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e
}
function Ql(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  )
}
function Bm(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Xu(e, t, n, r, o, l, i, u, s) {
  return (
    (e = new Bm(e, t, n, u, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ie(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    Au(l),
    e
  )
}
function Wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return { $$typeof: ln, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
}
function ad(e) {
  if (!e) return Ft
  e = e._reactInternals
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(C(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(C(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (ke(n)) return sf(e, n, t)
  }
  return t
}
function cd(e, t, n, r, o, l, i, u, s) {
  return (
    (e = Xu(n, r, !0, e, o, l, i, u, s)),
    (e.context = ad(null)),
    (n = e.current),
    (r = me()),
    (o = Nt(n)),
    (l = ut(r, o)),
    (l.callback = t ?? null),
    Ot(n, l, o),
    (e.current.lanes = o),
    Nr(e, o, r),
    _e(e, r),
    e
  )
}
function sl(e, t, n, r) {
  var o = t.current,
    l = me(),
    i = Nt(o)
  return (
    (n = ad(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(o, t, i)),
    e !== null && (Ge(e, o, i, l), so(e, o, i)),
    i
  )
}
function Ho(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function wa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ju(e, t) {
  wa(e, t), (e = e.alternate) && wa(e, t)
}
function Vm() {
  return null
}
var fd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function qu(e) {
  this._internalRoot = e
}
al.prototype.render = qu.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(C(409))
  sl(e, t, null, null)
}
al.prototype.unmount = qu.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    bt(function () {
      sl(null, e, null, null)
    }),
      (t[ct] = null)
  }
}
function al(e) {
  this._internalRoot = e
}
al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $c()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Wc(e)
  }
}
function Zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Sa() {}
function Hm(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var l = r
      r = function () {
        var a = Ho(i)
        l.call(a)
      }
    }
    var i = cd(t, r, e, 0, null, !1, !1, '', Sa)
    return (e._reactRootContainer = i), (e[ct] = i.current), hr(e.nodeType === 8 ? e.parentNode : e), bt(), i
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var a = Ho(s)
      u.call(a)
    }
  }
  var s = Xu(e, 0, !1, null, null, !1, !1, '', Sa)
  return (
    (e._reactRootContainer = s),
    (e[ct] = s.current),
    hr(e.nodeType === 8 ? e.parentNode : e),
    bt(function () {
      sl(t, s, n, r)
    }),
    s
  )
}
function fl(e, t, n, r, o) {
  var l = n._reactRootContainer
  if (l) {
    var i = l
    if (typeof o == 'function') {
      var u = o
      o = function () {
        var s = Ho(i)
        u.call(s)
      }
    }
    sl(t, i, e, o)
  } else i = Hm(n, t, e, o, r)
  return Ho(i)
}
Dc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes)
        n !== 0 && (vu(t, n | 1), _e(t, J()), !(M & 6) && ((Nn = J() + 500), Dt()))
      }
      break
    case 13:
      bt(function () {
        var r = ft(e, 1)
        if (r !== null) {
          var o = me()
          Ge(r, e, 1, o)
        }
      }),
        Ju(e, 1)
  }
}
gu = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728)
    if (t !== null) {
      var n = me()
      Ge(t, e, 134217728, n)
    }
    Ju(e, 134217728)
  }
}
Uc = function (e) {
  if (e.tag === 13) {
    var t = Nt(e),
      n = ft(e, t)
    if (n !== null) {
      var r = me()
      Ge(n, e, t, r)
    }
    Ju(e, t)
  }
}
$c = function () {
  return D
}
Bc = function (e, t) {
  var n = D
  try {
    return (D = e), t()
  } finally {
    D = n
  }
}
mi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((si(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = tl(r)
            if (!o) throw Error(C(90))
            gc(r), si(r, o)
          }
        }
      }
      break
    case 'textarea':
      Sc(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && gn(e, !!n.multiple, t, !1)
  }
}
Rc = Qu
Oc = bt
var Qm = { usingClientEntryPoint: !1, Events: [Ar, fn, tl, _c, Pc, Qu] },
  Qn = { findFiberByHostInstance: Ht, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
  Km = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lc(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || Vm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var to = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!to.isDisabled && to.supportsFiber)
    try {
      ;(qo = to.inject(Km)), (et = to)
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Zu(t)) throw Error(C(200))
  return Wm(e, t, null, n)
}
Ne.createRoot = function (e, t) {
  if (!Zu(e)) throw Error(C(299))
  var n = !1,
    r = '',
    o = fd
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Xu(e, 1, !1, null, null, n, !1, r, o)),
    (e[ct] = t.current),
    hr(e.nodeType === 8 ? e.parentNode : e),
    new qu(t)
  )
}
Ne.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0) throw typeof e.render == 'function' ? Error(C(188)) : ((e = Object.keys(e).join(',')), Error(C(268, e)))
  return (e = Lc(t)), (e = e === null ? null : e.stateNode), e
}
Ne.flushSync = function (e) {
  return bt(e)
}
Ne.hydrate = function (e, t, n) {
  if (!cl(t)) throw Error(C(200))
  return fl(null, e, t, !0, n)
}
Ne.hydrateRoot = function (e, t, n) {
  if (!Zu(e)) throw Error(C(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = '',
    i = fd
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[ct] = t.current),
    hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new al(t)
}
Ne.render = function (e, t, n) {
  if (!cl(t)) throw Error(C(200))
  return fl(null, e, t, !1, n)
}
Ne.unmountComponentAtNode = function (e) {
  if (!cl(e)) throw Error(C(40))
  return e._reactRootContainer
    ? (bt(function () {
        fl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[ct] = null)
        })
      }),
      !0)
    : !1
}
Ne.unstable_batchedUpdates = Qu
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cl(n)) throw Error(C(200))
  if (e == null || e._reactInternals === void 0) throw Error(C(38))
  return fl(e, t, n, !1, r)
}
Ne.version = '18.2.0-next-9e3b772b8-20220608'
function dd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd)
    } catch (e) {
      console.error(e)
    }
}
dd(), (ac.exports = Ne)
var Ym = ac.exports,
  Ea = Ym
;(ti.createRoot = Ea.createRoot), (ti.hydrateRoot = Ea.hydrateRoot)
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cr() {
  return (
    (Cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Cr.apply(this, arguments)
  )
}
var Ct
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Ct || (Ct = {}))
const xa = 'popstate'
function Gm(e) {
  e === void 0 && (e = {})
  function t(r, o) {
    let { pathname: l, search: i, hash: u } = r.location
    return Gi('', { pathname: l, search: i, hash: u }, (o.state && o.state.usr) || null, (o.state && o.state.key) || 'default')
  }
  function n(r, o) {
    return typeof o == 'string' ? o : Qo(o)
  }
  return Jm(t, n, null, e)
}
function b(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function bu(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Xm() {
  return Math.random().toString(36).substr(2, 8)
}
function Ca(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Gi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Cr({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? Fn(t) : t, {
      state: n,
      key: (t && t.key) || r || Xm(),
    })
  )
}
function Qo(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t
}
function Fn(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
  }
  return t
}
function Jm(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    u = Ct.Pop,
    s = null,
    a = f()
  a == null && ((a = 0), i.replaceState(Cr({}, i.state, { idx: a }), ''))
  function f() {
    return (i.state || { idx: null }).idx
  }
  function c() {
    u = Ct.Pop
    let w = f(),
      p = w == null ? null : w - a
    ;(a = w), s && s({ action: u, location: v.location, delta: p })
  }
  function m(w, p) {
    u = Ct.Push
    let d = Gi(v.location, w, p)
    n && n(d, w), (a = f() + 1)
    let h = Ca(d, a),
      S = v.createHref(d)
    try {
      i.pushState(h, '', S)
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k
      o.location.assign(S)
    }
    l && s && s({ action: u, location: v.location, delta: 1 })
  }
  function g(w, p) {
    u = Ct.Replace
    let d = Gi(v.location, w, p)
    n && n(d, w), (a = f())
    let h = Ca(d, a),
      S = v.createHref(d)
    i.replaceState(h, '', S), l && s && s({ action: u, location: v.location, delta: 0 })
  }
  function y(w) {
    let p = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      d = typeof w == 'string' ? w : Qo(w)
    return b(p, 'No window.location.(origin|href) available to create URL for href: ' + d), new URL(d, p)
  }
  let v = {
    get action() {
      return u
    },
    get location() {
      return e(o, i)
    },
    listen(w) {
      if (s) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(xa, c),
        (s = w),
        () => {
          o.removeEventListener(xa, c), (s = null)
        }
      )
    },
    createHref(w) {
      return t(o, w)
    },
    createURL: y,
    encodeLocation(w) {
      let p = y(w)
      return { pathname: p.pathname, search: p.search, hash: p.hash }
    },
    push: m,
    replace: g,
    go(w) {
      return i.go(w)
    },
  }
  return v
}
var ka
;(function (e) {
  ;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(ka || (ka = {}))
function qm(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Fn(t) : t,
    o = es(r.pathname || '/', n)
  if (o == null) return null
  let l = pd(e)
  Zm(l)
  let i = null
  for (let u = 0; i == null && u < l.length; ++u) i = uy(l[u], cy(o))
  return i
}
function pd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let o = (l, i, u) => {
    let s = { relativePath: u === void 0 ? l.path || '' : u, caseSensitive: l.caseSensitive === !0, childrenIndex: i, route: l }
    s.relativePath.startsWith('/') &&
      (b(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)))
    let a = At([r, s.relativePath]),
      f = n.concat(s)
    l.children &&
      l.children.length > 0 &&
      (b(l.index !== !0, 'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + a + '".')),
      pd(l.children, t, f, a)),
      !(l.path == null && !l.index) && t.push({ path: a, score: ly(a, l.index), routesMeta: f })
  }
  return (
    e.forEach((l, i) => {
      var u
      if (l.path === '' || !((u = l.path) != null && u.includes('?'))) o(l, i)
      else for (let s of hd(l.path)) o(l, i, s)
    }),
    t
  )
}
function hd(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    o = n.endsWith('?'),
    l = n.replace(/\?$/, '')
  if (r.length === 0) return o ? [l, ''] : [l]
  let i = hd(r.join('/')),
    u = []
  return u.push(...i.map(s => (s === '' ? l : [l, s].join('/')))), o && u.push(...i), u.map(s => (e.startsWith('/') && s === '' ? '/' : s))
}
function Zm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : iy(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex),
        ),
  )
}
const bm = /^:[\w-]+$/,
  ey = 3,
  ty = 2,
  ny = 1,
  ry = 10,
  oy = -2,
  _a = e => e === '*'
function ly(e, t) {
  let n = e.split('/'),
    r = n.length
  return n.some(_a) && (r += oy), t && (r += ty), n.filter(o => !_a(o)).reduce((o, l) => o + (bm.test(l) ? ey : l === '' ? ny : ry), r)
}
function iy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function uy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    l = []
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      f = sy({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, a)
    if (!f) return null
    Object.assign(r, f.params)
    let c = u.route
    l.push({ params: r, pathname: At([o, f.pathname]), pathnameBase: my(At([o, f.pathnameBase])), route: c }),
      f.pathnameBase !== '/' && (o = At([o, f.pathnameBase]))
  }
  return l
}
function sy(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = ay(e.path, e.caseSensitive, e.end),
    o = t.match(n)
  if (!o) return null
  let l = o[0],
    i = l.replace(/(.)\/+$/, '$1'),
    u = o.slice(1)
  return {
    params: r.reduce((a, f, c) => {
      let { paramName: m, isOptional: g } = f
      if (m === '*') {
        let v = u[c] || ''
        i = l.slice(0, l.length - v.length).replace(/(.)\/+$/, '$1')
      }
      const y = u[c]
      return g && !y ? (a[m] = void 0) : (a[m] = fy(y || '', m)), a
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  }
}
function ay(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bu(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    )
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (i, u, s) => (r.push({ paramName: u, isOptional: s != null }), s ? '/?([^\\/]+)?' : '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  )
}
function cy(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      bu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    )
  }
}
function fy(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      bu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    )
  }
}
function es(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function dy(e, t) {
  t === void 0 && (t = '/')
  let { pathname: n, search: r = '', hash: o = '' } = typeof e == 'string' ? Fn(e) : e
  return { pathname: n ? (n.startsWith('/') ? n : py(n, t)) : t, search: yy(r), hash: vy(o) }
}
function py(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(o => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function Kl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function hy(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0))
}
function md(e, t) {
  let n = hy(e)
  return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map(r => r.pathnameBase)
}
function yd(e, t, n, r) {
  r === void 0 && (r = !1)
  let o
  typeof e == 'string'
    ? (o = Fn(e))
    : ((o = Cr({}, e)),
      b(!o.pathname || !o.pathname.includes('?'), Kl('?', 'pathname', 'search', o)),
      b(!o.pathname || !o.pathname.includes('#'), Kl('#', 'pathname', 'hash', o)),
      b(!o.search || !o.search.includes('#'), Kl('#', 'search', 'hash', o)))
  let l = e === '' || o.pathname === '',
    i = l ? '/' : o.pathname,
    u
  if (i == null) u = n
  else {
    let c = t.length - 1
    if (!r && i.startsWith('..')) {
      let m = i.split('/')
      for (; m[0] === '..'; ) m.shift(), (c -= 1)
      o.pathname = m.join('/')
    }
    u = c >= 0 ? t[c] : '/'
  }
  let s = dy(o, u),
    a = i && i !== '/' && i.endsWith('/'),
    f = (l || i === '.') && n.endsWith('/')
  return !s.pathname.endsWith('/') && (a || f) && (s.pathname += '/'), s
}
const At = e => e.join('/').replace(/\/\/+/g, '/'),
  my = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  yy = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  vy = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function gy(e) {
  return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e
}
const vd = ['post', 'put', 'patch', 'delete']
new Set(vd)
const wy = ['get', ...vd]
new Set(wy)
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function kr() {
  return (
    (kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    kr.apply(this, arguments)
  )
}
const ts = x.createContext(null),
  Sy = x.createContext(null),
  nn = x.createContext(null),
  dl = x.createContext(null),
  rn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gd = x.createContext(null)
function Ey(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  zr() || b(!1)
  let { basename: r, navigator: o } = x.useContext(nn),
    { hash: l, pathname: i, search: u } = Sd(e, { relative: n }),
    s = i
  return r !== '/' && (s = i === '/' ? r : At([r, i])), o.createHref({ pathname: s, search: u, hash: l })
}
function zr() {
  return x.useContext(dl) != null
}
function pl() {
  return zr() || b(!1), x.useContext(dl).location
}
function wd(e) {
  x.useContext(nn).static || x.useLayoutEffect(e)
}
function xy() {
  let { isDataRoute: e } = x.useContext(rn)
  return e ? Fy() : Cy()
}
function Cy() {
  zr() || b(!1)
  let e = x.useContext(ts),
    { basename: t, future: n, navigator: r } = x.useContext(nn),
    { matches: o } = x.useContext(rn),
    { pathname: l } = pl(),
    i = JSON.stringify(md(o, n.v7_relativeSplatPath)),
    u = x.useRef(!1)
  return (
    wd(() => {
      u.current = !0
    }),
    x.useCallback(
      function (a, f) {
        if ((f === void 0 && (f = {}), !u.current)) return
        if (typeof a == 'number') {
          r.go(a)
          return
        }
        let c = yd(a, JSON.parse(i), l, f.relative === 'path')
        e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : At([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f)
      },
      [t, r, i, l, e],
    )
  )
}
function Sd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(nn),
    { matches: o } = x.useContext(rn),
    { pathname: l } = pl(),
    i = JSON.stringify(md(o, r.v7_relativeSplatPath))
  return x.useMemo(() => yd(e, JSON.parse(i), l, n === 'path'), [e, i, l, n])
}
function ky(e, t) {
  return _y(e, t)
}
function _y(e, t, n, r) {
  zr() || b(!1)
  let { navigator: o } = x.useContext(nn),
    { matches: l } = x.useContext(rn),
    i = l[l.length - 1],
    u = i ? i.params : {}
  i && i.pathname
  let s = i ? i.pathnameBase : '/'
  i && i.route
  let a = pl(),
    f
  if (t) {
    var c
    let w = typeof t == 'string' ? Fn(t) : t
    s === '/' || ((c = w.pathname) != null && c.startsWith(s)) || b(!1), (f = w)
  } else f = a
  let m = f.pathname || '/',
    g = s === '/' ? m : m.slice(s.length) || '/',
    y = qm(e, { pathname: g }),
    v = Ny(
      y &&
        y.map(w =>
          Object.assign({}, w, {
            params: Object.assign({}, u, w.params),
            pathname: At([s, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase:
              w.pathnameBase === '/' ? s : At([s, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase]),
          }),
        ),
      l,
      n,
      r,
    )
  return t && v
    ? x.createElement(
        dl.Provider,
        { value: { location: kr({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, f), navigationType: Ct.Pop } },
        v,
      )
    : v
}
function Py() {
  let e = zy(),
    t = gy(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? x.createElement('pre', { style: o }, n) : null,
    null,
  )
}
const Ry = x.createElement(Py, null)
class Oy extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          rn.Provider,
          { value: this.props.routeContext },
          x.createElement(gd.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children
  }
}
function Ty(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(ts)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(rn.Provider, { value: t }, r)
  )
}
function Ny(e, t, n, r) {
  var o
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var l
    if ((l = n) != null && l.errors) e = n.matches
    else return null
  }
  let i = e,
    u = (o = n) == null ? void 0 : o.errors
  if (u != null) {
    let f = i.findIndex(c => c.route.id && (u == null ? void 0 : u[c.route.id]))
    f >= 0 || b(!1), (i = i.slice(0, Math.min(i.length, f + 1)))
  }
  let s = !1,
    a = -1
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let c = i[f]
      if (((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = f), c.route.id)) {
        let { loaderData: m, errors: g } = n,
          y = c.route.loader && m[c.route.id] === void 0 && (!g || g[c.route.id] === void 0)
        if (c.route.lazy || y) {
          ;(s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]])
          break
        }
      }
    }
  return i.reduceRight((f, c, m) => {
    let g,
      y = !1,
      v = null,
      w = null
    n &&
      ((g = u && c.route.id ? u[c.route.id] : void 0),
      (v = c.route.errorElement || Ry),
      s &&
        (a < 0 && m === 0
          ? (Iy('route-fallback', !1), (y = !0), (w = null))
          : a === m && ((y = !0), (w = c.route.hydrateFallbackElement || null))))
    let p = t.concat(i.slice(0, m + 1)),
      d = () => {
        let h
        return (
          g
            ? (h = v)
            : y
              ? (h = w)
              : c.route.Component
                ? (h = x.createElement(c.route.Component, null))
                : c.route.element
                  ? (h = c.route.element)
                  : (h = f),
          x.createElement(Ty, { match: c, routeContext: { outlet: f, matches: p, isDataRoute: n != null }, children: h })
        )
      }
    return n && (c.route.ErrorBoundary || c.route.errorElement || m === 0)
      ? x.createElement(Oy, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d()
  }, null)
}
var Ed = (function (e) {
    return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
  })(Ed || {}),
  Ko = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(Ko || {})
function Ly(e) {
  let t = x.useContext(ts)
  return t || b(!1), t
}
function Ay(e) {
  let t = x.useContext(Sy)
  return t || b(!1), t
}
function jy(e) {
  let t = x.useContext(rn)
  return t || b(!1), t
}
function xd(e) {
  let t = jy(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || b(!1), n.route.id
}
function zy() {
  var e
  let t = x.useContext(gd),
    n = Ay(Ko.UseRouteError),
    r = xd(Ko.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Fy() {
  let { router: e } = Ly(Ed.UseNavigateStable),
    t = xd(Ko.UseNavigateStable),
    n = x.useRef(!1)
  return (
    wd(() => {
      n.current = !0
    }),
    x.useCallback(
      function (o, l) {
        l === void 0 && (l = {}), n.current && (typeof o == 'number' ? e.navigate(o) : e.navigate(o, kr({ fromRouteId: t }, l)))
      },
      [e, t],
    )
  )
}
const Pa = {}
function Iy(e, t, n) {
  !t && !Pa[e] && (Pa[e] = !0)
}
function Cd(e) {
  b(!1)
}
function My(e) {
  let { basename: t = '/', children: n = null, location: r, navigationType: o = Ct.Pop, navigator: l, static: i = !1, future: u } = e
  zr() && b(!1)
  let s = t.replace(/^\/*/, '/'),
    a = x.useMemo(() => ({ basename: s, navigator: l, static: i, future: kr({ v7_relativeSplatPath: !1 }, u) }), [s, u, l, i])
  typeof r == 'string' && (r = Fn(r))
  let { pathname: f = '/', search: c = '', hash: m = '', state: g = null, key: y = 'default' } = r,
    v = x.useMemo(() => {
      let w = es(f, s)
      return w == null ? null : { location: { pathname: w, search: c, hash: m, state: g, key: y }, navigationType: o }
    }, [s, f, c, m, g, y, o])
  return v == null ? null : x.createElement(nn.Provider, { value: a }, x.createElement(dl.Provider, { children: n, value: v }))
}
function Dy(e) {
  let { children: t, location: n } = e
  return ky(Xi(t), n)
}
new Promise(() => {})
function Xi(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return
      let l = [...t, o]
      if (r.type === x.Fragment) {
        n.push.apply(n, Xi(r.props.children, l))
        return
      }
      r.type !== Cd && b(!1), !r.props.index || !r.props.children || b(!1)
      let i = {
        id: r.props.id || l.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (i.children = Xi(r.props.children, l)), n.push(i)
    }),
    n
  )
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ji() {
  return (
    (Ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ji.apply(this, arguments)
  )
}
function Uy(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    l
  for (l = 0; l < r.length; l++) (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function $y(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function By(e, t) {
  return e.button === 0 && (!t || t === '_self') && !$y(e)
}
const Wy = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'unstable_viewTransition'],
  Vy = '6'
try {
  window.__reactRouterVersion = Vy
} catch {}
const Hy = 'startTransition',
  Ra = ei[Hy]
function Qy(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    l = x.useRef()
  l.current == null && (l.current = Gm({ window: o, v5Compat: !0 }))
  let i = l.current,
    [u, s] = x.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    f = x.useCallback(
      c => {
        a && Ra ? Ra(() => s(c)) : s(c)
      },
      [s, a],
    )
  return (
    x.useLayoutEffect(() => i.listen(f), [i, f]),
    x.createElement(My, { basename: t, children: n, location: u.location, navigationType: u.action, navigator: i, future: r })
  )
}
const Ky = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  Yy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gy = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      m = Uy(t, Wy),
      { basename: g } = x.useContext(nn),
      y,
      v = !1
    if (typeof a == 'string' && Yy.test(a) && ((y = a), Ky))
      try {
        let h = new URL(window.location.href),
          S = a.startsWith('//') ? new URL(h.protocol + a) : new URL(a),
          k = es(S.pathname, g)
        S.origin === h.origin && k != null ? (a = k + S.search + S.hash) : (v = !0)
      } catch {}
    let w = Ey(a, { relative: o }),
      p = Xy(a, { replace: i, state: u, target: s, preventScrollReset: f, relative: o, unstable_viewTransition: c })
    function d(h) {
      r && r(h), h.defaultPrevented || p(h)
    }
    return x.createElement('a', Ji({}, m, { href: y || w, onClick: v || l ? r : d, ref: n, target: s }))
  })
var Oa
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(Oa || (Oa = {}))
var Ta
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})(Ta || (Ta = {}))
function Xy(e, t) {
  let { target: n, replace: r, state: o, preventScrollReset: l, relative: i, unstable_viewTransition: u } = t === void 0 ? {} : t,
    s = xy(),
    a = pl(),
    f = Sd(e, { relative: i })
  return x.useCallback(
    c => {
      if (By(c, n)) {
        c.preventDefault()
        let m = r !== void 0 ? r : Qo(a) === Qo(f)
        s(e, { replace: m, state: o, preventScrollReset: l, relative: i, unstable_viewTransition: u })
      }
    },
    [a, s, f, r, o, n, e, l, i, u],
  )
}
const kd = ({ changeColor: e = !1, style: t = {} }) =>
    R.jsxs('div', {
      className: 'center topHeader',
      children: [
        e ? R.jsx('span', { children: 'HACKER' }) : R.jsx(R.Fragment, { children: 'HACKER' }),
        'NEWS',
        e ? R.jsx('span', { children: '.' }) : R.jsx(R.Fragment, { children: '.' }),
      ],
    }),
  Jy = () => R.jsx(kd, { style: { background: 'var(--primary-color)', padding: '1em' } })
var _d = { exports: {} },
  Pd = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fr = x
function qy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Zy = typeof Object.is == 'function' ? Object.is : qy,
  by = Fr.useSyncExternalStore,
  e0 = Fr.useRef,
  t0 = Fr.useEffect,
  n0 = Fr.useMemo,
  r0 = Fr.useDebugValue
Pd.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var l = e0(null)
  if (l.current === null) {
    var i = { hasValue: !1, value: null }
    l.current = i
  } else i = l.current
  l = n0(
    function () {
      function s(g) {
        if (!a) {
          if (((a = !0), (f = g), (g = r(g)), o !== void 0 && i.hasValue)) {
            var y = i.value
            if (o(y, g)) return (c = y)
          }
          return (c = g)
        }
        if (((y = c), Zy(f, g))) return y
        var v = r(g)
        return o !== void 0 && o(y, v) ? y : ((f = g), (c = v))
      }
      var a = !1,
        f,
        c,
        m = n === void 0 ? null : n
      return [
        function () {
          return s(t())
        },
        m === null
          ? void 0
          : function () {
              return s(m())
            },
      ]
    },
    [t, n, r, o],
  )
  var u = by(e, l[0], l[1])
  return (
    t0(
      function () {
        ;(i.hasValue = !0), (i.value = u)
      },
      [u],
    ),
    r0(u),
    u
  )
}
_d.exports = Pd
var o0 = _d.exports,
  F = 'default' in ei ? su : ei,
  Na = Symbol.for('react-redux-context'),
  La = typeof globalThis < 'u' ? globalThis : {}
function l0() {
  if (!F.createContext) return {}
  const e = La[Na] ?? (La[Na] = new Map())
  let t = e.get(F.createContext)
  return t || ((t = F.createContext(null)), e.set(F.createContext, t)), t
}
var _r = l0(),
  Rd = () => {
    throw new Error('uSES not initialized!')
  }
function Od(e = _r) {
  return function () {
    return F.useContext(e)
  }
}
var i0 = Od(),
  Td = Rd,
  u0 = e => {
    Td = e
  },
  s0 = (e, t) => e === t
function a0(e = _r) {
  const t = e === _r ? i0 : Od(e),
    n = (r, o = {}) => {
      const { equalityFn: l = s0, devModeChecks: i = {} } = typeof o == 'function' ? { equalityFn: o } : o,
        { store: u, subscription: s, getServerState: a, stabilityCheck: f, identityFunctionCheck: c } = t()
      F.useRef(!0)
      const m = F.useCallback(
          {
            [r.name](y) {
              return r(y)
            },
          }[r.name],
          [r, f, i.stabilityCheck],
        ),
        g = Td(s.addNestedSub, u.getState, a || u.getState, m, l)
      return F.useDebugValue(g), g
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var Nd = a0(),
  c0 = Symbol.for('react.element'),
  f0 = Symbol.for('react.portal'),
  d0 = Symbol.for('react.fragment'),
  p0 = Symbol.for('react.strict_mode'),
  h0 = Symbol.for('react.profiler'),
  m0 = Symbol.for('react.provider'),
  y0 = Symbol.for('react.context'),
  v0 = Symbol.for('react.server_context'),
  Ld = Symbol.for('react.forward_ref'),
  g0 = Symbol.for('react.suspense'),
  w0 = Symbol.for('react.suspense_list'),
  ns = Symbol.for('react.memo'),
  S0 = Symbol.for('react.lazy'),
  E0 = Ld,
  x0 = ns
function C0(e) {
  if (typeof e == 'object' && e !== null) {
    const t = e.$$typeof
    switch (t) {
      case c0: {
        const n = e.type
        switch (n) {
          case d0:
          case h0:
          case p0:
          case g0:
          case w0:
            return n
          default: {
            const r = n && n.$$typeof
            switch (r) {
              case v0:
              case y0:
              case Ld:
              case S0:
              case ns:
              case m0:
                return r
              default:
                return t
            }
          }
        }
      }
      case f0:
        return t
    }
  }
}
function k0(e) {
  return C0(e) === ns
}
function _0(e, t, n, r, { areStatesEqual: o, areOwnPropsEqual: l, areStatePropsEqual: i }) {
  let u = !1,
    s,
    a,
    f,
    c,
    m
  function g(d, h) {
    return (s = d), (a = h), (f = e(s, a)), (c = t(r, a)), (m = n(f, c, a)), (u = !0), m
  }
  function y() {
    return (f = e(s, a)), t.dependsOnOwnProps && (c = t(r, a)), (m = n(f, c, a)), m
  }
  function v() {
    return e.dependsOnOwnProps && (f = e(s, a)), t.dependsOnOwnProps && (c = t(r, a)), (m = n(f, c, a)), m
  }
  function w() {
    const d = e(s, a),
      h = !i(d, f)
    return (f = d), h && (m = n(f, c, a)), m
  }
  function p(d, h) {
    const S = !l(h, a),
      k = !o(d, s, h, a)
    return (s = d), (a = h), S && k ? y() : S ? v() : k ? w() : m
  }
  return function (h, S) {
    return u ? p(h, S) : g(h, S)
  }
}
function P0(e, { initMapStateToProps: t, initMapDispatchToProps: n, initMergeProps: r, ...o }) {
  const l = t(e, o),
    i = n(e, o),
    u = r(e, o)
  return _0(l, i, u, e, o)
}
function R0(e, t) {
  const n = {}
  for (const r in e) {
    const o = e[r]
    typeof o == 'function' && (n[r] = (...l) => t(o(...l)))
  }
  return n
}
function qi(e) {
  return function (n) {
    const r = e(n)
    function o() {
      return r
    }
    return (o.dependsOnOwnProps = !1), o
  }
}
function Aa(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1
}
function Ad(e, t) {
  return function (r, { displayName: o }) {
    const l = function (u, s) {
      return l.dependsOnOwnProps ? l.mapToProps(u, s) : l.mapToProps(u, void 0)
    }
    return (
      (l.dependsOnOwnProps = !0),
      (l.mapToProps = function (u, s) {
        ;(l.mapToProps = e), (l.dependsOnOwnProps = Aa(e))
        let a = l(u, s)
        return typeof a == 'function' && ((l.mapToProps = a), (l.dependsOnOwnProps = Aa(a)), (a = l(u, s))), a
      }),
      l
    )
  }
}
function rs(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`)
  }
}
function O0(e) {
  return e && typeof e == 'object'
    ? qi(t => R0(e, t))
    : e
      ? typeof e == 'function'
        ? Ad(e)
        : rs(e, 'mapDispatchToProps')
      : qi(t => ({ dispatch: t }))
}
function T0(e) {
  return e ? (typeof e == 'function' ? Ad(e) : rs(e, 'mapStateToProps')) : qi(() => ({}))
}
function N0(e, t, n) {
  return { ...n, ...e, ...t }
}
function L0(e) {
  return function (n, { displayName: r, areMergedPropsEqual: o }) {
    let l = !1,
      i
    return function (s, a, f) {
      const c = e(s, a, f)
      return l ? o(c, i) || (i = c) : ((l = !0), (i = c)), i
    }
  }
}
function A0(e) {
  return e ? (typeof e == 'function' ? L0(e) : rs(e, 'mergeProps')) : () => N0
}
function j0(e) {
  e()
}
function z0() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      j0(() => {
        let n = e
        for (; n; ) n.callback(), (n = n.next)
      })
    },
    get() {
      const n = []
      let r = e
      for (; r; ) n.push(r), (r = r.next)
      return n
    },
    subscribe(n) {
      let r = !0
      const o = (t = { callback: n, next: null, prev: t })
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r || e === null || ((r = !1), o.next ? (o.next.prev = o.prev) : (t = o.prev), o.prev ? (o.prev.next = o.next) : (e = o.next))
        }
      )
    },
  }
}
var ja = { notify() {}, get: () => [] }
function jd(e, t) {
  let n,
    r = ja,
    o = 0,
    l = !1
  function i(v) {
    f()
    const w = r.subscribe(v)
    let p = !1
    return () => {
      p || ((p = !0), w(), c())
    }
  }
  function u() {
    r.notify()
  }
  function s() {
    y.onStateChange && y.onStateChange()
  }
  function a() {
    return l
  }
  function f() {
    o++, n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = z0()))
  }
  function c() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = ja))
  }
  function m() {
    l || ((l = !0), f())
  }
  function g() {
    l && ((l = !1), c())
  }
  const y = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: m,
    tryUnsubscribe: g,
    getListeners: () => r,
  }
  return y
}
var F0 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  Yo = F0 ? F.useLayoutEffect : F.useEffect
function za(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function Yl(e, t) {
  if (za(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let o = 0; o < n.length; o++) if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !za(e[n[o]], t[n[o]])) return !1
  return !0
}
var I0 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  M0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  D0 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  zd = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  U0 = { [E0]: D0, [x0]: zd }
function Fa(e) {
  return k0(e) ? zd : U0[e.$$typeof] || I0
}
var $0 = Object.defineProperty,
  B0 = Object.getOwnPropertyNames,
  Ia = Object.getOwnPropertySymbols,
  W0 = Object.getOwnPropertyDescriptor,
  V0 = Object.getPrototypeOf,
  Ma = Object.prototype
function Zi(e, t) {
  if (typeof t != 'string') {
    if (Ma) {
      const l = V0(t)
      l && l !== Ma && Zi(e, l)
    }
    let n = B0(t)
    Ia && (n = n.concat(Ia(t)))
    const r = Fa(e),
      o = Fa(t)
    for (let l = 0; l < n.length; ++l) {
      const i = n[l]
      if (!M0[i] && !(o && o[i]) && !(r && r[i])) {
        const u = W0(t, i)
        try {
          $0(e, i, u)
        } catch {}
      }
    }
  }
  return e
}
var Fd = Rd,
  H0 = e => {
    Fd = e
  },
  Q0 = [null, null]
function K0(e, t, n) {
  Yo(() => e(...t), n)
}
function Y0(e, t, n, r, o, l) {
  ;(e.current = r), (n.current = !1), o.current && ((o.current = null), l())
}
function G0(e, t, n, r, o, l, i, u, s, a, f) {
  if (!e) return () => {}
  let c = !1,
    m = null
  const g = () => {
    if (c || !u.current) return
    const v = t.getState()
    let w, p
    try {
      w = r(v, o.current)
    } catch (d) {
      ;(p = d), (m = d)
    }
    p || (m = null), w === l.current ? i.current || a() : ((l.current = w), (s.current = w), (i.current = !0), f())
  }
  return (
    (n.onStateChange = g),
    n.trySubscribe(),
    g(),
    () => {
      if (((c = !0), n.tryUnsubscribe(), (n.onStateChange = null), m)) throw m
    }
  )
}
function X0(e, t) {
  return e === t
}
function J0(
  e,
  t,
  n,
  {
    pure: r,
    areStatesEqual: o = X0,
    areOwnPropsEqual: l = Yl,
    areStatePropsEqual: i = Yl,
    areMergedPropsEqual: u = Yl,
    forwardRef: s = !1,
    context: a = _r,
  } = {},
) {
  const f = a,
    c = T0(e),
    m = O0(t),
    g = A0(n),
    y = !!e
  return w => {
    const p = w.displayName || w.name || 'Component',
      d = `Connect(${p})`,
      h = {
        shouldHandleStateChanges: y,
        displayName: d,
        wrappedComponentName: p,
        WrappedComponent: w,
        initMapStateToProps: c,
        initMapDispatchToProps: m,
        initMergeProps: g,
        areStatesEqual: o,
        areStatePropsEqual: i,
        areOwnPropsEqual: l,
        areMergedPropsEqual: u,
      }
    function S(P) {
      const [N, U, L] = F.useMemo(() => {
          const { reactReduxForwardedRef: je, ...Mn } = P
          return [P.context, je, Mn]
        }, [P]),
        ee = F.useMemo(() => {
          let je = f
          return N != null && N.Consumer, je
        }, [N, f]),
        re = F.useContext(ee),
        ge = !!P.store && !!P.store.getState && !!P.store.dispatch,
        Ut = !!re && !!re.store,
        we = ge ? P.store : re.store,
        ht = Ut ? re.getServerState : we.getState,
        Be = F.useMemo(() => P0(we.dispatch, h), [we]),
        [_, A] = F.useMemo(() => {
          if (!y) return Q0
          const je = jd(we, ge ? void 0 : re.subscription),
            Mn = je.notifyNestedSubs.bind(je)
          return [je, Mn]
        }, [we, ge, re]),
        j = F.useMemo(() => (ge ? re : { ...re, subscription: _ }), [ge, re, _]),
        $ = F.useRef(),
        B = F.useRef(L),
        Se = F.useRef(),
        Ae = F.useRef(!1)
      F.useRef(!1)
      const $t = F.useRef(!1),
        We = F.useRef()
      Yo(
        () => (
          ($t.current = !0),
          () => {
            $t.current = !1
          }
        ),
        [],
      )
      const Bt = F.useMemo(() => () => (Se.current && L === B.current ? Se.current : Be(we.getState(), L)), [we, L]),
        wp = F.useMemo(() => Mn => (_ ? G0(y, we, _, Be, B, $, Ae, $t, Se, A, Mn) : () => {}), [_])
      K0(Y0, [B, $, Ae, L, Se, A])
      let Dr
      try {
        Dr = Fd(wp, Bt, ht ? () => Be(ht(), L) : Bt)
      } catch (je) {
        throw (
          (We.current &&
            (je.message += `
The error may be correlated with this previous error:
${We.current.stack}

`),
          je)
        )
      }
      Yo(() => {
        ;(We.current = void 0), (Se.current = void 0), ($.current = Dr)
      })
      const wl = F.useMemo(() => F.createElement(w, { ...Dr, ref: U }), [U, w, Dr])
      return F.useMemo(() => (y ? F.createElement(ee.Provider, { value: j }, wl) : wl), [ee, wl, j])
    }
    const T = F.memo(S)
    if (((T.WrappedComponent = w), (T.displayName = S.displayName = d), s)) {
      const N = F.forwardRef(function (L, ee) {
        return F.createElement(T, { ...L, reactReduxForwardedRef: ee })
      })
      return (N.displayName = d), (N.WrappedComponent = w), Zi(N, w)
    }
    return Zi(T, w)
  }
}
var os = J0
function q0({ store: e, context: t, children: n, serverState: r, stabilityCheck: o = 'once', identityFunctionCheck: l = 'once' }) {
  const i = F.useMemo(() => {
      const a = jd(e)
      return { store: e, subscription: a, getServerState: r ? () => r : void 0, stabilityCheck: o, identityFunctionCheck: l }
    }, [e, r, o, l]),
    u = F.useMemo(() => e.getState(), [e])
  Yo(() => {
    const { subscription: a } = i
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      u !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0)
      }
    )
  }, [i, u])
  const s = t || _r
  return F.createElement(s.Provider, { value: i }, n)
}
var Z0 = q0
u0(o0.useSyncExternalStoreWithSelector)
H0(x.useSyncExternalStore)
const Id = 'LOAD_PAST_ARTICLES',
  yo = 'LOAD_PAST_ARTICLES_SUCCESS'
function Md(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: b0 } = Object.prototype,
  { getPrototypeOf: ls } = Object,
  hl = (e => t => {
    const n = b0.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  nt = e => ((e = e.toLowerCase()), t => hl(t) === e),
  ml = e => t => typeof t === e,
  { isArray: In } = Array,
  Pr = ml('undefined')
function ev(e) {
  return e !== null && !Pr(e) && e.constructor !== null && !Pr(e.constructor) && De(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Dd = nt('ArrayBuffer')
function tv(e) {
  let t
  return typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Dd(e.buffer)), t
}
const nv = ml('string'),
  De = ml('function'),
  Ud = ml('number'),
  yl = e => e !== null && typeof e == 'object',
  rv = e => e === !0 || e === !1,
  vo = e => {
    if (hl(e) !== 'object') return !1
    const t = ls(e)
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    )
  },
  ov = nt('Date'),
  lv = nt('File'),
  iv = nt('Blob'),
  uv = nt('FileList'),
  sv = e => yl(e) && De(e.pipe),
  av = e => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (De(e.append) && ((t = hl(e)) === 'formdata' || (t === 'object' && De(e.toString) && e.toString() === '[object FormData]'))))
    )
  },
  cv = nt('URLSearchParams'),
  fv = e => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function Ir(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), In(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = l.length
    let u
    for (r = 0; r < i; r++) (u = l[r]), t.call(null, e[u], u, e)
  }
}
function $d(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const Bd = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
  Wd = e => !Pr(e) && e !== Bd
function bi() {
  const { caseless: e } = (Wd(this) && this) || {},
    t = {},
    n = (r, o) => {
      const l = (e && $d(t, o)) || o
      vo(t[l]) && vo(r) ? (t[l] = bi(t[l], r)) : vo(r) ? (t[l] = bi({}, r)) : In(r) ? (t[l] = r.slice()) : (t[l] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Ir(arguments[r], n)
  return t
}
const dv = (e, t, n, { allOwnKeys: r } = {}) => (
    Ir(
      t,
      (o, l) => {
        n && De(o) ? (e[l] = Md(o, n)) : (e[l] = o)
      },
      { allOwnKeys: r },
    ),
    e
  ),
  pv = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  hv = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  mv = (e, t, n, r) => {
    let o, l, i
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
        (i = o[l]), (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0))
      e = n !== !1 && ls(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  yv = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  vv = e => {
    if (!e) return null
    if (In(e)) return e
    let t = e.length
    if (!Ud(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  gv = (
    e => t =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ls(Uint8Array)),
  wv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const l = o.value
      t.call(e, l[0], l[1])
    }
  },
  Sv = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  Ev = nt('HTMLFormElement'),
  xv = e =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  Da = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Cv = nt('RegExp'),
  Vd = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Ir(n, (o, l) => {
      let i
      ;(i = t(o, l, e)) !== !1 && (r[l] = i || o)
    }),
      Object.defineProperties(e, r)
  },
  kv = e => {
    Vd(e, (t, n) => {
      if (De(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const r = e[n]
      if (De(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  _v = (e, t) => {
    const n = {},
      r = o => {
        o.forEach(l => {
          n[l] = !0
        })
      }
    return In(e) ? r(e) : r(String(e).split(t)), n
  },
  Pv = () => {},
  Rv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Gl = 'abcdefghijklmnopqrstuvwxyz',
  Ua = '0123456789',
  Hd = { DIGIT: Ua, ALPHA: Gl, ALPHA_DIGIT: Gl + Gl.toUpperCase() + Ua },
  Ov = (e = 16, t = Hd.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function Tv(e) {
  return !!(e && De(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const Nv = e => {
    const t = new Array(10),
      n = (r, o) => {
        if (yl(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const l = In(r) ? [] : {}
            return (
              Ir(r, (i, u) => {
                const s = n(i, o + 1)
                !Pr(s) && (l[u] = s)
              }),
              (t[o] = void 0),
              l
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  Lv = nt('AsyncFunction'),
  Av = e => e && (yl(e) || De(e)) && De(e.then) && De(e.catch),
  E = {
    isArray: In,
    isArrayBuffer: Dd,
    isBuffer: ev,
    isFormData: av,
    isArrayBufferView: tv,
    isString: nv,
    isNumber: Ud,
    isBoolean: rv,
    isObject: yl,
    isPlainObject: vo,
    isUndefined: Pr,
    isDate: ov,
    isFile: lv,
    isBlob: iv,
    isRegExp: Cv,
    isFunction: De,
    isStream: sv,
    isURLSearchParams: cv,
    isTypedArray: gv,
    isFileList: uv,
    forEach: Ir,
    merge: bi,
    extend: dv,
    trim: fv,
    stripBOM: pv,
    inherits: hv,
    toFlatObject: mv,
    kindOf: hl,
    kindOfTest: nt,
    endsWith: yv,
    toArray: vv,
    forEachEntry: wv,
    matchAll: Sv,
    isHTMLForm: Ev,
    hasOwnProperty: Da,
    hasOwnProp: Da,
    reduceDescriptors: Vd,
    freezeMethods: kv,
    toObjectSet: _v,
    toCamelCase: xv,
    noop: Pv,
    toFiniteNumber: Rv,
    findKey: $d,
    global: Bd,
    isContextDefined: Wd,
    ALPHABET: Hd,
    generateString: Ov,
    isSpecCompliantForm: Tv,
    toJSONObject: Nv,
    isAsyncFn: Lv,
    isThenable: Av,
  }
function I(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
E.inherits(I, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    }
  },
})
const Qd = I.prototype,
  Kd = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach(e => {
  Kd[e] = { value: e }
})
Object.defineProperties(I, Kd)
Object.defineProperty(Qd, 'isAxiosError', { value: !0 })
I.from = (e, t, n, r, o, l) => {
  const i = Object.create(Qd)
  return (
    E.toFlatObject(
      e,
      i,
      function (s) {
        return s !== Error.prototype
      },
      u => u !== 'isAxiosError',
    ),
    I.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    l && Object.assign(i, l),
    i
  )
}
const jv = null
function eu(e) {
  return E.isPlainObject(e) || E.isArray(e)
}
function Yd(e) {
  return E.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function $a(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, l) {
          return (o = Yd(o)), !n && l ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function zv(e) {
  return E.isArray(e) && !e.some(eu)
}
const Fv = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function vl(e, t, n) {
  if (!E.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = E.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, w) {
      return !E.isUndefined(w[v])
    }))
  const r = n.metaTokens,
    o = n.visitor || f,
    l = n.dots,
    i = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && E.isSpecCompliantForm(t)
  if (!E.isFunction(o)) throw new TypeError('visitor must be a function')
  function a(y) {
    if (y === null) return ''
    if (E.isDate(y)) return y.toISOString()
    if (!s && E.isBlob(y)) throw new I('Blob is not supported. Use a Buffer instead.')
    return E.isArrayBuffer(y) || E.isTypedArray(y) ? (s && typeof Blob == 'function' ? new Blob([y]) : Buffer.from(y)) : y
  }
  function f(y, v, w) {
    let p = y
    if (y && !w && typeof y == 'object') {
      if (E.endsWith(v, '{}')) (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y))
      else if ((E.isArray(y) && zv(y)) || ((E.isFileList(y) || E.endsWith(v, '[]')) && (p = E.toArray(y))))
        return (
          (v = Yd(v)),
          p.forEach(function (h, S) {
            !(E.isUndefined(h) || h === null) && t.append(i === !0 ? $a([v], S, l) : i === null ? v : v + '[]', a(h))
          }),
          !1
        )
    }
    return eu(y) ? !0 : (t.append($a(w, v, l), a(y)), !1)
  }
  const c = [],
    m = Object.assign(Fv, { defaultVisitor: f, convertValue: a, isVisitable: eu })
  function g(y, v) {
    if (!E.isUndefined(y)) {
      if (c.indexOf(y) !== -1) throw Error('Circular reference detected in ' + v.join('.'))
      c.push(y),
        E.forEach(y, function (p, d) {
          ;(!(E.isUndefined(p) || p === null) && o.call(t, p, E.isString(d) ? d.trim() : d, v, m)) === !0 && g(p, v ? v.concat(d) : [d])
        }),
        c.pop()
    }
  }
  if (!E.isObject(e)) throw new TypeError('data must be an object')
  return g(e), t
}
function Ba(e) {
  const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function is(e, t) {
  ;(this._pairs = []), e && vl(e, this, t)
}
const Gd = is.prototype
Gd.append = function (t, n) {
  this._pairs.push([t, n])
}
Gd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ba)
      }
    : Ba
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function Iv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Xd(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || Iv,
    o = n && n.serialize
  let l
  if ((o ? (l = o(t, n)) : (l = E.isURLSearchParams(t) ? t.toString() : new is(t, n).toString(r)), l)) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf('?') === -1 ? '?' : '&') + l)
  }
  return e
}
class Wa {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const Jd = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Mv = typeof URLSearchParams < 'u' ? URLSearchParams : is,
  Dv = typeof FormData < 'u' ? FormData : null,
  Uv = typeof Blob < 'u' ? Blob : null,
  $v = {
    isBrowser: !0,
    classes: { URLSearchParams: Mv, FormData: Dv, Blob: Uv },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  qd = typeof window < 'u' && typeof document < 'u',
  Bv = (e => qd && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(typeof navigator < 'u' && navigator.product),
  Wv = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
  Vv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, hasBrowserEnv: qd, hasStandardBrowserEnv: Bv, hasStandardBrowserWebWorkerEnv: Wv },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  be = { ...Vv, ...$v }
function Hv(e, t) {
  return vl(
    e,
    new be.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, l) {
          return be.isNode && E.isBuffer(n) ? (this.append(r, n.toString('base64')), !1) : l.defaultVisitor.apply(this, arguments)
        },
      },
      t,
    ),
  )
}
function Qv(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map(t => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Kv(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let l
  for (r = 0; r < o; r++) (l = n[r]), (t[l] = e[l])
  return t
}
function Zd(e) {
  function t(n, r, o, l) {
    let i = n[l++]
    if (i === '__proto__') return !0
    const u = Number.isFinite(+i),
      s = l >= n.length
    return (
      (i = !i && E.isArray(o) ? o.length : i),
      s
        ? (E.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !u)
        : ((!o[i] || !E.isObject(o[i])) && (o[i] = []), t(n, r, o[i], l) && E.isArray(o[i]) && (o[i] = Kv(o[i])), !u)
    )
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {}
    return (
      E.forEachEntry(e, (r, o) => {
        t(Qv(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
function Yv(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const us = {
  transitional: Jd,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        l = E.isObject(t)
      if ((l && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))) return o ? JSON.stringify(Zd(t)) : t
      if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t)) return t
      if (E.isArrayBufferView(t)) return t.buffer
      if (E.isURLSearchParams(t)) return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
      let u
      if (l) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1) return Hv(t, this.formSerializer).toString()
        if ((u = E.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData
          return vl(u ? { 'files[]': t } : t, s && new s(), this.formSerializer)
        }
      }
      return l || o ? (n.setContentType('application/json', !1), Yv(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || us.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (u) {
          if (i) throw u.name === 'SyntaxError' ? I.from(u, I.ERR_BAD_RESPONSE, this, null, this.response) : u
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: be.classes.FormData, Blob: be.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
}
E.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], e => {
  us.headers[e] = {}
})
const ss = us,
  Gv = E.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Xv = e => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            ;(o = i.indexOf(':')),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && Gv[n])) && (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  Va = Symbol('internals')
function Kn(e) {
  return e && String(e).trim().toLowerCase()
}
function go(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(go) : String(e)
}
function Jv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const qv = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Xl(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1
    if (E.isRegExp(r)) return r.test(t)
  }
}
function Zv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function bv(e, t) {
  const n = E.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach(r => {
    Object.defineProperty(e, r + n, {
      value: function (o, l, i) {
        return this[r].call(this, t, o, l, i)
      },
      configurable: !0,
    })
  })
}
class gl {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function l(u, s, a) {
      const f = Kn(s)
      if (!f) throw new Error('header name must be a non-empty string')
      const c = E.findKey(o, f)
      ;(!c || o[c] === void 0 || a === !0 || (a === void 0 && o[c] !== !1)) && (o[c || s] = go(u))
    }
    const i = (u, s) => E.forEach(u, (a, f) => l(a, f, s))
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : E.isString(t) && (t = t.trim()) && !qv(t)
          ? i(Xv(t), n)
          : t != null && l(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = Kn(t)), t)) {
      const r = E.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return Jv(o)
        if (E.isFunction(n)) return n.call(this, o, r)
        if (E.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Kn(t)), t)) {
      const r = E.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Xl(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function l(i) {
      if (((i = Kn(i)), i)) {
        const u = E.findKey(r, i)
        u && (!n || Xl(r, r[u], u, n)) && (delete r[u], (o = !0))
      }
    }
    return E.isArray(t) ? t.forEach(l) : l(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    for (; r--; ) {
      const l = n[r]
      ;(!t || Xl(this, this[l], l, t, !0)) && (delete this[l], (o = !0))
    }
    return o
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      E.forEach(this, (o, l) => {
        const i = E.findKey(r, l)
        if (i) {
          ;(n[i] = go(o)), delete n[l]
          return
        }
        const u = t ? Zv(l) : String(l).trim()
        u !== l && delete n[l], (n[u] = go(o)), (r[u] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach(o => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[Va] = this[Va] = { accessors: {} }).accessors,
      o = this.prototype
    function l(i) {
      const u = Kn(i)
      r[u] || (bv(o, i), (r[u] = !0))
    }
    return E.isArray(t) ? t.forEach(l) : l(t), this
  }
}
gl.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization'])
E.reduceDescriptors(gl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    },
  }
})
E.freezeMethods(gl)
const st = gl
function Jl(e, t) {
  const n = this || ss,
    r = t || n,
    o = st.from(r.headers)
  let l = r.data
  return (
    E.forEach(e, function (u) {
      l = u.call(n, l, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    l
  )
}
function bd(e) {
  return !!(e && e.__CANCEL__)
}
function Mr(e, t, n) {
  I.call(this, e ?? 'canceled', I.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
E.inherits(Mr, I, { __CANCEL__: !0 })
function eg(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          'Request failed with status code ' + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n,
        ),
      )
}
const tg = be.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, l) {
        const i = [e + '=' + encodeURIComponent(t)]
        E.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
          E.isString(r) && i.push('path=' + r),
          E.isString(o) && i.push('domain=' + o),
          l === !0 && i.push('secure'),
          (document.cookie = i.join('; '))
      },
      read(e) {
        const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
        return t ? decodeURIComponent(t[3]) : null
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5)
      },
    }
  : {
      write() {},
      read() {
        return null
      },
      remove() {},
    }
function ng(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function rg(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function ep(e, t) {
  return e && !ng(t) ? rg(e, t) : t
}
const og = be.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(l) {
        let i = l
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const u = E.isString(i) ? o(i) : i
          return u.protocol === r.protocol && u.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function lg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function ig(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    l = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        f = r[l]
      i || (i = a), (n[o] = s), (r[o] = a)
      let c = l,
        m = 0
      for (; c !== o; ) (m += n[c++]), (c = c % e)
      if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), a - i < t)) return
      const g = f && a - f
      return g ? Math.round((m * 1e3) / g) : void 0
    }
  )
}
function Ha(e, t) {
  let n = 0
  const r = ig(50, 250)
  return o => {
    const l = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      u = l - n,
      s = r(u),
      a = l <= i
    n = l
    const f = {
      loaded: l,
      total: i,
      progress: i ? l / i : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && i && a ? (i - l) / s : void 0,
      event: o,
    }
    ;(f[t ? 'download' : 'upload'] = !0), e(f)
  }
}
const ug = typeof XMLHttpRequest < 'u',
  sg =
    ug &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const l = st.from(e.headers).normalize()
        let { responseType: i, withXSRFToken: u } = e,
          s
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener('abort', s)
        }
        let f
        if (E.isFormData(o)) {
          if (be.hasStandardBrowserEnv || be.hasStandardBrowserWebWorkerEnv) l.setContentType(!1)
          else if ((f = l.getContentType()) !== !1) {
            const [v, ...w] = f
              ? f
                  .split(';')
                  .map(p => p.trim())
                  .filter(Boolean)
              : []
            l.setContentType([v || 'multipart/form-data', ...w].join('; '))
          }
        }
        let c = new XMLHttpRequest()
        if (e.auth) {
          const v = e.auth.username || '',
            w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ''
          l.set('Authorization', 'Basic ' + btoa(v + ':' + w))
        }
        const m = ep(e.baseURL, e.url)
        c.open(e.method.toUpperCase(), Xd(m, e.params, e.paramsSerializer), !0), (c.timeout = e.timeout)
        function g() {
          if (!c) return
          const v = st.from('getAllResponseHeaders' in c && c.getAllResponseHeaders()),
            p = {
              data: !i || i === 'text' || i === 'json' ? c.responseText : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            }
          eg(
            function (h) {
              n(h), a()
            },
            function (h) {
              r(h), a()
            },
            p,
          ),
            (c = null)
        }
        if (
          ('onloadend' in c
            ? (c.onloadend = g)
            : (c.onreadystatechange = function () {
                !c || c.readyState !== 4 || (c.status === 0 && !(c.responseURL && c.responseURL.indexOf('file:') === 0)) || setTimeout(g)
              }),
          (c.onabort = function () {
            c && (r(new I('Request aborted', I.ECONNABORTED, e, c)), (c = null))
          }),
          (c.onerror = function () {
            r(new I('Network Error', I.ERR_NETWORK, e, c)), (c = null)
          }),
          (c.ontimeout = function () {
            let w = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded'
            const p = e.transitional || Jd
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              r(new I(w, p.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED, e, c)),
              (c = null)
          }),
          be.hasStandardBrowserEnv && (u && E.isFunction(u) && (u = u(e)), u || (u !== !1 && og(m))))
        ) {
          const v = e.xsrfHeaderName && e.xsrfCookieName && tg.read(e.xsrfCookieName)
          v && l.set(e.xsrfHeaderName, v)
        }
        o === void 0 && l.setContentType(null),
          'setRequestHeader' in c &&
            E.forEach(l.toJSON(), function (w, p) {
              c.setRequestHeader(p, w)
            }),
          E.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' && c.addEventListener('progress', Ha(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' && c.upload && c.upload.addEventListener('progress', Ha(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = v => {
              c && (r(!v || v.type ? new Mr(null, e, c) : v), c.abort(), (c = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal && (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)))
        const y = lg(m)
        if (y && be.protocols.indexOf(y) === -1) {
          r(new I('Unsupported protocol ' + y + ':', I.ERR_BAD_REQUEST, e))
          return
        }
        c.send(o || null)
      })
    },
  tu = { http: jv, xhr: sg }
E.forEach(tu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Qa = e => `- ${e}`,
  ag = e => E.isFunction(e) || e === null || e === !1,
  tp = {
    getAdapter: e => {
      e = E.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const o = {}
      for (let l = 0; l < t; l++) {
        n = e[l]
        let i
        if (((r = n), !ag(n) && ((r = tu[(i = String(n)).toLowerCase()]), r === void 0))) throw new I(`Unknown adapter '${i}'`)
        if (r) break
        o[i || '#' + l] = r
      }
      if (!r) {
        const l = Object.entries(o).map(
          ([u, s]) => `adapter ${u} ` + (s === !1 ? 'is not supported by the environment' : 'is not available in the build'),
        )
        let i = t
          ? l.length > 1
            ? `since :
` +
              l.map(Qa).join(`
`)
            : ' ' + Qa(l[0])
          : 'as no adapter specified'
        throw new I('There is no suitable adapter to dispatch the request ' + i, 'ERR_NOT_SUPPORT')
      }
      return r
    },
    adapters: tu,
  }
function ql(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Mr(null, e)
}
function Ka(e) {
  return (
    ql(e),
    (e.headers = st.from(e.headers)),
    (e.data = Jl.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 && e.headers.setContentType('application/x-www-form-urlencoded', !1),
    tp
      .getAdapter(e.adapter || ss.adapter)(e)
      .then(
        function (r) {
          return ql(e), (r.data = Jl.call(e, e.transformResponse, r)), (r.headers = st.from(r.headers)), r
        },
        function (r) {
          return (
            bd(r) ||
              (ql(e),
              r &&
                r.response &&
                ((r.response.data = Jl.call(e, e.transformResponse, r.response)), (r.response.headers = st.from(r.response.headers)))),
            Promise.reject(r)
          )
        },
      )
  )
}
const Ya = e => (e instanceof st ? e.toJSON() : e)
function Ln(e, t) {
  t = t || {}
  const n = {}
  function r(a, f, c) {
    return E.isPlainObject(a) && E.isPlainObject(f)
      ? E.merge.call({ caseless: c }, a, f)
      : E.isPlainObject(f)
        ? E.merge({}, f)
        : E.isArray(f)
          ? f.slice()
          : f
  }
  function o(a, f, c) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(a)) return r(void 0, a, c)
    } else return r(a, f, c)
  }
  function l(a, f) {
    if (!E.isUndefined(f)) return r(void 0, f)
  }
  function i(a, f) {
    if (E.isUndefined(f)) {
      if (!E.isUndefined(a)) return r(void 0, a)
    } else return r(void 0, f)
  }
  function u(a, f, c) {
    if (c in t) return r(a, f)
    if (c in e) return r(void 0, a)
  }
  const s = {
    url: l,
    method: l,
    data: l,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (a, f) => o(Ya(a), Ya(f), !0),
  }
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = s[f] || o,
        m = c(e[f], t[f], f)
      ;(E.isUndefined(m) && c !== u) || (n[f] = m)
    }),
    n
  )
}
const np = '1.6.7',
  as = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
  as[e] = function (r) {
    return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
  }
})
const Ga = {}
as.transitional = function (t, n, r) {
  function o(l, i) {
    return '[Axios v' + np + "] Transitional option '" + l + "'" + i + (r ? '. ' + r : '')
  }
  return (l, i, u) => {
    if (t === !1) throw new I(o(i, ' has been removed' + (n ? ' in ' + n : '')), I.ERR_DEPRECATED)
    return (
      n && !Ga[i] && ((Ga[i] = !0), console.warn(o(i, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
      t ? t(l, i, u) : !0
    )
  }
}
function cg(e, t, n) {
  if (typeof e != 'object') throw new I('options must be an object', I.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const l = r[o],
      i = t[l]
    if (i) {
      const u = e[l],
        s = u === void 0 || i(u, l, e)
      if (s !== !0) throw new I('option ' + l + ' must be ' + s, I.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new I('Unknown option ' + l, I.ERR_BAD_OPTION)
  }
}
const nu = { assertOptions: cg, validators: as },
  yt = nu.validators
class Go {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new Wa(), response: new Wa() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let o
        Error.captureStackTrace ? Error.captureStackTrace((o = {})) : (o = new Error())
        const l = o.stack ? o.stack.replace(/^.+\n/, '') : ''
        r.stack
          ? l &&
            !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + l)
          : (r.stack = l)
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = Ln(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: l } = n
    r !== void 0 &&
      nu.assertOptions(
        r,
        {
          silentJSONParsing: yt.transitional(yt.boolean),
          forcedJSONParsing: yt.transitional(yt.boolean),
          clarifyTimeoutError: yt.transitional(yt.boolean),
        },
        !1,
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : nu.assertOptions(o, { encode: yt.function, serialize: yt.function }, !0)),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let i = l && E.merge(l.common, l[n.method])
    l &&
      E.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], y => {
        delete l[y]
      }),
      (n.headers = st.concat(i, l))
    const u = []
    let s = !0
    this.interceptors.request.forEach(function (v) {
      ;(typeof v.runWhen == 'function' && v.runWhen(n) === !1) || ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected))
    })
    const a = []
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected)
    })
    let f,
      c = 0,
      m
    if (!s) {
      const y = [Ka.bind(this), void 0]
      for (y.unshift.apply(y, u), y.push.apply(y, a), m = y.length, f = Promise.resolve(n); c < m; ) f = f.then(y[c++], y[c++])
      return f
    }
    m = u.length
    let g = n
    for (c = 0; c < m; ) {
      const y = u[c++],
        v = u[c++]
      try {
        g = y(g)
      } catch (w) {
        v.call(this, w)
        break
      }
    }
    try {
      f = Ka.call(this, g)
    } catch (y) {
      return Promise.reject(y)
    }
    for (c = 0, m = a.length; c < m; ) f = f.then(a[c++], a[c++])
    return f
  }
  getUri(t) {
    t = Ln(this.defaults, t)
    const n = ep(t.baseURL, t.url)
    return Xd(n, t.params, t.paramsSerializer)
  }
}
E.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Go.prototype[t] = function (n, r) {
    return this.request(Ln(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
E.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (l, i, u) {
      return this.request(Ln(u || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: l, data: i }))
    }
  }
  ;(Go.prototype[t] = n()), (Go.prototype[t + 'Form'] = n(!0))
})
const wo = Go
class cs {
  constructor(t) {
    if (typeof t != 'function') throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (l) {
      n = l
    })
    const r = this
    this.promise.then(o => {
      if (!r._listeners) return
      let l = r._listeners.length
      for (; l-- > 0; ) r._listeners[l](o)
      r._listeners = null
    }),
      (this.promise.then = o => {
        let l
        const i = new Promise(u => {
          r.subscribe(u), (l = u)
        }).then(o)
        return (
          (i.cancel = function () {
            r.unsubscribe(l)
          }),
          i
        )
      }),
      t(function (l, i, u) {
        r.reason || ((r.reason = new Mr(l, i, u)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new cs(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
const fg = cs
function dg(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function pg(e) {
  return E.isObject(e) && e.isAxiosError === !0
}
const ru = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(ru).forEach(([e, t]) => {
  ru[t] = e
})
const hg = ru
function rp(e) {
  const t = new wo(e),
    n = Md(wo.prototype.request, t)
  return (
    E.extend(n, wo.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return rp(Ln(e, o))
    }),
    n
  )
}
const q = rp(ss)
q.Axios = wo
q.CanceledError = Mr
q.CancelToken = fg
q.isCancel = bd
q.VERSION = np
q.toFormData = vl
q.AxiosError = I
q.Cancel = q.CanceledError
q.all = function (t) {
  return Promise.all(t)
}
q.spread = dg
q.isAxiosError = pg
q.mergeConfig = Ln
q.AxiosHeaders = st
q.formToJSON = e => Zd(E.isHTMLForm(e) ? new FormData(e) : e)
q.getAdapter = tp.getAdapter
q.HttpStatusCode = hg
q.default = q
const op = e => q.get(String(e)),
  Rr = 10,
  lp = () => async (e, t) => {
    var n
    try {
      const r = (n = t().pastArticles) == null ? void 0 : n.counter
      console.log('load past articles api', r), e({ type: yo, payload: { loading: !0 } })
      const o = []
      for (let u = 0; u < Rr; u++) o.push(op(`https://hacker-news.firebaseio.com/v0/item/${r + u}.json?print=pretty`))
      const l = await Promise.all(o),
        i = []
      l.forEach(u => i.push(u.data)), e({ type: Id, payload: { articles: i, counter: r + Rr } }), e({ type: yo, payload: { loading: !1 } })
    } catch (r) {
      console.log(r), e({ type: yo, payload: { loading: !1 } })
    }
  },
  ip = 'LOAD_NEW_ARTICLES',
  So = 'LOAD_NEW_ARTICLES_SUCCESS',
  up = () => async (e, t) => {
    var n
    try {
      const r = (n = t().newArticles) == null ? void 0 : n.counter
      console.log('load new articles api', r), e({ type: So, payload: { loading: !0 } })
      const o = [],
        { data: l } = await q.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      for (let s = 0; s < Rr && r <= l.length; s++)
        l[r + s] && o.push(op(`https://hacker-news.firebaseio.com/v0/item/${l[r + s]}.json?print=pretty`))
      const i = await Promise.all(o),
        u = []
      i.forEach(s => u.push(s.data)),
        e({ type: ip, payload: { articles: u, counter: r === l.length ? r : r + Rr } }),
        e({ type: So, payload: { loading: !1 } })
    } catch (r) {
      console.log(r), e({ type: So, payload: { loading: !1 } })
    }
  },
  Xo = ({ children: e, fontSize: t = 16, fontWeight: n = 'bold', color: r = 'black', style: o = {}, ...l }) => {
    var i = a => {
        switch (a) {
          case 'regular':
            return 400
          case 'bold':
            return 700
          case 'extra':
            return 800
          default:
            return 400
        }
      },
      u = i(n),
      s = t / 10
    return R.jsx('div', {
      ...l,
      className: 'heading',
      style: { fontWeight: u, fontSize: `${s}em`, color: r, ...o },
      dangerouslySetInnerHTML: { __html: e },
    })
  }
function mg() {
  return R.jsx('div', { className: 'spinner-container', children: R.jsx('div', { className: 'loading-spinner' }) })
}
const yg = ({ loadPastArticles: e, loadNewArticles: t }) => {
  const {
      newArticlesLoading: n,
      pastArticlesLoading: r,
      searchQuery: o,
      switchValue: l,
    } = Nd(u => ({
      switchValue: u.switch.switchValue,
      searchQuery: u.switch.searchQuery,
      newArticlesLoading: u.newArticles.loading,
      pastArticlesLoading: u.pastArticles.loading,
    })),
    i = x.useCallback(() => {
      n || r || (l ? t() : l || e())
    }, [e, t, l, n, r])
  return (
    x.useEffect(() => {
      e(), t()
    }, [e, t]),
    o
      ? R.jsx(R.Fragment, {})
      : R.jsx('div', {
          className: 'loadMoreBtn center',
          onClick: i,
          children: R.jsx('button', {
            className: 'loadMoreContent',
            children: n || r ? R.jsx(mg, {}) : R.jsx(Xo, { fontWeight: 'bold', fontSize: 10, children: 'Load More' }),
          }),
        })
  )
}
var vg = { loadPastArticles: lp, loadNewArticles: up }
const gg = os(null, vg)(yg),
  Zl = ({ children: e, fontSize: t = 16, fontWeight: n = 'regular', color: r = 'black', style: o = {}, ...l }) => {
    var i = a => {
        switch (a) {
          case 'bold':
            return 700
          case 'extra':
            return 800
          default:
            return 400
        }
      },
      u = i(n),
      s = t / 10
    return R.jsx('div', {
      ...l,
      className: 'paragraph',
      style: { fontWeight: u, fontSize: `${s}em`, color: r, ...o },
      dangerouslySetInnerHTML: { __html: e },
    })
  },
  wg =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='559.98px'%20height='559.98px'%20viewBox='0%200%20559.98%20559.98'%20style='enable-background:new%200%200%20559.98%20559.98;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M279.99,0C125.601,0,0,125.601,0,279.99c0,154.39,125.601,279.99,279.99,279.99c154.39,0,279.99-125.601,279.99-279.99%20C559.98,125.601,434.38,0,279.99,0z%20M279.99,498.78c-120.644,0-218.79-98.146-218.79-218.79%20c0-120.638,98.146-218.79,218.79-218.79s218.79,98.152,218.79,218.79C498.78,400.634,400.634,498.78,279.99,498.78z'/%3e%3cpath%20d='M304.226,280.326V162.976c0-13.103-10.618-23.721-23.716-23.721c-13.102,0-23.721,10.618-23.721,23.721v124.928%20c0,0.373,0.092,0.723,0.11,1.096c-0.312,6.45,1.91,12.999,6.836,17.926l88.343,88.336c9.266,9.266,24.284,9.266,33.543,0%20c9.26-9.266,9.266-24.284,0-33.544L304.226,280.326z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e",
  no = ({ title: e, text: t, by: n, url: r, time: o, descendants: l, innerRef: i }) =>
    R.jsx(R.Fragment, {
      children: R.jsx(Gy, {
        ref: i,
        to: r || '',
        target: '_blank',
        className: `${!r && 'no-url'}`,
        children: R.jsxs('div', {
          className: 'card',
          children: [
            R.jsx(Xo, { fontWeight: 'bold', fontSize: 12, children: e || 'Lorem ipsum dolor sit amet.' }),
            R.jsx(Zl, {
              fontWeight: 'regular',
              fontSize: 10,
              children:
                t ||
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima voluptatibus at ab atque officiis, ipsa totam. Ullam
              amet facere possimus eveniet mollitia non reprehenderit iusto expedita, illo fugiat ab quidem, provident architecto
              voluptatibus sint modi consectetur ratione ut eos?`,
            }),
            R.jsxs('div', {
              className: 'card-details',
              children: [
                R.jsx('img', { src: wg, alt: 'svgClockk', width: '13px' }),
                R.jsx(Zl, {
                  fontWeight: 'regular',
                  fontSize: 8,
                  children: o ? String(new Date(o * 1e3)).split('GMT')[0] : 'Time Not Available',
                }),
                R.jsx('p', { children: ' | ' }),
                R.jsx(Zl, { fontWeight: 'regular', fontSize: 8, children: (l || 0) + ' Comments' }),
              ],
            }),
          ],
        }),
      }),
    })
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var jt = function () {
  return (
    (jt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r]
          for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l])
        }
        return t
      }),
    jt.apply(this, arguments)
  )
}
function Sg(e, t) {
  var n = {}
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
  return n
}
var Eg = function () {
    return Math.random().toString(36).substring(6)
  },
  xg = function (e) {
    var t = e.animate,
      n = t === void 0 ? !0 : t,
      r = e.animateBegin,
      o = e.backgroundColor,
      l = o === void 0 ? '#f5f6f7' : o,
      i = e.backgroundOpacity,
      u = i === void 0 ? 1 : i,
      s = e.baseUrl,
      a = s === void 0 ? '' : s,
      f = e.children,
      c = e.foregroundColor,
      m = c === void 0 ? '#eee' : c,
      g = e.foregroundOpacity,
      y = g === void 0 ? 1 : g,
      v = e.gradientRatio,
      w = v === void 0 ? 2 : v,
      p = e.gradientDirection,
      d = p === void 0 ? 'left-right' : p,
      h = e.uniqueKey,
      S = e.interval,
      k = S === void 0 ? 0.25 : S,
      T = e.rtl,
      P = T === void 0 ? !1 : T,
      N = e.speed,
      U = N === void 0 ? 1.2 : N,
      L = e.style,
      ee = L === void 0 ? {} : L,
      re = e.title,
      ge = re === void 0 ? 'Loading...' : re,
      Ut = e.beforeMask,
      we = Ut === void 0 ? null : Ut,
      ht = Sg(e, [
        'animate',
        'animateBegin',
        'backgroundColor',
        'backgroundOpacity',
        'baseUrl',
        'children',
        'foregroundColor',
        'foregroundOpacity',
        'gradientRatio',
        'gradientDirection',
        'uniqueKey',
        'interval',
        'rtl',
        'speed',
        'style',
        'title',
        'beforeMask',
      ]),
      Be = h || Eg(),
      _ = Be + '-diff',
      A = Be + '-animated-diff',
      j = Be + '-aria',
      $ = P ? { transform: 'scaleX(-1)' } : null,
      B = '0; ' + k + '; 1',
      Se = U + 's',
      Ae = d === 'top-bottom' ? 'rotate(90)' : void 0
    return x.createElement(
      'svg',
      jt({ 'aria-labelledby': j, role: 'img', style: jt(jt({}, ee), $) }, ht),
      ge ? x.createElement('title', { id: j }, ge) : null,
      we && x.isValidElement(we) ? we : null,
      x.createElement('rect', {
        role: 'presentation',
        x: '0',
        y: '0',
        width: '100%',
        height: '100%',
        clipPath: 'url(' + a + '#' + _ + ')',
        style: { fill: 'url(' + a + '#' + A + ')' },
      }),
      x.createElement(
        'defs',
        null,
        x.createElement('clipPath', { id: _ }, f),
        x.createElement(
          'linearGradient',
          { id: A, gradientTransform: Ae },
          x.createElement(
            'stop',
            { offset: '0%', stopColor: l, stopOpacity: u },
            n &&
              x.createElement('animate', {
                attributeName: 'offset',
                values: -w + '; ' + -w + '; 1',
                keyTimes: B,
                dur: Se,
                repeatCount: 'indefinite',
                begin: r,
              }),
          ),
          x.createElement(
            'stop',
            { offset: '50%', stopColor: m, stopOpacity: y },
            n &&
              x.createElement('animate', {
                attributeName: 'offset',
                values: -w / 2 + '; ' + -w / 2 + '; ' + (1 + w / 2),
                keyTimes: B,
                dur: Se,
                repeatCount: 'indefinite',
                begin: r,
              }),
          ),
          x.createElement(
            'stop',
            { offset: '100%', stopColor: l, stopOpacity: u },
            n &&
              x.createElement('animate', {
                attributeName: 'offset',
                values: '0; 0; ' + (1 + w),
                keyTimes: B,
                dur: Se,
                repeatCount: 'indefinite',
                begin: r,
              }),
          ),
        ),
      ),
    )
  },
  sp = function (e) {
    return e.children ? x.createElement(xg, jt({}, e)) : x.createElement(Cg, jt({}, e))
  },
  Cg = function (e) {
    return x.createElement(
      sp,
      jt({ viewBox: '0 0 476 124' }, e),
      x.createElement('rect', { x: '48', y: '8', width: '88', height: '6', rx: '3' }),
      x.createElement('rect', { x: '48', y: '26', width: '52', height: '6', rx: '3' }),
      x.createElement('rect', { x: '0', y: '56', width: '410', height: '6', rx: '3' }),
      x.createElement('rect', { x: '0', y: '72', width: '380', height: '6', rx: '3' }),
      x.createElement('rect', { x: '0', y: '88', width: '178', height: '6', rx: '3' }),
      x.createElement('circle', { cx: '20', cy: '20', r: '20' }),
    )
  }
const kg = sp
function Xa() {
  const { innerWidth: e, innerHeight: t } = window
  return { width: e, height: t }
}
function _g() {
  const [e, t] = x.useState(Xa())
  return (
    x.useEffect(() => {
      function n() {
        t(Xa())
      }
      return window.addEventListener('resize', n), () => window.removeEventListener('resize', n)
    }, []),
    e
  )
}
const Pg = e =>
    R.jsx('div', {
      style: { width: `${_g().width < 577 ? '84vw' : '68vw'}` },
      children: R.jsxs(kg, {
        speed: 3,
        backgroundColor: '#ebebeb',
        foregroundColor: '#b0b0b0',
        style: { width: '100%' },
        ...e,
        children: [
          R.jsx('rect', { x: '2%', y: '5', rx: '3', ry: '3', width: '95%', height: '6' }),
          R.jsx('rect', { x: '2%', y: '24', rx: '3', ry: '3', width: '95%', height: '50' }),
          R.jsx('rect', { x: '2%', y: '88', rx: '3', ry: '3', width: '20%', height: '6' }),
          R.jsx('rect', { x: '28%', y: '88', rx: '3', ry: '3', width: '69%', height: '6' }),
          R.jsx('circle', { cx: '25%', cy: '91', r: '2%' }),
        ],
      }),
    }),
  Rg = ({ loadPastArticles: e, loadNewArticles: t }) => {
    const {
        newArticles: { articles: n, loading: r },
        pastArticles: { articles: o, loading: l },
        searchQuery: i,
        switchValue: u,
      } = Nd(g => ({
        switchValue: g.switch.switchValue,
        searchQuery: g.switch.searchQuery,
        newArticles: g.newArticles,
        pastArticles: g.pastArticles,
      })),
      [s, a] = x.useState(!0),
      f = x.useRef(),
      c = (u ? n : o).filter(g => {
        var p, d
        const y = String(i == null ? void 0 : i.toLowerCase()),
          v = String((p = g.title) == null ? void 0 : p.toLowerCase()),
          w = String((d = g.text) == null ? void 0 : d.toLowerCase())
        return !!(v.includes(y) || w.includes(y))
      })
    console.log(c),
      x.useEffect(() => {
        r === !1 &&
          l === !1 &&
          setTimeout(() => {
            a(g => !1)
          }, 2500)
      }, [r, l, u])
    const m = x.useCallback(
      g => {
        r ||
          l ||
          i ||
          (f.current && f.current.disconnect(),
          (f.current = new IntersectionObserver(y => {
            console.log(y[0]), y[0].isIntersecting && (u ? t() : e())
          })),
          g && f.current.observe(g))
      },
      [r, l, u, t, e, i],
    )
    return R.jsxs('div', {
      className: 'threadPanel',
      children: [
        s
          ? Array.from({ length: Rr }).map((g, y) => R.jsx(Pg, {}, y + 1))
          : u
            ? c.map((g, y) => (c.length === y + 1 ? R.jsx(no, { innerRef: m, ...g }, y + 1) : R.jsx(no, { ...g }, y + 1)))
            : c.map((g, y) => (c.length === y + 1 ? R.jsx(no, { innerRef: m, ...g }, y + 1) : R.jsx(no, { ...g }, y + 1))),
        c.length === 0 && R.jsx('h1', { className: 'no-results', children: 'Clear search and load more articles to have desired results' }),
      ],
    })
  }
var Og = { loadPastArticles: lp, loadNewArticles: up }
const Tg = os(null, Og)(Rg),
  ap = 'SWITCH_TO_NEW',
  cp = 'SWITCH_TO_PAST',
  fp = 'ADD_SEARCH_QUERY',
  dp = 'CLEAR_SEARCH_QUERY',
  Ng = () => e => {
    try {
      e({ type: ap })
    } catch (t) {
      console.log(t)
    }
  },
  Lg = () => e => {
    try {
      e({ type: cp })
    } catch (t) {
      console.log(t)
    }
  },
  Ag = e => t => {
    try {
      console.log('query', e), t({ type: fp, payload: e })
    } catch (n) {
      console.log(n)
    }
  },
  jg = () => e => {
    try {
      e({ type: dp })
    } catch (t) {
      console.log(t)
    }
  },
  zg = ({ switchToNew: e, switchToPast: t, clearSearchQuery: n, addSearchQuery: r }) => {
    const [o, l] = x.useState(!0),
      i = u => {
        u === 'new' ? (e(), l(!0)) : (t(), l(!1))
      }
    return R.jsxs('div', {
      className: 'switcher',
      children: [
        R.jsxs('div', {
          className: 'swtich-buttons',
          children: [
            R.jsx('div', {
              onClick: () => i('new'),
              className: `option option1 ${o ? 'addColor' : ''} center`,
              children: R.jsx(Xo, { fontWeight: 'extra', fontSize: 10, children: 'New' }),
            }),
            R.jsx('div', {
              onClick: () => i('past'),
              className: `option option2 ${o ? '' : 'addColor'} center`,
              children: R.jsx(Xo, { fontWeight: 'extra', fontSize: 10, children: 'Past' }),
            }),
          ],
        }),
        R.jsx('input', { className: 'switch-input', onChange: u => r(u.target.value), type: 'text', placeholder: 'Search' }),
      ],
    })
  },
  Fg = { switchToNew: Ng, switchToPast: Lg, addSearchQuery: Ag, clearSearchQuery: jg },
  Ig = os(null, Fg)(zg),
  Mg = () =>
    R.jsxs('div', {
      className: 'center hackerPanel',
      children: [
        R.jsxs('div', { className: 'headerWrapper', children: [R.jsx(kd, { changeColor: !0 }), R.jsx(Ig, {})] }),
        R.jsxs('div', { className: 'threadPanelWrapper', children: [R.jsx(Tg, {}), R.jsx(gg, {}), R.jsx(Jy, {})] }),
      ],
    }),
  Dg = () => R.jsx('div', { className: 'container ', children: R.jsx(Mg, {}) }),
  Ug = () => R.jsx(Qy, { children: R.jsx(Dy, { children: R.jsx(Cd, { path: '/', element: R.jsx(Dg, {}) }) }) })
function oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var $g = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Ja = $g,
  bl = () => Math.random().toString(36).substring(7).split('').join('.'),
  Bg = {
    INIT: `@@redux/INIT${bl()}`,
    REPLACE: `@@redux/REPLACE${bl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${bl()}`,
  },
  Or = Bg
function fs(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function ds(e, t, n) {
  if (typeof e != 'function') throw new Error(oe(2))
  if ((typeof t == 'function' && typeof n == 'function') || (typeof n == 'function' && typeof arguments[3] == 'function'))
    throw new Error(oe(0))
  if ((typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)), typeof n < 'u')) {
    if (typeof n != 'function') throw new Error(oe(1))
    return n(ds)(e, t)
  }
  let r = e,
    o = t,
    l = new Map(),
    i = l,
    u = 0,
    s = !1
  function a() {
    i === l &&
      ((i = new Map()),
      l.forEach((w, p) => {
        i.set(p, w)
      }))
  }
  function f() {
    if (s) throw new Error(oe(3))
    return o
  }
  function c(w) {
    if (typeof w != 'function') throw new Error(oe(4))
    if (s) throw new Error(oe(5))
    let p = !0
    a()
    const d = u++
    return (
      i.set(d, w),
      function () {
        if (p) {
          if (s) throw new Error(oe(6))
          ;(p = !1), a(), i.delete(d), (l = null)
        }
      }
    )
  }
  function m(w) {
    if (!fs(w)) throw new Error(oe(7))
    if (typeof w.type > 'u') throw new Error(oe(8))
    if (typeof w.type != 'string') throw new Error(oe(17))
    if (s) throw new Error(oe(9))
    try {
      ;(s = !0), (o = r(o, w))
    } finally {
      s = !1
    }
    return (
      (l = i).forEach(d => {
        d()
      }),
      w
    )
  }
  function g(w) {
    if (typeof w != 'function') throw new Error(oe(10))
    ;(r = w), m({ type: Or.REPLACE })
  }
  function y() {
    const w = c
    return {
      subscribe(p) {
        if (typeof p != 'object' || p === null) throw new Error(oe(11))
        function d() {
          const S = p
          S.next && S.next(f())
        }
        return d(), { unsubscribe: w(d) }
      },
      [Ja]() {
        return this
      },
    }
  }
  return m({ type: Or.INIT }), { dispatch: m, subscribe: c, getState: f, replaceReducer: g, [Ja]: y }
}
function pp(e, t, n) {
  return ds(e, t, n)
}
function Wg(e) {
  Object.keys(e).forEach(t => {
    const n = e[t]
    if (typeof n(void 0, { type: Or.INIT }) > 'u') throw new Error(oe(12))
    if (typeof n(void 0, { type: Or.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(oe(13))
  })
}
function hp(e) {
  const t = Object.keys(e),
    n = {}
  for (let l = 0; l < t.length; l++) {
    const i = t[l]
    typeof e[i] == 'function' && (n[i] = e[i])
  }
  const r = Object.keys(n)
  let o
  try {
    Wg(n)
  } catch (l) {
    o = l
  }
  return function (i = {}, u) {
    if (o) throw o
    let s = !1
    const a = {}
    for (let f = 0; f < r.length; f++) {
      const c = r[f],
        m = n[c],
        g = i[c],
        y = m(g, u)
      if (typeof y > 'u') throw (u && u.type, new Error(oe(14)))
      ;(a[c] = y), (s = s || y !== g)
    }
    return (s = s || r.length !== Object.keys(i).length), s ? a : i
  }
}
function qa(e, t) {
  return function (...n) {
    return t(e.apply(this, n))
  }
}
function Vg(e, t) {
  if (typeof e == 'function') return qa(e, t)
  if (typeof e != 'object' || e === null) throw new Error(oe(16))
  const n = {}
  for (const r in e) {
    const o = e[r]
    typeof o == 'function' && (n[r] = qa(o, t))
  }
  return n
}
function mp(...e) {
  return e.length === 0
    ? t => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        )
}
function yp(...e) {
  return t => (n, r) => {
    const o = t(n, r)
    let l = () => {
      throw new Error(oe(15))
    }
    const i = { getState: o.getState, dispatch: (s, ...a) => l(s, ...a) },
      u = e.map(s => s(i))
    return (l = mp(...u)(o.dispatch)), { ...o, dispatch: l }
  }
}
function Hg(e) {
  return fs(e) && 'type' in e && typeof e.type == 'string'
}
const Qg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __DO_NOT_USE__ActionTypes: Or,
        applyMiddleware: yp,
        bindActionCreators: Vg,
        combineReducers: hp,
        compose: mp,
        createStore: ds,
        isAction: Hg,
        isPlainObject: fs,
        legacy_createStore: pp,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Kg = xp(Qg)
var Za = Kg.compose,
  Yg =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0) return typeof arguments[0] == 'object' ? Za : Za.apply(null, arguments)
        }
function vp(e) {
  var t = function (r) {
    var o = r.dispatch,
      l = r.getState
    return function (i) {
      return function (u) {
        return typeof u == 'function' ? u(o, l, e) : i(u)
      }
    }
  }
  return t
}
var gp = vp()
gp.withExtraArgument = vp
const Gg = gp,
  Xg = { articles: [], loading: !1, counter: 1 },
  Jg = (e = Xg, t) => {
    const { type: n, payload: r } = t
    switch (n) {
      case Id:
        return { ...e, articles: [...e.articles, ...r.articles], counter: r.counter }
      case yo:
        return { ...e, loading: r.loading }
      default:
        return e
    }
  },
  qg = { switchValue: !0, searchQuery: '' },
  Zg = (e = qg, t) => {
    const { type: n } = t
    switch (n) {
      case ap:
        return { ...e, switchValue: !0 }
      case cp:
        return { ...e, switchValue: !1 }
      case fp:
        return { ...e, searchQuery: t.payload }
      case dp:
        return { ...e, searchQuery: '' }
      default:
        return e
    }
  },
  bg = { articles: [], loading: !1, counter: 0 },
  e1 = (e = bg, t) => {
    const { type: n, payload: r } = t
    switch (n) {
      case ip:
        return { ...e, articles: [...e.articles, ...r.articles], counter: r.counter }
      case So:
        return { ...e, loading: r.loading }
      default:
        return e
    }
  },
  t1 = hp({ pastArticles: Jg, switch: Zg, newArticles: e1 }),
  n1 = [Gg],
  r1 = pp(t1, Yg(yp(...n1)))
ti.createRoot(document.getElementById('root')).render(R.jsx(su.StrictMode, { children: R.jsx(Z0, { store: r1, children: R.jsx(Ug, {}) }) }))
