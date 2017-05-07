goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12285__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12286__i = 0, G__12286__a = new Array(arguments.length -  0);
while (G__12286__i < G__12286__a.length) {G__12286__a[G__12286__i] = arguments[G__12286__i + 0]; ++G__12286__i;}
  args = new cljs.core.IndexedSeq(G__12286__a,0);
} 
return G__12285__delegate.call(this,args);};
G__12285.cljs$lang$maxFixedArity = 0;
G__12285.cljs$lang$applyTo = (function (arglist__12287){
var args = cljs.core.seq(arglist__12287);
return G__12285__delegate(args);
});
G__12285.cljs$core$IFn$_invoke$arity$variadic = G__12285__delegate;
return G__12285;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12288__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12289__i = 0, G__12289__a = new Array(arguments.length -  0);
while (G__12289__i < G__12289__a.length) {G__12289__a[G__12289__i] = arguments[G__12289__i + 0]; ++G__12289__i;}
  args = new cljs.core.IndexedSeq(G__12289__a,0);
} 
return G__12288__delegate.call(this,args);};
G__12288.cljs$lang$maxFixedArity = 0;
G__12288.cljs$lang$applyTo = (function (arglist__12290){
var args = cljs.core.seq(arglist__12290);
return G__12288__delegate(args);
});
G__12288.cljs$core$IFn$_invoke$arity$variadic = G__12288__delegate;
return G__12288;
})()
;

return null;
});
