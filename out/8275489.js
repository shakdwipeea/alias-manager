goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13267__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13268__i = 0, G__13268__a = new Array(arguments.length -  0);
while (G__13268__i < G__13268__a.length) {G__13268__a[G__13268__i] = arguments[G__13268__i + 0]; ++G__13268__i;}
  args = new cljs.core.IndexedSeq(G__13268__a,0);
} 
return G__13267__delegate.call(this,args);};
G__13267.cljs$lang$maxFixedArity = 0;
G__13267.cljs$lang$applyTo = (function (arglist__13269){
var args = cljs.core.seq(arglist__13269);
return G__13267__delegate(args);
});
G__13267.cljs$core$IFn$_invoke$arity$variadic = G__13267__delegate;
return G__13267;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13270__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13271__i = 0, G__13271__a = new Array(arguments.length -  0);
while (G__13271__i < G__13271__a.length) {G__13271__a[G__13271__i] = arguments[G__13271__i + 0]; ++G__13271__i;}
  args = new cljs.core.IndexedSeq(G__13271__a,0);
} 
return G__13270__delegate.call(this,args);};
G__13270.cljs$lang$maxFixedArity = 0;
G__13270.cljs$lang$applyTo = (function (arglist__13272){
var args = cljs.core.seq(arglist__13272);
return G__13270__delegate(args);
});
G__13270.cljs$core$IFn$_invoke$arity$variadic = G__13270__delegate;
return G__13270;
})()
;

return null;
});
