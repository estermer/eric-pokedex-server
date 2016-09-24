// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
const app = require('./app.js');

app.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
