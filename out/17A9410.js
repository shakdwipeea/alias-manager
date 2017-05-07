goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11981__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11982__i = 0, G__11982__a = new Array(arguments.length -  0);
while (G__11982__i < G__11982__a.length) {G__11982__a[G__11982__i] = arguments[G__11982__i + 0]; ++G__11982__i;}
  args = new cljs.core.IndexedSeq(G__11982__a,0);
} 
return G__11981__delegate.call(this,args);};
G__11981.cljs$lang$maxFixedArity = 0;
G__11981.cljs$lang$applyTo = (function (arglist__11983){
var args = cljs.core.seq(arglist__11983);
return G__11981__delegate(args);
});
G__11981.cljs$core$IFn$_invoke$arity$variadic = G__11981__delegate;
return G__11981;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11984__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11985__i = 0, G__11985__a = new Array(arguments.length -  0);
while (G__11985__i < G__11985__a.length) {G__11985__a[G__11985__i] = arguments[G__11985__i + 0]; ++G__11985__i;}
  args = new cljs.core.IndexedSeq(G__11985__a,0);
} 
return G__11984__delegate.call(this,args);};
G__11984.cljs$lang$maxFixedArity = 0;
G__11984.cljs$lang$applyTo = (function (arglist__11986){
var args = cljs.core.seq(arglist__11986);
return G__11984__delegate(args);
});
G__11984.cljs$core$IFn$_invoke$arity$variadic = G__11984__delegate;
return G__11984;
})()
;

return null;
});
