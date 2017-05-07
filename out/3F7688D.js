goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8406__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8407__i = 0, G__8407__a = new Array(arguments.length -  0);
while (G__8407__i < G__8407__a.length) {G__8407__a[G__8407__i] = arguments[G__8407__i + 0]; ++G__8407__i;}
  args = new cljs.core.IndexedSeq(G__8407__a,0);
} 
return G__8406__delegate.call(this,args);};
G__8406.cljs$lang$maxFixedArity = 0;
G__8406.cljs$lang$applyTo = (function (arglist__8408){
var args = cljs.core.seq(arglist__8408);
return G__8406__delegate(args);
});
G__8406.cljs$core$IFn$_invoke$arity$variadic = G__8406__delegate;
return G__8406;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8409__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8410__i = 0, G__8410__a = new Array(arguments.length -  0);
while (G__8410__i < G__8410__a.length) {G__8410__a[G__8410__i] = arguments[G__8410__i + 0]; ++G__8410__i;}
  args = new cljs.core.IndexedSeq(G__8410__a,0);
} 
return G__8409__delegate.call(this,args);};
G__8409.cljs$lang$maxFixedArity = 0;
G__8409.cljs$lang$applyTo = (function (arglist__8411){
var args = cljs.core.seq(arglist__8411);
return G__8409__delegate(args);
});
G__8409.cljs$core$IFn$_invoke$arity$variadic = G__8409__delegate;
return G__8409;
})()
;

return null;
});
