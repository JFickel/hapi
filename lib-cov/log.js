/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['log.js']) {
  _$jscoverage['log.js'] = [];
  _$jscoverage['log.js'][8] = 0;
  _$jscoverage['log.js'][13] = 0;
  _$jscoverage['log.js'][18] = 0;
  _$jscoverage['log.js'][20] = 0;
  _$jscoverage['log.js'][26] = 0;
  _$jscoverage['log.js'][28] = 0;
  _$jscoverage['log.js'][34] = 0;
  _$jscoverage['log.js'][36] = 0;
  _$jscoverage['log.js'][38] = 0;
  _$jscoverage['log.js'][41] = 0;
  _$jscoverage['log.js'][43] = 0;
  _$jscoverage['log.js'][45] = 0;
  _$jscoverage['log.js'][47] = 0;
  _$jscoverage['log.js'][49] = 0;
  _$jscoverage['log.js'][51] = 0;
  _$jscoverage['log.js'][55] = 0;
  _$jscoverage['log.js'][58] = 0;
  _$jscoverage['log.js'][60] = 0;
  _$jscoverage['log.js'][65] = 0;
  _$jscoverage['log.js'][73] = 0;
  _$jscoverage['log.js'][75] = 0;
  _$jscoverage['log.js'][77] = 0;
  _$jscoverage['log.js'][80] = 0;
  _$jscoverage['log.js'][81] = 0;
  _$jscoverage['log.js'][91] = 0;
}
_$jscoverage['log.js'][8]++;
var Process = require("./process");
_$jscoverage['log.js'][13]++;
var internals = {};
_$jscoverage['log.js'][18]++;
exports.info = (function (message, req) {
  _$jscoverage['log.js'][20]++;
  internals.log("info", message, req);
});
_$jscoverage['log.js'][26]++;
exports.err = (function (error, req) {
  _$jscoverage['log.js'][28]++;
  internals.log("err", error, req);
});
_$jscoverage['log.js'][34]++;
internals.log = (function (level, message, req) {
  _$jscoverage['log.js'][36]++;
  if (process.env.NODE_ENV === "test") {
    _$jscoverage['log.js'][38]++;
    return;
  }
  _$jscoverage['log.js'][41]++;
  if (Process.settings === null || Process.settings.log.levels[level]) {
    _$jscoverage['log.js'][43]++;
    if (typeof message === "string") {
      _$jscoverage['log.js'][45]++;
      internals.print(level, message, req);
    }
    else {
      _$jscoverage['log.js'][47]++;
      if (req) {
        _$jscoverage['log.js'][49]++;
        if (message.type === "oauth") {
          _$jscoverage['log.js'][51]++;
          internals.print(level, "OAuth: " + message.error + " (" + message.text + ")", req);
        }
        else {
          _$jscoverage['log.js'][55]++;
          internals.print(level, "HTTP: " + message.code + " " + (message.message || message.text), req);
        }
        _$jscoverage['log.js'][58]++;
        if (message.log) {
          _$jscoverage['log.js'][60]++;
          internals.print(level, "Log: " + JSON.stringify(message.log), req);
        }
      }
      else {
        _$jscoverage['log.js'][65]++;
        internals.print(level, JSON.stringify(message));
      }
    }
  }
});
_$jscoverage['log.js'][73]++;
internals.print = (function (level, message, req) {
  _$jscoverage['log.js'][75]++;
  function pad(value) {
    _$jscoverage['log.js'][77]++;
    return (value < 10? "0": "") + value;
}
  _$jscoverage['log.js'][80]++;
  var now = new Date();
  _$jscoverage['log.js'][81]++;
  var timestamp = (now.getYear() - 100).toString() + pad(now.getMonth() + 1) + pad(now.getDate()) + "/" + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds()) + "." + now.getMilliseconds();
  _$jscoverage['log.js'][91]++;
  console.log(timestamp + ", " + level + ", " + message + (req? ", " + req.method + ", " + req.url: ""));
});
_$jscoverage['log.js'].source = ["/*","* Copyright (c) 2012 Walmart. All rights reserved. Copyrights licensed under the New BSD License.","* See LICENSE file included with this code project for license terms.","*/","","// Load modules","","var Process = require('./process');","","","// Declare internals","","var internals = {};","","","// Info","","exports.info = function (message, req) {","","    internals.log('info', message, req);","};","","","// Err","","exports.err = function (error, req) {","","    internals.log('err', error, req);","};","","","// Log output","","internals.log = function (level, message, req) {","","    if (process.env.NODE_ENV === 'test') {","","        return;","    }","","    if (Process.settings === null || Process.settings.log.levels[level]) {","","        if (typeof message === 'string') {","","            internals.print(level, message, req);","        }","        else if (req) {","","            if (message.type === 'oauth') {","","                internals.print(level, 'OAuth: ' + message.error + ' (' + message.text + ')', req);","            }","            else {","","                internals.print(level, 'HTTP: ' + message.code + ' ' + (message.message || message.text), req);","            }","","            if (message.log) {","","                internals.print(level, 'Log: ' + JSON.stringify(message.log), req);","            }","        }","        else {","","            internals.print(level, JSON.stringify(message));","        }","    }","};","","","// Format output","","internals.print = function (level, message, req) {","","    function pad(value) {","","        return (value &lt; 10 ? '0' : '') + value;","    }","","    var now = new Date();","    var timestamp = (now.getYear() - 100).toString() +","                    pad(now.getMonth() + 1) +","                    pad(now.getDate()) +","                    '/' +","                    pad(now.getHours()) +","                    pad(now.getMinutes()) +","                    pad(now.getSeconds()) +","                    '.' +","                    now.getMilliseconds();","","    console.log(timestamp + ', ' + level + ', ' + message + (req ? ', ' + req.method + ', ' + req.url : ''));","};"];