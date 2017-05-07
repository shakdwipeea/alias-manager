goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11710__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11711__i = 0, G__11711__a = new Array(arguments.length -  0);
while (G__11711__i < G__11711__a.length) {G__11711__a[G__11711__i] = arguments[G__11711__i + 0]; ++G__11711__i;}
  args = new cljs.core.IndexedSeq(G__11711__a,0);
} 
return G__11710__delegate.call(this,args);};
G__11710.cljs$lang$maxFixedArity = 0;
G__11710.cljs$lang$applyTo = (function (arglist__11712){
var args = cljs.core.seq(arglist__11712);
return G__11710__delegate(args);
});
G__11710.cljs$core$IFn$_invoke$arity$variadic = G__11710__delegate;
return G__11710;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11713__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11714__i = 0, G__11714__a = new Array(arguments.length -  0);
while (G__11714__i < G__11714__a.length) {G__11714__a[G__11714__i] = arguments[G__11714__i + 0]; ++G__11714__i;}
  args = new cljs.core.IndexedSeq(G__11714__a,0);
} 
return G__11713__delegate.call(this,args);};
G__11713.cljs$lang$maxFixedArity = 0;
G__11713.cljs$lang$applyTo = (function (arglist__11715){
var args = cljs.core.seq(arglist__11715);
return G__11713__delegate(args);
});
G__11713.cljs$core$IFn$_invoke$arity$variadic = G__11713__delegate;
return G__11713;
})()
;

return null;
});
