goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8983__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8984__i = 0, G__8984__a = new Array(arguments.length -  0);
while (G__8984__i < G__8984__a.length) {G__8984__a[G__8984__i] = arguments[G__8984__i + 0]; ++G__8984__i;}
  args = new cljs.core.IndexedSeq(G__8984__a,0);
} 
return G__8983__delegate.call(this,args);};
G__8983.cljs$lang$maxFixedArity = 0;
G__8983.cljs$lang$applyTo = (function (arglist__8985){
var args = cljs.core.seq(arglist__8985);
return G__8983__delegate(args);
});
G__8983.cljs$core$IFn$_invoke$arity$variadic = G__8983__delegate;
return G__8983;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8986__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8987__i = 0, G__8987__a = new Array(arguments.length -  0);
while (G__8987__i < G__8987__a.length) {G__8987__a[G__8987__i] = arguments[G__8987__i + 0]; ++G__8987__i;}
  args = new cljs.core.IndexedSeq(G__8987__a,0);
} 
return G__8986__delegate.call(this,args);};
G__8986.cljs$lang$maxFixedArity = 0;
G__8986.cljs$lang$applyTo = (function (arglist__8988){
var args = cljs.core.seq(arglist__8988);
return G__8986__delegate(args);
});
G__8986.cljs$core$IFn$_invoke$arity$variadic = G__8986__delegate;
return G__8986;
})()
;

return null;
});
