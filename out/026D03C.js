goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11397__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11398__i = 0, G__11398__a = new Array(arguments.length -  0);
while (G__11398__i < G__11398__a.length) {G__11398__a[G__11398__i] = arguments[G__11398__i + 0]; ++G__11398__i;}
  args = new cljs.core.IndexedSeq(G__11398__a,0);
} 
return G__11397__delegate.call(this,args);};
G__11397.cljs$lang$maxFixedArity = 0;
G__11397.cljs$lang$applyTo = (function (arglist__11399){
var args = cljs.core.seq(arglist__11399);
return G__11397__delegate(args);
});
G__11397.cljs$core$IFn$_invoke$arity$variadic = G__11397__delegate;
return G__11397;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11400__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11401__i = 0, G__11401__a = new Array(arguments.length -  0);
while (G__11401__i < G__11401__a.length) {G__11401__a[G__11401__i] = arguments[G__11401__i + 0]; ++G__11401__i;}
  args = new cljs.core.IndexedSeq(G__11401__a,0);
} 
return G__11400__delegate.call(this,args);};
G__11400.cljs$lang$maxFixedArity = 0;
G__11400.cljs$lang$applyTo = (function (arglist__11402){
var args = cljs.core.seq(arglist__11402);
return G__11400__delegate(args);
});
G__11400.cljs$core$IFn$_invoke$arity$variadic = G__11400__delegate;
return G__11400;
})()
;

return null;
});
