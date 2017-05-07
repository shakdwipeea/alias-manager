// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('alias_manager.tests');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('alias_manager.core');
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
if(cljs.core.truth_(cljs.test.successful_QMARK_.call(null,m))){
return cljs.core.println.call(null,"Success!");
} else {
return cljs.core.println.call(null,"FAIL");
}
}));
cljs.core.enable_console_print_BANG_.call(null);
alias_manager.tests.test_alias_persistence = (function alias_manager$tests$test_alias_persistence(){
return cljs.test.test_var.call(null,alias_manager$tests$test_alias_persistence.cljs$lang$var);
});
alias_manager.tests.test_alias_persistence.cljs$lang$test = (function (){
var name = "name";
var value = "value";
alias_manager.core.new_alias.call(null,name,value);

try{var values__7834__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,value),alias_manager.core.get_alias.call(null,name));
var result__7835__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__7834__auto__);
if(cljs.core.truth_(result__7835__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("am","get-alias","am/get-alias",2066259699,null),new cljs.core.Symbol(null,"name","name",-810760592,null)),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7834__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("am","get-alias","am/get-alias",2066259699,null),new cljs.core.Symbol(null,"name","name",-810760592,null)),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7834__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__7835__auto__;
}catch (e13484){var t__7872__auto__ = e13484;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("am","get-alias","am/get-alias",2066259699,null),new cljs.core.Symbol(null,"name","name",-810760592,null)),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__7872__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

alias_manager.tests.test_alias_persistence.cljs$lang$var = new cljs.core.Var(function(){return alias_manager.tests.test_alias_persistence;},new cljs.core.Symbol("alias-manager.tests","test-alias-persistence","alias-manager.tests/test-alias-persistence",-2006026433,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Symbol(null,"test-alias-persistence","test-alias-persistence",-1934882980,null),"test/alias_manager/tests.cljs",32,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(alias_manager.tests.test_alias_persistence)?alias_manager.tests.test_alias_persistence.cljs$lang$test:null)]));
alias_manager.tests.app_test = (function alias_manager$tests$app_test(){
return cljs.test.test_var.call(null,alias_manager$tests$app_test.cljs$lang$var);
});
alias_manager.tests.app_test.cljs$lang$test = (function (){
var name = "l";
var value = "pwd";
alias_manager.core._main.call(null,"-c",null,null);

alias_manager.core._main.call(null,"-n",name,value);

try{var values__7834__auto__ = cljs.core._conj.call(null,cljs.core.List.EMPTY,(alias_manager.core._main.call(null,name,null,null) == null));
var result__7835__auto__ = cljs.core.apply.call(null,cljs.core.complement,values__7834__auto__);
if(cljs.core.truth_(result__7835__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("am","-main","am/-main",1665368313,null),new cljs.core.Symbol(null,"name","name",-810760592,null),null,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.complement,values__7834__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("am","-main","am/-main",1665368313,null),new cljs.core.Symbol(null,"name","name",-810760592,null),null,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"complement","complement",-913606051,null),values__7834__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__7835__auto__;
}catch (e13485){var t__7872__auto__ = e13485;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("am","-main","am/-main",1665368313,null),new cljs.core.Symbol(null,"name","name",-810760592,null),null,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7872__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

alias_manager.tests.app_test.cljs$lang$var = new cljs.core.Var(function(){return alias_manager.tests.app_test;},new cljs.core.Symbol("alias-manager.tests","app-test","alias-manager.tests/app-test",490081395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"alias-manager.tests","alias-manager.tests",654122870,null),new cljs.core.Symbol(null,"app-test","app-test",1634230160,null),"test/alias_manager/tests.cljs",18,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(alias_manager.tests.app_test)?alias_manager.tests.app_test.cljs$lang$test:null)]));

//# sourceMappingURL=tests.js.map