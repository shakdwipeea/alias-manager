goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13149__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13150__i = 0, G__13150__a = new Array(arguments.length -  0);
while (G__13150__i < G__13150__a.length) {G__13150__a[G__13150__i] = arguments[G__13150__i + 0]; ++G__13150__i;}
  args = new cljs.core.IndexedSeq(G__13150__a,0);
} 
return G__13149__delegate.call(this,args);};
G__13149.cljs$lang$maxFixedArity = 0;
G__13149.cljs$lang$applyTo = (function (arglist__13151){
var args = cljs.core.seq(arglist__13151);
return G__13149__delegate(args);
});
G__13149.cljs$core$IFn$_invoke$arity$variadic = G__13149__delegate;
return G__13149;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13152__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13153__i = 0, G__13153__a = new Array(arguments.length -  0);
while (G__13153__i < G__13153__a.length) {G__13153__a[G__13153__i] = arguments[G__13153__i + 0]; ++G__13153__i;}
  args = new cljs.core.IndexedSeq(G__13153__a,0);
} 
return G__13152__delegate.call(this,args);};
G__13152.cljs$lang$maxFixedArity = 0;
G__13152.cljs$lang$applyTo = (function (arglist__13154){
var args = cljs.core.seq(arglist__13154);
return G__13152__delegate(args);
});
G__13152.cljs$core$IFn$_invoke$arity$variadic = G__13152__delegate;
return G__13152;
})()
;

return null;
});
