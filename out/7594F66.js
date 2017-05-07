goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12201__i = 0, G__12201__a = new Array(arguments.length -  0);
while (G__12201__i < G__12201__a.length) {G__12201__a[G__12201__i] = arguments[G__12201__i + 0]; ++G__12201__i;}
  args = new cljs.core.IndexedSeq(G__12201__a,0);
} 
return G__12200__delegate.call(this,args);};
G__12200.cljs$lang$maxFixedArity = 0;
G__12200.cljs$lang$applyTo = (function (arglist__12202){
var args = cljs.core.seq(arglist__12202);
return G__12200__delegate(args);
});
G__12200.cljs$core$IFn$_invoke$arity$variadic = G__12200__delegate;
return G__12200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12204__i = 0, G__12204__a = new Array(arguments.length -  0);
while (G__12204__i < G__12204__a.length) {G__12204__a[G__12204__i] = arguments[G__12204__i + 0]; ++G__12204__i;}
  args = new cljs.core.IndexedSeq(G__12204__a,0);
} 
return G__12203__delegate.call(this,args);};
G__12203.cljs$lang$maxFixedArity = 0;
G__12203.cljs$lang$applyTo = (function (arglist__12205){
var args = cljs.core.seq(arglist__12205);
return G__12203__delegate(args);
});
G__12203.cljs$core$IFn$_invoke$arity$variadic = G__12203__delegate;
return G__12203;
})()
;

return null;
});
