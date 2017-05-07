goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13335__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13336__i = 0, G__13336__a = new Array(arguments.length -  0);
while (G__13336__i < G__13336__a.length) {G__13336__a[G__13336__i] = arguments[G__13336__i + 0]; ++G__13336__i;}
  args = new cljs.core.IndexedSeq(G__13336__a,0);
} 
return G__13335__delegate.call(this,args);};
G__13335.cljs$lang$maxFixedArity = 0;
G__13335.cljs$lang$applyTo = (function (arglist__13337){
var args = cljs.core.seq(arglist__13337);
return G__13335__delegate(args);
});
G__13335.cljs$core$IFn$_invoke$arity$variadic = G__13335__delegate;
return G__13335;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13338__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13339__i = 0, G__13339__a = new Array(arguments.length -  0);
while (G__13339__i < G__13339__a.length) {G__13339__a[G__13339__i] = arguments[G__13339__i + 0]; ++G__13339__i;}
  args = new cljs.core.IndexedSeq(G__13339__a,0);
} 
return G__13338__delegate.call(this,args);};
G__13338.cljs$lang$maxFixedArity = 0;
G__13338.cljs$lang$applyTo = (function (arglist__13340){
var args = cljs.core.seq(arglist__13340);
return G__13338__delegate(args);
});
G__13338.cljs$core$IFn$_invoke$arity$variadic = G__13338__delegate;
return G__13338;
})()
;

return null;
});
