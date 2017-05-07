goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9277__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9278__i = 0, G__9278__a = new Array(arguments.length -  0);
while (G__9278__i < G__9278__a.length) {G__9278__a[G__9278__i] = arguments[G__9278__i + 0]; ++G__9278__i;}
  args = new cljs.core.IndexedSeq(G__9278__a,0);
} 
return G__9277__delegate.call(this,args);};
G__9277.cljs$lang$maxFixedArity = 0;
G__9277.cljs$lang$applyTo = (function (arglist__9279){
var args = cljs.core.seq(arglist__9279);
return G__9277__delegate(args);
});
G__9277.cljs$core$IFn$_invoke$arity$variadic = G__9277__delegate;
return G__9277;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9280__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9281__i = 0, G__9281__a = new Array(arguments.length -  0);
while (G__9281__i < G__9281__a.length) {G__9281__a[G__9281__i] = arguments[G__9281__i + 0]; ++G__9281__i;}
  args = new cljs.core.IndexedSeq(G__9281__a,0);
} 
return G__9280__delegate.call(this,args);};
G__9280.cljs$lang$maxFixedArity = 0;
G__9280.cljs$lang$applyTo = (function (arglist__9282){
var args = cljs.core.seq(arglist__9282);
return G__9280__delegate(args);
});
G__9280.cljs$core$IFn$_invoke$arity$variadic = G__9280__delegate;
return G__9280;
})()
;

return null;
});
