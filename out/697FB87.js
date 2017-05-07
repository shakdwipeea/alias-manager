goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12921__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12922__i = 0, G__12922__a = new Array(arguments.length -  0);
while (G__12922__i < G__12922__a.length) {G__12922__a[G__12922__i] = arguments[G__12922__i + 0]; ++G__12922__i;}
  args = new cljs.core.IndexedSeq(G__12922__a,0);
} 
return G__12921__delegate.call(this,args);};
G__12921.cljs$lang$maxFixedArity = 0;
G__12921.cljs$lang$applyTo = (function (arglist__12923){
var args = cljs.core.seq(arglist__12923);
return G__12921__delegate(args);
});
G__12921.cljs$core$IFn$_invoke$arity$variadic = G__12921__delegate;
return G__12921;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12924__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12925__i = 0, G__12925__a = new Array(arguments.length -  0);
while (G__12925__i < G__12925__a.length) {G__12925__a[G__12925__i] = arguments[G__12925__i + 0]; ++G__12925__i;}
  args = new cljs.core.IndexedSeq(G__12925__a,0);
} 
return G__12924__delegate.call(this,args);};
G__12924.cljs$lang$maxFixedArity = 0;
G__12924.cljs$lang$applyTo = (function (arglist__12926){
var args = cljs.core.seq(arglist__12926);
return G__12924__delegate(args);
});
G__12924.cljs$core$IFn$_invoke$arity$variadic = G__12924__delegate;
return G__12924;
})()
;

return null;
});
