goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8109__i = 0, G__8109__a = new Array(arguments.length -  0);
while (G__8109__i < G__8109__a.length) {G__8109__a[G__8109__i] = arguments[G__8109__i + 0]; ++G__8109__i;}
  args = new cljs.core.IndexedSeq(G__8109__a,0);
} 
return G__8108__delegate.call(this,args);};
G__8108.cljs$lang$maxFixedArity = 0;
G__8108.cljs$lang$applyTo = (function (arglist__8110){
var args = cljs.core.seq(arglist__8110);
return G__8108__delegate(args);
});
G__8108.cljs$core$IFn$_invoke$arity$variadic = G__8108__delegate;
return G__8108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8112__i = 0, G__8112__a = new Array(arguments.length -  0);
while (G__8112__i < G__8112__a.length) {G__8112__a[G__8112__i] = arguments[G__8112__i + 0]; ++G__8112__i;}
  args = new cljs.core.IndexedSeq(G__8112__a,0);
} 
return G__8111__delegate.call(this,args);};
G__8111.cljs$lang$maxFixedArity = 0;
G__8111.cljs$lang$applyTo = (function (arglist__8113){
var args = cljs.core.seq(arglist__8113);
return G__8111__delegate(args);
});
G__8111.cljs$core$IFn$_invoke$arity$variadic = G__8111__delegate;
return G__8111;
})()
;

return null;
});
