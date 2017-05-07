goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10026__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10027__i = 0, G__10027__a = new Array(arguments.length -  0);
while (G__10027__i < G__10027__a.length) {G__10027__a[G__10027__i] = arguments[G__10027__i + 0]; ++G__10027__i;}
  args = new cljs.core.IndexedSeq(G__10027__a,0);
} 
return G__10026__delegate.call(this,args);};
G__10026.cljs$lang$maxFixedArity = 0;
G__10026.cljs$lang$applyTo = (function (arglist__10028){
var args = cljs.core.seq(arglist__10028);
return G__10026__delegate(args);
});
G__10026.cljs$core$IFn$_invoke$arity$variadic = G__10026__delegate;
return G__10026;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10029__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10030__i = 0, G__10030__a = new Array(arguments.length -  0);
while (G__10030__i < G__10030__a.length) {G__10030__a[G__10030__i] = arguments[G__10030__i + 0]; ++G__10030__i;}
  args = new cljs.core.IndexedSeq(G__10030__a,0);
} 
return G__10029__delegate.call(this,args);};
G__10029.cljs$lang$maxFixedArity = 0;
G__10029.cljs$lang$applyTo = (function (arglist__10031){
var args = cljs.core.seq(arglist__10031);
return G__10029__delegate(args);
});
G__10029.cljs$core$IFn$_invoke$arity$variadic = G__10029__delegate;
return G__10029;
})()
;

return null;
});
