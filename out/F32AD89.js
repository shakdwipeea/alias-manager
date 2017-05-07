goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9789__i = 0, G__9789__a = new Array(arguments.length -  0);
while (G__9789__i < G__9789__a.length) {G__9789__a[G__9789__i] = arguments[G__9789__i + 0]; ++G__9789__i;}
  args = new cljs.core.IndexedSeq(G__9789__a,0);
} 
return G__9788__delegate.call(this,args);};
G__9788.cljs$lang$maxFixedArity = 0;
G__9788.cljs$lang$applyTo = (function (arglist__9790){
var args = cljs.core.seq(arglist__9790);
return G__9788__delegate(args);
});
G__9788.cljs$core$IFn$_invoke$arity$variadic = G__9788__delegate;
return G__9788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9792__i = 0, G__9792__a = new Array(arguments.length -  0);
while (G__9792__i < G__9792__a.length) {G__9792__a[G__9792__i] = arguments[G__9792__i + 0]; ++G__9792__i;}
  args = new cljs.core.IndexedSeq(G__9792__a,0);
} 
return G__9791__delegate.call(this,args);};
G__9791.cljs$lang$maxFixedArity = 0;
G__9791.cljs$lang$applyTo = (function (arglist__9793){
var args = cljs.core.seq(arglist__9793);
return G__9791__delegate(args);
});
G__9791.cljs$core$IFn$_invoke$arity$variadic = G__9791__delegate;
return G__9791;
})()
;

return null;
});
