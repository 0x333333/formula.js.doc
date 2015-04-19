'use strict';

angular.module('formula.version', [
  'formula.version.interpolate-filter',
  'formula.version.version-directive'
])

.value('version', '0.1');
