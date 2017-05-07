goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13061__i = 0, G__13061__a = new Array(arguments.length -  0);
while (G__13061__i < G__13061__a.length) {G__13061__a[G__13061__i] = arguments[G__13061__i + 0]; ++G__13061__i;}
  args = new cljs.core.IndexedSeq(G__13061__a,0);
} 
return G__13060__delegate.call(this,args);};
G__13060.cljs$lang$maxFixedArity = 0;
G__13060.cljs$lang$applyTo = (function (arglist__13062){
var args = cljs.core.seq(arglist__13062);
return G__13060__delegate(args);
});
G__13060.cljs$core$IFn$_invoke$arity$variadic = G__13060__delegate;
return G__13060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13064__i = 0, G__13064__a = new Array(arguments.length -  0);
while (G__13064__i < G__13064__a.length) {G__13064__a[G__13064__i] = arguments[G__13064__i + 0]; ++G__13064__i;}
  args = new cljs.core.IndexedSeq(G__13064__a,0);
} 
return G__13063__delegate.call(this,args);};
G__13063.cljs$lang$maxFixedArity = 0;
G__13063.cljs$lang$applyTo = (function (arglist__13065){
var args = cljs.core.seq(arglist__13065);
return G__13063__delegate(args);
});
G__13063.cljs$core$IFn$_invoke$arity$variadic = G__13063__delegate;
return G__13063;
})()
;

return null;
});
