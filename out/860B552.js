goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12690__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12691__i = 0, G__12691__a = new Array(arguments.length -  0);
while (G__12691__i < G__12691__a.length) {G__12691__a[G__12691__i] = arguments[G__12691__i + 0]; ++G__12691__i;}
  args = new cljs.core.IndexedSeq(G__12691__a,0);
} 
return G__12690__delegate.call(this,args);};
G__12690.cljs$lang$maxFixedArity = 0;
G__12690.cljs$lang$applyTo = (function (arglist__12692){
var args = cljs.core.seq(arglist__12692);
return G__12690__delegate(args);
});
G__12690.cljs$core$IFn$_invoke$arity$variadic = G__12690__delegate;
return G__12690;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12693__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12694__i = 0, G__12694__a = new Array(arguments.length -  0);
while (G__12694__i < G__12694__a.length) {G__12694__a[G__12694__i] = arguments[G__12694__i + 0]; ++G__12694__i;}
  args = new cljs.core.IndexedSeq(G__12694__a,0);
} 
return G__12693__delegate.call(this,args);};
G__12693.cljs$lang$maxFixedArity = 0;
G__12693.cljs$lang$applyTo = (function (arglist__12695){
var args = cljs.core.seq(arglist__12695);
return G__12693__delegate(args);
});
G__12693.cljs$core$IFn$_invoke$arity$variadic = G__12693__delegate;
return G__12693;
})()
;

return null;
});
