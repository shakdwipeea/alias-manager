goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8927__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8928__i = 0, G__8928__a = new Array(arguments.length -  0);
while (G__8928__i < G__8928__a.length) {G__8928__a[G__8928__i] = arguments[G__8928__i + 0]; ++G__8928__i;}
  args = new cljs.core.IndexedSeq(G__8928__a,0);
} 
return G__8927__delegate.call(this,args);};
G__8927.cljs$lang$maxFixedArity = 0;
G__8927.cljs$lang$applyTo = (function (arglist__8929){
var args = cljs.core.seq(arglist__8929);
return G__8927__delegate(args);
});
G__8927.cljs$core$IFn$_invoke$arity$variadic = G__8927__delegate;
return G__8927;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8930__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8931__i = 0, G__8931__a = new Array(arguments.length -  0);
while (G__8931__i < G__8931__a.length) {G__8931__a[G__8931__i] = arguments[G__8931__i + 0]; ++G__8931__i;}
  args = new cljs.core.IndexedSeq(G__8931__a,0);
} 
return G__8930__delegate.call(this,args);};
G__8930.cljs$lang$maxFixedArity = 0;
G__8930.cljs$lang$applyTo = (function (arglist__8932){
var args = cljs.core.seq(arglist__8932);
return G__8930__delegate(args);
});
G__8930.cljs$core$IFn$_invoke$arity$variadic = G__8930__delegate;
return G__8930;
})()
;

return null;
});
