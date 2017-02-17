let Caf = require("caffeine-script-runtime");
Caf.defMod(module, () => {
  let ArtFoundation = require("art-foundation");
  return {
    classDefinition: {
      pattern: "/class/ _ className:identifier classExtends:_extendsClause? body:block?",
      stnFactory: "ClassStn"
    },
    _extendsClause: {
      pattern: "_ /extends/ _ expressionWithOneLessBlock",
      toJs: function() {
        return this.expressionWithOneLessBlock.toJs();
      }
    }
  };
});