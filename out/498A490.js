goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10958__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10959__i = 0, G__10959__a = new Array(arguments.length -  0);
while (G__10959__i < G__10959__a.length) {G__10959__a[G__10959__i] = arguments[G__10959__i + 0]; ++G__10959__i;}
  args = new cljs.core.IndexedSeq(G__10959__a,0);
} 
return G__10958__delegate.call(this,args);};
G__10958.cljs$lang$maxFixedArity = 0;
G__10958.cljs$lang$applyTo = (function (arglist__10960){
var args = cljs.core.seq(arglist__10960);
return G__10958__delegate(args);
});
G__10958.cljs$core$IFn$_invoke$arity$variadic = G__10958__delegate;
return G__10958;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10961__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10962__i = 0, G__10962__a = new Array(arguments.length -  0);
while (G__10962__i < G__10962__a.length) {G__10962__a[G__10962__i] = arguments[G__10962__i + 0]; ++G__10962__i;}
  args = new cljs.core.IndexedSeq(G__10962__a,0);
} 
return G__10961__delegate.call(this,args);};
G__10961.cljs$lang$maxFixedArity = 0;
G__10961.cljs$lang$applyTo = (function (arglist__10963){
var args = cljs.core.seq(arglist__10963);
return G__10961__delegate(args);
});
G__10961.cljs$core$IFn$_invoke$arity$variadic = G__10961__delegate;
return G__10961;
})()
;

return null;
});
