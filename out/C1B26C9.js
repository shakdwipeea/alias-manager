goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12045__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12046__i = 0, G__12046__a = new Array(arguments.length -  0);
while (G__12046__i < G__12046__a.length) {G__12046__a[G__12046__i] = arguments[G__12046__i + 0]; ++G__12046__i;}
  args = new cljs.core.IndexedSeq(G__12046__a,0);
} 
return G__12045__delegate.call(this,args);};
G__12045.cljs$lang$maxFixedArity = 0;
G__12045.cljs$lang$applyTo = (function (arglist__12047){
var args = cljs.core.seq(arglist__12047);
return G__12045__delegate(args);
});
G__12045.cljs$core$IFn$_invoke$arity$variadic = G__12045__delegate;
return G__12045;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12048__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12049__i = 0, G__12049__a = new Array(arguments.length -  0);
while (G__12049__i < G__12049__a.length) {G__12049__a[G__12049__i] = arguments[G__12049__i + 0]; ++G__12049__i;}
  args = new cljs.core.IndexedSeq(G__12049__a,0);
} 
return G__12048__delegate.call(this,args);};
G__12048.cljs$lang$maxFixedArity = 0;
G__12048.cljs$lang$applyTo = (function (arglist__12050){
var args = cljs.core.seq(arglist__12050);
return G__12048__delegate(args);
});
G__12048.cljs$core$IFn$_invoke$arity$variadic = G__12048__delegate;
return G__12048;
})()
;

return null;
});
