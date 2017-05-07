goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13434__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13435__i = 0, G__13435__a = new Array(arguments.length -  0);
while (G__13435__i < G__13435__a.length) {G__13435__a[G__13435__i] = arguments[G__13435__i + 0]; ++G__13435__i;}
  args = new cljs.core.IndexedSeq(G__13435__a,0);
} 
return G__13434__delegate.call(this,args);};
G__13434.cljs$lang$maxFixedArity = 0;
G__13434.cljs$lang$applyTo = (function (arglist__13436){
var args = cljs.core.seq(arglist__13436);
return G__13434__delegate(args);
});
G__13434.cljs$core$IFn$_invoke$arity$variadic = G__13434__delegate;
return G__13434;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13437__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13438__i = 0, G__13438__a = new Array(arguments.length -  0);
while (G__13438__i < G__13438__a.length) {G__13438__a[G__13438__i] = arguments[G__13438__i + 0]; ++G__13438__i;}
  args = new cljs.core.IndexedSeq(G__13438__a,0);
} 
return G__13437__delegate.call(this,args);};
G__13437.cljs$lang$maxFixedArity = 0;
G__13437.cljs$lang$applyTo = (function (arglist__13439){
var args = cljs.core.seq(arglist__13439);
return G__13437__delegate(args);
});
G__13437.cljs$core$IFn$_invoke$arity$variadic = G__13437__delegate;
return G__13437;
})()
;

return null;
});
