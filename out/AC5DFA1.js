goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11945__i = 0, G__11945__a = new Array(arguments.length -  0);
while (G__11945__i < G__11945__a.length) {G__11945__a[G__11945__i] = arguments[G__11945__i + 0]; ++G__11945__i;}
  args = new cljs.core.IndexedSeq(G__11945__a,0);
} 
return G__11944__delegate.call(this,args);};
G__11944.cljs$lang$maxFixedArity = 0;
G__11944.cljs$lang$applyTo = (function (arglist__11946){
var args = cljs.core.seq(arglist__11946);
return G__11944__delegate(args);
});
G__11944.cljs$core$IFn$_invoke$arity$variadic = G__11944__delegate;
return G__11944;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11947__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11948__i = 0, G__11948__a = new Array(arguments.length -  0);
while (G__11948__i < G__11948__a.length) {G__11948__a[G__11948__i] = arguments[G__11948__i + 0]; ++G__11948__i;}
  args = new cljs.core.IndexedSeq(G__11948__a,0);
} 
return G__11947__delegate.call(this,args);};
G__11947.cljs$lang$maxFixedArity = 0;
G__11947.cljs$lang$applyTo = (function (arglist__11949){
var args = cljs.core.seq(arglist__11949);
return G__11947__delegate(args);
});
G__11947.cljs$core$IFn$_invoke$arity$variadic = G__11947__delegate;
return G__11947;
})()
;

return null;
});
