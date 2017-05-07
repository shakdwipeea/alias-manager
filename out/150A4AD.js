goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8066__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8067__i = 0, G__8067__a = new Array(arguments.length -  0);
while (G__8067__i < G__8067__a.length) {G__8067__a[G__8067__i] = arguments[G__8067__i + 0]; ++G__8067__i;}
  args = new cljs.core.IndexedSeq(G__8067__a,0);
} 
return G__8066__delegate.call(this,args);};
G__8066.cljs$lang$maxFixedArity = 0;
G__8066.cljs$lang$applyTo = (function (arglist__8068){
var args = cljs.core.seq(arglist__8068);
return G__8066__delegate(args);
});
G__8066.cljs$core$IFn$_invoke$arity$variadic = G__8066__delegate;
return G__8066;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8069__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8070__i = 0, G__8070__a = new Array(arguments.length -  0);
while (G__8070__i < G__8070__a.length) {G__8070__a[G__8070__i] = arguments[G__8070__i + 0]; ++G__8070__i;}
  args = new cljs.core.IndexedSeq(G__8070__a,0);
} 
return G__8069__delegate.call(this,args);};
G__8069.cljs$lang$maxFixedArity = 0;
G__8069.cljs$lang$applyTo = (function (arglist__8071){
var args = cljs.core.seq(arglist__8071);
return G__8069__delegate(args);
});
G__8069.cljs$core$IFn$_invoke$arity$variadic = G__8069__delegate;
return G__8069;
})()
;

return null;
});
