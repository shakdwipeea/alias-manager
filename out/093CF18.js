goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12892__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12893__i = 0, G__12893__a = new Array(arguments.length -  0);
while (G__12893__i < G__12893__a.length) {G__12893__a[G__12893__i] = arguments[G__12893__i + 0]; ++G__12893__i;}
  args = new cljs.core.IndexedSeq(G__12893__a,0);
} 
return G__12892__delegate.call(this,args);};
G__12892.cljs$lang$maxFixedArity = 0;
G__12892.cljs$lang$applyTo = (function (arglist__12894){
var args = cljs.core.seq(arglist__12894);
return G__12892__delegate(args);
});
G__12892.cljs$core$IFn$_invoke$arity$variadic = G__12892__delegate;
return G__12892;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12895__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12896__i = 0, G__12896__a = new Array(arguments.length -  0);
while (G__12896__i < G__12896__a.length) {G__12896__a[G__12896__i] = arguments[G__12896__i + 0]; ++G__12896__i;}
  args = new cljs.core.IndexedSeq(G__12896__a,0);
} 
return G__12895__delegate.call(this,args);};
G__12895.cljs$lang$maxFixedArity = 0;
G__12895.cljs$lang$applyTo = (function (arglist__12897){
var args = cljs.core.seq(arglist__12897);
return G__12895__delegate(args);
});
G__12895.cljs$core$IFn$_invoke$arity$variadic = G__12895__delegate;
return G__12895;
})()
;

return null;
});
