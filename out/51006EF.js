goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12173__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12174__i = 0, G__12174__a = new Array(arguments.length -  0);
while (G__12174__i < G__12174__a.length) {G__12174__a[G__12174__i] = arguments[G__12174__i + 0]; ++G__12174__i;}
  args = new cljs.core.IndexedSeq(G__12174__a,0);
} 
return G__12173__delegate.call(this,args);};
G__12173.cljs$lang$maxFixedArity = 0;
G__12173.cljs$lang$applyTo = (function (arglist__12175){
var args = cljs.core.seq(arglist__12175);
return G__12173__delegate(args);
});
G__12173.cljs$core$IFn$_invoke$arity$variadic = G__12173__delegate;
return G__12173;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12176__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12177__i = 0, G__12177__a = new Array(arguments.length -  0);
while (G__12177__i < G__12177__a.length) {G__12177__a[G__12177__i] = arguments[G__12177__i + 0]; ++G__12177__i;}
  args = new cljs.core.IndexedSeq(G__12177__a,0);
} 
return G__12176__delegate.call(this,args);};
G__12176.cljs$lang$maxFixedArity = 0;
G__12176.cljs$lang$applyTo = (function (arglist__12178){
var args = cljs.core.seq(arglist__12178);
return G__12176__delegate(args);
});
G__12176.cljs$core$IFn$_invoke$arity$variadic = G__12176__delegate;
return G__12176;
})()
;

return null;
});
