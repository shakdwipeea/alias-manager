// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13466__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13467__i = 0, G__13467__a = new Array(arguments.length -  0);
while (G__13467__i < G__13467__a.length) {G__13467__a[G__13467__i] = arguments[G__13467__i + 0]; ++G__13467__i;}
  args = new cljs.core.IndexedSeq(G__13467__a,0);
} 
return G__13466__delegate.call(this,args);};
G__13466.cljs$lang$maxFixedArity = 0;
G__13466.cljs$lang$applyTo = (function (arglist__13468){
var args = cljs.core.seq(arglist__13468);
return G__13466__delegate(args);
});
G__13466.cljs$core$IFn$_invoke$arity$variadic = G__13466__delegate;
return G__13466;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13469__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13470__i = 0, G__13470__a = new Array(arguments.length -  0);
while (G__13470__i < G__13470__a.length) {G__13470__a[G__13470__i] = arguments[G__13470__i + 0]; ++G__13470__i;}
  args = new cljs.core.IndexedSeq(G__13470__a,0);
} 
return G__13469__delegate.call(this,args);};
G__13469.cljs$lang$maxFixedArity = 0;
G__13469.cljs$lang$applyTo = (function (arglist__13471){
var args = cljs.core.seq(arglist__13471);
return G__13469__delegate(args);
});
G__13469.cljs$core$IFn$_invoke$arity$variadic = G__13469__delegate;
return G__13469;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map