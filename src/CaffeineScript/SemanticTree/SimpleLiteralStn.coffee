Foundation = require 'art-foundation'

{log, a, w, m, defineModule, compactFlatten, present, isFunction, BaseObject} = Foundation

defineModule module, class SimpleLiteralStn extends require './BaseStn'

  toJs: -> @props.value