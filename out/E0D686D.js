goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11859__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11860__i = 0, G__11860__a = new Array(arguments.length -  0);
while (G__11860__i < G__11860__a.length) {G__11860__a[G__11860__i] = arguments[G__11860__i + 0]; ++G__11860__i;}
  args = new cljs.core.IndexedSeq(G__11860__a,0);
} 
return G__11859__delegate.call(this,args);};
G__11859.cljs$lang$maxFixedArity = 0;
G__11859.cljs$lang$applyTo = (function (arglist__11861){
var args = cljs.core.seq(arglist__11861);
return G__11859__delegate(args);
});
G__11859.cljs$core$IFn$_invoke$arity$variadic = G__11859__delegate;
return G__11859;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11862__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11863__i = 0, G__11863__a = new Array(arguments.length -  0);
while (G__11863__i < G__11863__a.length) {G__11863__a[G__11863__i] = arguments[G__11863__i + 0]; ++G__11863__i;}
  args = new cljs.core.IndexedSeq(G__11863__a,0);
} 
return G__11862__delegate.call(this,args);};
G__11862.cljs$lang$maxFixedArity = 0;
G__11862.cljs$lang$applyTo = (function (arglist__11864){
var args = cljs.core.seq(arglist__11864);
return G__11862__delegate(args);
});
G__11862.cljs$core$IFn$_invoke$arity$variadic = G__11862__delegate;
return G__11862;
})()
;

return null;
});
