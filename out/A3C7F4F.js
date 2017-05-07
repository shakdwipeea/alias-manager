goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12740__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12741__i = 0, G__12741__a = new Array(arguments.length -  0);
while (G__12741__i < G__12741__a.length) {G__12741__a[G__12741__i] = arguments[G__12741__i + 0]; ++G__12741__i;}
  args = new cljs.core.IndexedSeq(G__12741__a,0);
} 
return G__12740__delegate.call(this,args);};
G__12740.cljs$lang$maxFixedArity = 0;
G__12740.cljs$lang$applyTo = (function (arglist__12742){
var args = cljs.core.seq(arglist__12742);
return G__12740__delegate(args);
});
G__12740.cljs$core$IFn$_invoke$arity$variadic = G__12740__delegate;
return G__12740;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12743__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12744__i = 0, G__12744__a = new Array(arguments.length -  0);
while (G__12744__i < G__12744__a.length) {G__12744__a[G__12744__i] = arguments[G__12744__i + 0]; ++G__12744__i;}
  args = new cljs.core.IndexedSeq(G__12744__a,0);
} 
return G__12743__delegate.call(this,args);};
G__12743.cljs$lang$maxFixedArity = 0;
G__12743.cljs$lang$applyTo = (function (arglist__12745){
var args = cljs.core.seq(arglist__12745);
return G__12743__delegate(args);
});
G__12743.cljs$core$IFn$_invoke$arity$variadic = G__12743__delegate;
return G__12743;
})()
;

return null;
});
