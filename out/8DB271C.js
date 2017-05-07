goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10422__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10423__i = 0, G__10423__a = new Array(arguments.length -  0);
while (G__10423__i < G__10423__a.length) {G__10423__a[G__10423__i] = arguments[G__10423__i + 0]; ++G__10423__i;}
  args = new cljs.core.IndexedSeq(G__10423__a,0);
} 
return G__10422__delegate.call(this,args);};
G__10422.cljs$lang$maxFixedArity = 0;
G__10422.cljs$lang$applyTo = (function (arglist__10424){
var args = cljs.core.seq(arglist__10424);
return G__10422__delegate(args);
});
G__10422.cljs$core$IFn$_invoke$arity$variadic = G__10422__delegate;
return G__10422;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10425__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10426__i = 0, G__10426__a = new Array(arguments.length -  0);
while (G__10426__i < G__10426__a.length) {G__10426__a[G__10426__i] = arguments[G__10426__i + 0]; ++G__10426__i;}
  args = new cljs.core.IndexedSeq(G__10426__a,0);
} 
return G__10425__delegate.call(this,args);};
G__10425.cljs$lang$maxFixedArity = 0;
G__10425.cljs$lang$applyTo = (function (arglist__10427){
var args = cljs.core.seq(arglist__10427);
return G__10425__delegate(args);
});
G__10425.cljs$core$IFn$_invoke$arity$variadic = G__10425__delegate;
return G__10425;
})()
;

return null;
});
