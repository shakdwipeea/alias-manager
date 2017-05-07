// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('alias_manager.runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('alias_manager.tests');
doo.runner.set_entry_point_BANG_.call(null,(cljs.core.truth_(doo.runner.karma_QMARK_.call(null))?(function (tc__8038__auto__){
jx.reporter.karma.start.call(null,tc__8038__auto__,2);

return cljs.test.run_block.call(null,(function (){var env13488 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary13489 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13488,summary13489){
return (function (){
cljs.test.set_env_BANG_.call(null,env13488);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__7939__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__7939__auto__,env13488,summary13489){
return (function (){
if((env__7939__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__7939__auto__,env13488,summary13489))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return alias_manager.tests.test_alias_persistence;},new cljs.core.Symbol("alias-manager.tests","test-alias-persistence","alias-manager.tests/test-alias-persistence",-2006026433,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Symbol(null,"test-alias-persistence","test-alias-persistence",-1934882980,null),"test/alias_manager/tests.cljs",32,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(alias_manager.tests.test_alias_persistence)?alias_manager.tests.test_alias_persistence.cljs$lang$test:null)])),new cljs.core.Var(function(){return alias_manager.tests.app_test;},new cljs.core.Symbol("alias-manager.tests","app-test","alias-manager.tests/app-test",490081395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Symbol(null,"app-test","app-test",1634230160,null),"test/alias_manager/tests.cljs",18,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(alias_manager.tests.app_test)?alias_manager.tests.app_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__7939__auto__,env13488,summary13489){
return (function (){
if((env__7939__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__7939__auto__,env13488,summary13489))
], null));
})());
});})(env13488,summary13489))
,((function (env13488,summary13489){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13488,summary13489))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13488,summary13489){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13489,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13489),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13488,summary13489))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13488,summary13489){
return (function (){
cljs.test.set_env_BANG_.call(null,env13488);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13489));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13489),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13488,summary13489))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env13490 = cljs.test.empty_env.call(null);
var summary13491 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13490,summary13491){
return (function (){
cljs.test.set_env_BANG_.call(null,env13490);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__7939__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__7939__auto__,env13490,summary13491){
return (function (){
if((env__7939__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__7939__auto__,env13490,summary13491))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return alias_manager.tests.test_alias_persistence;},new cljs.core.Symbol("alias-manager.tests","test-alias-persistence","alias-manager.tests/test-alias-persistence",-2006026433,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Symbol(null,"test-alias-persistence","test-alias-persistence",-1934882980,null),"test/alias_manager/tests.cljs",32,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(alias_manager.tests.test_alias_persistence)?alias_manager.tests.test_alias_persistence.cljs$lang$test:null)])),new cljs.core.Var(function(){return alias_manager.tests.app_test;},new cljs.core.Symbol("alias-manager.tests","app-test","alias-manager.tests/app-test",490081395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Symbol(null,"app-test","app-test",1634230160,null),"test/alias_manager/tests.cljs",18,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(alias_manager.tests.app_test)?alias_manager.tests.app_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__7939__auto__,env13490,summary13491){
return (function (){
if((env__7939__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__7939__auto__,env13490,summary13491))
], null));
})());
});})(env13490,summary13491))
,((function (env13490,summary13491){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13490,summary13491))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13490,summary13491){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13491,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13491),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13490,summary13491))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13490,summary13491){
return (function (){
cljs.test.set_env_BANG_.call(null,env13490);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13491));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13491),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13490,summary13491))
], null));
})());
})));

//# sourceMappingURL=runner.js.map