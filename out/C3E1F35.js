goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11266__i = 0, G__11266__a = new Array(arguments.length -  0);
while (G__11266__i < G__11266__a.length) {G__11266__a[G__11266__i] = arguments[G__11266__i + 0]; ++G__11266__i;}
  args = new cljs.core.IndexedSeq(G__11266__a,0);
} 
return G__11265__delegate.call(this,args);};
G__11265.cljs$lang$maxFixedArity = 0;
G__11265.cljs$lang$applyTo = (function (arglist__11267){
var args = cljs.core.seq(arglist__11267);
return G__11265__delegate(args);
});
G__11265.cljs$core$IFn$_invoke$arity$variadic = G__11265__delegate;
return G__11265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11269__i = 0, G__11269__a = new Array(arguments.length -  0);
while (G__11269__i < G__11269__a.length) {G__11269__a[G__11269__i] = arguments[G__11269__i + 0]; ++G__11269__i;}
  args = new cljs.core.IndexedSeq(G__11269__a,0);
} 
return G__11268__delegate.call(this,args);};
G__11268.cljs$lang$maxFixedArity = 0;
G__11268.cljs$lang$applyTo = (function (arglist__11270){
var args = cljs.core.seq(arglist__11270);
return G__11268__delegate(args);
});
G__11268.cljs$core$IFn$_invoke$arity$variadic = G__11268__delegate;
return G__11268;
})()
;

return null;
});
