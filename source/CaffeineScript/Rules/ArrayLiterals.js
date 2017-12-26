"use strict";
let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  return function() {
    return this.rule(
      {
        array: [{ pattern: "'[]' _? valueList" }, "'[]'"],
        brackedArray: "openBracket_ valueList _comma_? _closeBracket",
        implicitArray: [
          {
            pattern: "start:expression _comma_ simpleValueList _comma_?",
            stnFactory: "ArrayStn",
            stnProps: { implicitArray: true }
          },
          {
            pattern: "start:literal _ simpleValueList _comma_?",
            stnFactory: "ArrayStn",
            stnProps: { implicitArray: true }
          }
        ]
      },
      { stnFactory: "ArrayStn" }
    );
  };
});
