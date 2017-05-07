goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11074__i = 0, G__11074__a = new Array(arguments.length -  0);
while (G__11074__i < G__11074__a.length) {G__11074__a[G__11074__i] = arguments[G__11074__i + 0]; ++G__11074__i;}
  args = new cljs.core.IndexedSeq(G__11074__a,0);
} 
return G__11073__delegate.call(this,args);};
G__11073.cljs$lang$maxFixedArity = 0;
G__11073.cljs$lang$applyTo = (function (arglist__11075){
var args = cljs.core.seq(arglist__11075);
return G__11073__delegate(args);
});
G__11073.cljs$core$IFn$_invoke$arity$variadic = G__11073__delegate;
return G__11073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11077__i = 0, G__11077__a = new Array(arguments.length -  0);
while (G__11077__i < G__11077__a.length) {G__11077__a[G__11077__i] = arguments[G__11077__i + 0]; ++G__11077__i;}
  args = new cljs.core.IndexedSeq(G__11077__a,0);
} 
return G__11076__delegate.call(this,args);};
G__11076.cljs$lang$maxFixedArity = 0;
G__11076.cljs$lang$applyTo = (function (arglist__11078){
var args = cljs.core.seq(arglist__11078);
return G__11076__delegate(args);
});
G__11076.cljs$core$IFn$_invoke$arity$variadic = G__11076__delegate;
return G__11076;
})()
;

return null;
});
