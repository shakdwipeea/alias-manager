goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10306__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10307__i = 0, G__10307__a = new Array(arguments.length -  0);
while (G__10307__i < G__10307__a.length) {G__10307__a[G__10307__i] = arguments[G__10307__i + 0]; ++G__10307__i;}
  args = new cljs.core.IndexedSeq(G__10307__a,0);
} 
return G__10306__delegate.call(this,args);};
G__10306.cljs$lang$maxFixedArity = 0;
G__10306.cljs$lang$applyTo = (function (arglist__10308){
var args = cljs.core.seq(arglist__10308);
return G__10306__delegate(args);
});
G__10306.cljs$core$IFn$_invoke$arity$variadic = G__10306__delegate;
return G__10306;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10309__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10310__i = 0, G__10310__a = new Array(arguments.length -  0);
while (G__10310__i < G__10310__a.length) {G__10310__a[G__10310__i] = arguments[G__10310__i + 0]; ++G__10310__i;}
  args = new cljs.core.IndexedSeq(G__10310__a,0);
} 
return G__10309__delegate.call(this,args);};
G__10309.cljs$lang$maxFixedArity = 0;
G__10309.cljs$lang$applyTo = (function (arglist__10311){
var args = cljs.core.seq(arglist__10311);
return G__10309__delegate(args);
});
G__10309.cljs$core$IFn$_invoke$arity$variadic = G__10309__delegate;
return G__10309;
})()
;

return null;
});
