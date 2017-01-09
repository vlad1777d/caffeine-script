{a, m, w, log} = require "art-foundation"

module.exports =
  classDefinition:
    pattern: "/class/ _ className:identifier classExtends:_extendsClause? body:block?"
    stnFactory: "ClassStn"

  _extendsClause:
    pattern: "_ /extends/ _ expressionWithOneLessBlock"
    toJs: -> @expressionWithOneLessBlock.toJs()