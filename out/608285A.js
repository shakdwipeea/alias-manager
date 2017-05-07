goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11435__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11436__i = 0, G__11436__a = new Array(arguments.length -  0);
while (G__11436__i < G__11436__a.length) {G__11436__a[G__11436__i] = arguments[G__11436__i + 0]; ++G__11436__i;}
  args = new cljs.core.IndexedSeq(G__11436__a,0);
} 
return G__11435__delegate.call(this,args);};
G__11435.cljs$lang$maxFixedArity = 0;
G__11435.cljs$lang$applyTo = (function (arglist__11437){
var args = cljs.core.seq(arglist__11437);
return G__11435__delegate(args);
});
G__11435.cljs$core$IFn$_invoke$arity$variadic = G__11435__delegate;
return G__11435;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11438__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11439__i = 0, G__11439__a = new Array(arguments.length -  0);
while (G__11439__i < G__11439__a.length) {G__11439__a[G__11439__i] = arguments[G__11439__i + 0]; ++G__11439__i;}
  args = new cljs.core.IndexedSeq(G__11439__a,0);
} 
return G__11438__delegate.call(this,args);};
G__11438.cljs$lang$maxFixedArity = 0;
G__11438.cljs$lang$applyTo = (function (arglist__11440){
var args = cljs.core.seq(arglist__11440);
return G__11438__delegate(args);
});
G__11438.cljs$core$IFn$_invoke$arity$variadic = G__11438__delegate;
return G__11438;
})()
;

return null;
});
