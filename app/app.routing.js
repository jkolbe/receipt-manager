"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var receipts_component_1 = require('./receipts/receipts.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'receipts', component: receipts_component_1.ReceiptsComponent },
    { path: 'receipt/:id', component: receipts_component_1.ReceiptsComponent },
    { path: 'about', component: receipts_component_1.ReceiptsComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map