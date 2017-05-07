goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12009__i = 0, G__12009__a = new Array(arguments.length -  0);
while (G__12009__i < G__12009__a.length) {G__12009__a[G__12009__i] = arguments[G__12009__i + 0]; ++G__12009__i;}
  args = new cljs.core.IndexedSeq(G__12009__a,0);
} 
return G__12008__delegate.call(this,args);};
G__12008.cljs$lang$maxFixedArity = 0;
G__12008.cljs$lang$applyTo = (function (arglist__12010){
var args = cljs.core.seq(arglist__12010);
return G__12008__delegate(args);
});
G__12008.cljs$core$IFn$_invoke$arity$variadic = G__12008__delegate;
return G__12008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12012__i = 0, G__12012__a = new Array(arguments.length -  0);
while (G__12012__i < G__12012__a.length) {G__12012__a[G__12012__i] = arguments[G__12012__i + 0]; ++G__12012__i;}
  args = new cljs.core.IndexedSeq(G__12012__a,0);
} 
return G__12011__delegate.call(this,args);};
G__12011.cljs$lang$maxFixedArity = 0;
G__12011.cljs$lang$applyTo = (function (arglist__12013){
var args = cljs.core.seq(arglist__12013);
return G__12011__delegate(args);
});
G__12011.cljs$core$IFn$_invoke$arity$variadic = G__12011__delegate;
return G__12011;
})()
;

return null;
});
