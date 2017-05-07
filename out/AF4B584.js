goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12622__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12623__i = 0, G__12623__a = new Array(arguments.length -  0);
while (G__12623__i < G__12623__a.length) {G__12623__a[G__12623__i] = arguments[G__12623__i + 0]; ++G__12623__i;}
  args = new cljs.core.IndexedSeq(G__12623__a,0);
} 
return G__12622__delegate.call(this,args);};
G__12622.cljs$lang$maxFixedArity = 0;
G__12622.cljs$lang$applyTo = (function (arglist__12624){
var args = cljs.core.seq(arglist__12624);
return G__12622__delegate(args);
});
G__12622.cljs$core$IFn$_invoke$arity$variadic = G__12622__delegate;
return G__12622;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12625__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12626__i = 0, G__12626__a = new Array(arguments.length -  0);
while (G__12626__i < G__12626__a.length) {G__12626__a[G__12626__i] = arguments[G__12626__i + 0]; ++G__12626__i;}
  args = new cljs.core.IndexedSeq(G__12626__a,0);
} 
return G__12625__delegate.call(this,args);};
G__12625.cljs$lang$maxFixedArity = 0;
G__12625.cljs$lang$applyTo = (function (arglist__12627){
var args = cljs.core.seq(arglist__12627);
return G__12625__delegate(args);
});
G__12625.cljs$core$IFn$_invoke$arity$variadic = G__12625__delegate;
return G__12625;
})()
;

return null;
});
