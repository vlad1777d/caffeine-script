"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let StringStn,
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped,
    escapeMustEscapes;
  ({
    escapeJavascriptString,
    deescapeSpaces,
    escapeUnescaped,
    escapeMustEscapes
  } = Caf.import(
    [
      "escapeJavascriptString",
      "deescapeSpaces",
      "escapeUnescaped",
      "escapeMustEscapes"
    ],
    [require("../../StandardImport"), require("../../Lib"), global]
  ));
  return StringStn = Caf.defClass(
    class StringStn extends require("../BaseStn") {},
    function(StringStn, classSuper, instanceSuper) {
      this.prototype.toJs = function() {
        return escapeJavascriptString(deescapeSpaces(this.value)).replace(
          /\\\\/g,
          "\\"
        );
      };
      this.prototype.compactNewLines = function(compactLeft, compactRight) {
        if (compactLeft) {
          this.props.value = this.value.replace(/^\ *\n */, "");
        }
        if (compactRight) {
          this.props.value = this.value.replace(/\ *\n *$/, "");
        }
        this.props.value = this.value.replace(/(\ *\n *)+/g, " ");
        return this;
      };
      this.prototype.trimLeft = function() {
        return this.props.value = this.value.trimLeft();
      };
      this.prototype.trimRight = function() {
        return this.props.value = this.value.trimRight();
      };
      this.getter({
        value: function() {
          return this.props.value;
        }
      });
      this.prototype.toInterpolatedJsStringPart = function() {
        return deescapeSpaces(
          escapeUnescaped(escapeMustEscapes(this.value), "`$\n")
        );
      };
    }
  );
});