// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
return null;
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
return null;
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return null;
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
return null;
});

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.parser._collect[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,pred,acc);
} else {
var m__5129__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,acc);
} else {
var m__5129__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.parser._postwalk[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,f);
} else {
var m__5129__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__9674_SHARP_,p2__9673_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__9673_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__9674_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args9675 = [];
var len__5531__auto___9679 = arguments.length;
var i__5532__auto___9680 = (0);
while(true){
if((i__5532__auto___9680 < len__5531__auto___9679)){
args9675.push((arguments[i__5532__auto___9680]));

var G__9681 = (i__5532__auto___9680 + (1));
i__5532__auto___9680 = G__9681;
continue;
} else {
}
break;
}

var G__9677 = args9675.length;
switch (G__9677) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9675.length)].join('')));

}
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.call(null,pred,form,cljs.core.PersistentVector.EMPTY);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (acc__$1,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = 3;
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__4473__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__4473__auto__){
return or__4473__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__9689){
var vec__9690 = p__9689;
var k = cljs.core.nth.call(null,vec__9690,(0),null);
var v = cljs.core.nth.call(null,vec__9690,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__9683_SHARP_){
return datascript$parser$postwalk.call(null,p1__9683_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__9684_SHARP_){
return datascript$parser$postwalk.call(null,p1__9684_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__4473__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9695,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9697 = k9695;
switch (G__9697) {
default:
return cljs.core.get.call(null,self__.__extmap,k9695,else__5090__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Placeholder{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9694){
var self__ = this;
var G__9694__$1 = this;
return (new cljs.core.RecordIter((0),G__9694__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9694){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9698 = cljs.core.keyword_identical_QMARK_;
var expr__9699 = k__5095__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9694),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9694){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Placeholder(G__9694,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9691){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9692,acc9693){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9693;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9693){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9693;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__9696){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__9696),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9706,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9708 = (((k9706 instanceof cljs.core.Keyword))?k9706.fqn:null);
switch (G__9708) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9706,else__5090__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Variable{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9705){
var self__ = this;
var G__9705__$1 = this;
return (new cljs.core.RecordIter((0),G__9705__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9705){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9709 = cljs.core.keyword_identical_QMARK_;
var expr__9710 = k__5095__auto__;
if(cljs.core.truth_(pred__9709.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__9710))){
return (new datascript.parser.Variable(G__9705,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9705),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9705){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__9705,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9702){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f9702),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9703,acc9704){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9703,self__.symbol,acc9704);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9704){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9704,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__9707){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__9707),null,cljs.core.dissoc.call(null,G__9707,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9717,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9719 = (((k9717 instanceof cljs.core.Keyword))?k9717.fqn:null);
switch (G__9719) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9717,else__5090__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.SrcVar{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9716){
var self__ = this;
var G__9716__$1 = this;
return (new cljs.core.RecordIter((0),G__9716__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9716){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9720 = cljs.core.keyword_identical_QMARK_;
var expr__9721 = k__5095__auto__;
if(cljs.core.truth_(pred__9720.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__9721))){
return (new datascript.parser.SrcVar(G__9716,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9716),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9716){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__9716,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9713){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f9713),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9714,acc9715){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9714,self__.symbol,acc9715);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9715){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9715,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__9718){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__9718),null,cljs.core.dissoc.call(null,G__9718,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9728,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9730 = k9728;
switch (G__9730) {
default:
return cljs.core.get.call(null,self__.__extmap,k9728,else__5090__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9727){
var self__ = this;
var G__9727__$1 = this;
return (new cljs.core.RecordIter((0),G__9727__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9727){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9731 = cljs.core.keyword_identical_QMARK_;
var expr__9732 = k__5095__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9727),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9727){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__9727,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9724){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9725,acc9726){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9726;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9726){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9726;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__9729){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__9729),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9739,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9741 = k9739;
switch (G__9741) {
default:
return cljs.core.get.call(null,self__.__extmap,k9739,else__5090__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.RulesVar{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9738){
var self__ = this;
var G__9738__$1 = this;
return (new cljs.core.RecordIter((0),G__9738__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9738){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9742 = cljs.core.keyword_identical_QMARK_;
var expr__9743 = k__5095__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9738),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9738){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.RulesVar(G__9738,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9735){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9736,acc9737){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9737;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9737){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9737;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__9740){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__9740),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9750,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9752 = (((k9750 instanceof cljs.core.Keyword))?k9750.fqn:null);
switch (G__9752) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9750,else__5090__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Constant{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9749){
var self__ = this;
var G__9749__$1 = this;
return (new cljs.core.RecordIter((0),G__9749__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9749){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9753 = cljs.core.keyword_identical_QMARK_;
var expr__9754 = k__5095__auto__;
if(cljs.core.truth_(pred__9753.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__9754))){
return (new datascript.parser.Constant(G__9749,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9749),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9749){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__9749,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9746){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f9746),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9747,acc9748){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9747,self__.value,acc9748);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9748){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9748,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__9751){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__9751),null,cljs.core.dissoc.call(null,G__9751,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9761,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9763 = (((k9761 instanceof cljs.core.Keyword))?k9761.fqn:null);
switch (G__9763) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9761,else__5090__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9760){
var self__ = this;
var G__9760__$1 = this;
return (new cljs.core.RecordIter((0),G__9760__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9760){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9764 = cljs.core.keyword_identical_QMARK_;
var expr__9765 = k__5095__auto__;
if(cljs.core.truth_(pred__9764.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__9765))){
return (new datascript.parser.PlainSymbol(G__9760,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9760),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9760){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__9760,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9757){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f9757),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9758,acc9759){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9758,self__.symbol,acc9759);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9759){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9759,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__9762){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__9762),null,cljs.core.dissoc.call(null,G__9762,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__4473__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9772,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9774 = (((k9772 instanceof cljs.core.Keyword))?k9772.fqn:null);
switch (G__9774) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9772,else__5090__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.RuleVars{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9771){
var self__ = this;
var G__9771__$1 = this;
return (new cljs.core.RecordIter((0),G__9771__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9771){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9775 = cljs.core.keyword_identical_QMARK_;
var expr__9776 = k__5095__auto__;
if(cljs.core.truth_(pred__9775.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__9776))){
return (new datascript.parser.RuleVars(G__9771,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9775.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__9776))){
return (new datascript.parser.RuleVars(self__.required,G__9771,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9771),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9771){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__9771,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9768){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f9768),datascript.parser.postwalk.call(null,self__.free,f9768),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9769,acc9770){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9769,self__.free,datascript.parser.collect.call(null,pred9769,self__.required,acc9770));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9770){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9770,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__9773){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__9773),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__9773),null,cljs.core.dissoc.call(null,G__9773,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__9780 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__9780,(0),null);
var rest = cljs.core.nth.call(null,vec__9780,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9785,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9787 = k9785;
switch (G__9787) {
default:
return cljs.core.get.call(null,self__.__extmap,k9785,else__5090__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9784){
var self__ = this;
var G__9784__$1 = this;
return (new cljs.core.RecordIter((0),G__9784__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9784){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9788 = cljs.core.keyword_identical_QMARK_;
var expr__9789 = k__5095__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9784),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9784){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__9784,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9781){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9782,acc9783){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9783;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9783){
var self__ = this;
var ___8621__auto____$1 = this;
return acc9783;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__9786){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__9786),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9796,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9798 = (((k9796 instanceof cljs.core.Keyword))?k9796.fqn:null);
switch (G__9798) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9796,else__5090__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.BindScalar{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9795){
var self__ = this;
var G__9795__$1 = this;
return (new cljs.core.RecordIter((0),G__9795__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9795){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9799 = cljs.core.keyword_identical_QMARK_;
var expr__9800 = k__5095__auto__;
if(cljs.core.truth_(pred__9799.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__9800))){
return (new datascript.parser.BindScalar(G__9795,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9795),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9795){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__9795,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9792){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f9792),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9793,acc9794){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9793,self__.variable,acc9794);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9794){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9794,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__9797){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__9797),null,cljs.core.dissoc.call(null,G__9797,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9807,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9809 = (((k9807 instanceof cljs.core.Keyword))?k9807.fqn:null);
switch (G__9809) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9807,else__5090__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.BindTuple{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9806){
var self__ = this;
var G__9806__$1 = this;
return (new cljs.core.RecordIter((0),G__9806__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9806){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9810 = cljs.core.keyword_identical_QMARK_;
var expr__9811 = k__5095__auto__;
if(cljs.core.truth_(pred__9810.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__9811))){
return (new datascript.parser.BindTuple(G__9806,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9806),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9806){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__9806,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9803){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f9803),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9804,acc9805){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9804,self__.bindings,acc9805);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9805){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9805,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__9808){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__9808),null,cljs.core.dissoc.call(null,G__9808,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9818,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9820 = (((k9818 instanceof cljs.core.Keyword))?k9818.fqn:null);
switch (G__9820) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9818,else__5090__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.BindColl{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9817){
var self__ = this;
var G__9817__$1 = this;
return (new cljs.core.RecordIter((0),G__9817__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9817){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9821 = cljs.core.keyword_identical_QMARK_;
var expr__9822 = k__5095__auto__;
if(cljs.core.truth_(pred__9821.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__9822))){
return (new datascript.parser.BindColl(G__9817,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9817),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9817){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__9817,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9814){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f9814),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9815,acc9816){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9815,self__.binding,acc9816);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9816){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9816,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__9819){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__9819),null,cljs.core.dissoc.call(null,G__9819,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__4461__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__4461__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__4461__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__4473__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__4461__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__4461__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__4461__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__4473__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
var or__4473__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__4473__auto____$2)){
return or__4473__auto____$2;
} else {
var or__4473__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4473__auto____$3)){
return or__4473__auto____$3;
} else {
var or__4473__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__4473__auto____$4)){
return or__4473__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__5128__auto__ = (((this$ == null))?null:this$);
var m__5129__auto__ = (datascript.parser._find_vars[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,this$);
} else {
var m__5129__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9829,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9831 = (((k9829 instanceof cljs.core.Keyword))?k9829.fqn:null);
switch (G__9831) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9829,else__5090__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Aggregate{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9828){
var self__ = this;
var G__9828__$1 = this;
return (new cljs.core.RecordIter((0),G__9828__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9828){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9832 = cljs.core.keyword_identical_QMARK_;
var expr__9833 = k__5095__auto__;
if(cljs.core.truth_(pred__9832.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__9833))){
return (new datascript.parser.Aggregate(G__9828,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9832.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9833))){
return (new datascript.parser.Aggregate(self__.fn,G__9828,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9828),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9828){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__9828,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9825){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f9825),datascript.parser.postwalk.call(null,self__.args,f9825),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9826,acc9827){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9826,self__.args,datascript.parser.collect.call(null,pred9826,self__.fn,acc9827));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9827){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9827,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__9830){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__9830),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9830),null,cljs.core.dissoc.call(null,G__9830,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9840,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9842 = (((k9840 instanceof cljs.core.Keyword))?k9840.fqn:null);
switch (G__9842) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9840,else__5090__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Pull{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9839){
var self__ = this;
var G__9839__$1 = this;
return (new cljs.core.RecordIter((0),G__9839__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9839){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9843 = cljs.core.keyword_identical_QMARK_;
var expr__9844 = k__5095__auto__;
if(cljs.core.truth_(pred__9843.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9844))){
return (new datascript.parser.Pull(G__9839,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9843.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__9844))){
return (new datascript.parser.Pull(self__.source,G__9839,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9843.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__9844))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__9839,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9839),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9839){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__9839,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9836){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f9836),datascript.parser.postwalk.call(null,self__.variable,f9836),datascript.parser.postwalk.call(null,self__.pattern,f9836),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9837,acc9838){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9837,self__.pattern,datascript.parser.collect.call(null,pred9837,self__.variable,datascript.parser.collect.call(null,pred9837,self__.source,acc9838)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9838){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9838,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__9841){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9841),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__9841),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__9841),null,cljs.core.dissoc.call(null,G__9841,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__5128__auto__ = (((this$ == null))?null:this$);
var m__5129__auto__ = (datascript.parser.find_elements[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,this$);
} else {
var m__5129__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9851,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9853 = (((k9851 instanceof cljs.core.Keyword))?k9851.fqn:null);
switch (G__9853) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9851,else__5090__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.FindRel{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9850){
var self__ = this;
var G__9850__$1 = this;
return (new cljs.core.RecordIter((0),G__9850__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9850){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9854 = cljs.core.keyword_identical_QMARK_;
var expr__9855 = k__5095__auto__;
if(cljs.core.truth_(pred__9854.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__9855))){
return (new datascript.parser.FindRel(G__9850,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9850),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9850){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__9850,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9847){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f9847),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9848,acc9849){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9848,self__.elements,acc9849);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9849){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9849,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__9852){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__9852),null,cljs.core.dissoc.call(null,G__9852,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9862,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9864 = (((k9862 instanceof cljs.core.Keyword))?k9862.fqn:null);
switch (G__9864) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9862,else__5090__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.FindColl{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9861){
var self__ = this;
var G__9861__$1 = this;
return (new cljs.core.RecordIter((0),G__9861__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9861){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9865 = cljs.core.keyword_identical_QMARK_;
var expr__9866 = k__5095__auto__;
if(cljs.core.truth_(pred__9865.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__9866))){
return (new datascript.parser.FindColl(G__9861,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9861),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9861){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__9861,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9858){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f9858),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9859,acc9860){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9859,self__.element,acc9860);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9860){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9860,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__9863){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__9863),null,cljs.core.dissoc.call(null,G__9863,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9873,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9875 = (((k9873 instanceof cljs.core.Keyword))?k9873.fqn:null);
switch (G__9875) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9873,else__5090__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.FindScalar{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9872){
var self__ = this;
var G__9872__$1 = this;
return (new cljs.core.RecordIter((0),G__9872__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9872){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9876 = cljs.core.keyword_identical_QMARK_;
var expr__9877 = k__5095__auto__;
if(cljs.core.truth_(pred__9876.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__9877))){
return (new datascript.parser.FindScalar(G__9872,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9872),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9872){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__9872,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9869){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f9869),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9870,acc9871){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9870,self__.element,acc9871);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9871){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9871,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__9874){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__9874),null,cljs.core.dissoc.call(null,G__9874,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9884,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9886 = (((k9884 instanceof cljs.core.Keyword))?k9884.fqn:null);
switch (G__9886) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9884,else__5090__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.FindTuple{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9883){
var self__ = this;
var G__9883__$1 = this;
return (new cljs.core.RecordIter((0),G__9883__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9883){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9887 = cljs.core.keyword_identical_QMARK_;
var expr__9888 = k__5095__auto__;
if(cljs.core.truth_(pred__9887.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__9888))){
return (new datascript.parser.FindTuple(G__9883,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9883),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9883){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__9883,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9880){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f9880),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9881,acc9882){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9881,self__.elements,acc9882);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9882){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9882,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__9885){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__9885),null,cljs.core.dissoc.call(null,G__9885,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__9892 = form;
var fn = cljs.core.nth.call(null,vec__9892,(0),null);
var args = cljs.core.nthnext.call(null,vec__9892,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4461__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4461__auto__)){
return args_STAR_;
} else {
return and__4461__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__9894 = form;
var _ = cljs.core.nth.call(null,vec__9894,(0),null);
var fn = cljs.core.nth.call(null,vec__9894,(1),null);
var args = cljs.core.nthnext.call(null,vec__9894,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4461__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4461__auto__)){
return args_STAR_;
} else {
return and__4461__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__9896 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__9896,(0),null);
var pattern = cljs.core.nth.call(null,vec__9896,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__4473__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__4461__auto__ = src_STAR_;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__4461__auto____$1)){
return pattern_STAR_;
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__4473__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
var or__4473__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__4473__auto____$2)){
return or__4473__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__9898 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__9898__$1 = (((G__9898 == null))?null:(new datascript.parser.FindRel(G__9898,null,null,null)));
return G__9898__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__9900 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__9900__$1 = (((G__9900 == null))?null:(new datascript.parser.FindColl(G__9900,null,null,null)));
return G__9900__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__9902 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__9902__$1 = (((G__9902 == null))?null:(new datascript.parser.FindScalar(G__9902,null,null,null)));
return G__9902__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__9904 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__9904__$1 = (((G__9904 == null))?null:(new datascript.parser.FindTuple(G__9904,null,null,null)));
return G__9904__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__4473__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
var or__4473__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__4473__auto____$2)){
return or__4473__auto____$2;
} else {
var or__4473__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__4473__auto____$3)){
return or__4473__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__4473__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__4473__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__4473__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9909,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9911 = (((k9909 instanceof cljs.core.Keyword))?k9909.fqn:null);
switch (G__9911) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9909,else__5090__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Pattern{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9908){
var self__ = this;
var G__9908__$1 = this;
return (new cljs.core.RecordIter((0),G__9908__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9908){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9912 = cljs.core.keyword_identical_QMARK_;
var expr__9913 = k__5095__auto__;
if(cljs.core.truth_(pred__9912.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9913))){
return (new datascript.parser.Pattern(G__9908,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9912.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__9913))){
return (new datascript.parser.Pattern(self__.source,G__9908,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9908),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9908){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__9908,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9905){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f9905),datascript.parser.postwalk.call(null,self__.pattern,f9905),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9906,acc9907){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9906,self__.pattern,datascript.parser.collect.call(null,pred9906,self__.source,acc9907));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9907){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9907,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__9910){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9910),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__9910),null,cljs.core.dissoc.call(null,G__9910,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9920,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9922 = (((k9920 instanceof cljs.core.Keyword))?k9920.fqn:null);
switch (G__9922) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9920,else__5090__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Predicate{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9919){
var self__ = this;
var G__9919__$1 = this;
return (new cljs.core.RecordIter((0),G__9919__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9919){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9923 = cljs.core.keyword_identical_QMARK_;
var expr__9924 = k__5095__auto__;
if(cljs.core.truth_(pred__9923.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__9924))){
return (new datascript.parser.Predicate(G__9919,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9923.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9924))){
return (new datascript.parser.Predicate(self__.fn,G__9919,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9919),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9919){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__9919,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9916){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f9916),datascript.parser.postwalk.call(null,self__.args,f9916),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9917,acc9918){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9917,self__.args,datascript.parser.collect.call(null,pred9917,self__.fn,acc9918));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9918){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9918,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__9921){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__9921),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9921),null,cljs.core.dissoc.call(null,G__9921,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9931,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9933 = (((k9931 instanceof cljs.core.Keyword))?k9931.fqn:null);
switch (G__9933) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9931,else__5090__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Function{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9930){
var self__ = this;
var G__9930__$1 = this;
return (new cljs.core.RecordIter((0),G__9930__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9930){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9934 = cljs.core.keyword_identical_QMARK_;
var expr__9935 = k__5095__auto__;
if(cljs.core.truth_(pred__9934.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__9935))){
return (new datascript.parser.Function(G__9930,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9934.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9935))){
return (new datascript.parser.Function(self__.fn,G__9930,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9934.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__9935))){
return (new datascript.parser.Function(self__.fn,self__.args,G__9930,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9930),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9930){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__9930,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9927){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f9927),datascript.parser.postwalk.call(null,self__.args,f9927),datascript.parser.postwalk.call(null,self__.binding,f9927),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9928,acc9929){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9928,self__.binding,datascript.parser.collect.call(null,pred9928,self__.args,datascript.parser.collect.call(null,pred9928,self__.fn,acc9929)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9929){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9929,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__9932){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__9932),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9932),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__9932),null,cljs.core.dissoc.call(null,G__9932,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9942,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9944 = (((k9942 instanceof cljs.core.Keyword))?k9942.fqn:null);
switch (G__9944) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9942,else__5090__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9941){
var self__ = this;
var G__9941__$1 = this;
return (new cljs.core.RecordIter((0),G__9941__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9941){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9945 = cljs.core.keyword_identical_QMARK_;
var expr__9946 = k__5095__auto__;
if(cljs.core.truth_(pred__9945.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9946))){
return (new datascript.parser.RuleExpr(G__9941,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9945.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__9946))){
return (new datascript.parser.RuleExpr(self__.source,G__9941,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9945.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9946))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__9941,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9941),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9941){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__9941,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9938){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f9938),datascript.parser.postwalk.call(null,self__.name,f9938),datascript.parser.postwalk.call(null,self__.args,f9938),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9939,acc9940){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9939,self__.args,datascript.parser.collect.call(null,pred9939,self__.name,datascript.parser.collect.call(null,pred9939,self__.source,acc9940)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9940){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9940,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__9943){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9943),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__9943),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9943),null,cljs.core.dissoc.call(null,G__9943,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9953,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9955 = (((k9953 instanceof cljs.core.Keyword))?k9953.fqn:null);
switch (G__9955) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9953,else__5090__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Not{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9952){
var self__ = this;
var G__9952__$1 = this;
return (new cljs.core.RecordIter((0),G__9952__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9952){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9956 = cljs.core.keyword_identical_QMARK_;
var expr__9957 = k__5095__auto__;
if(cljs.core.truth_(pred__9956.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9957))){
return (new datascript.parser.Not(G__9952,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9956.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__9957))){
return (new datascript.parser.Not(self__.source,G__9952,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9956.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9957))){
return (new datascript.parser.Not(self__.source,self__.vars,G__9952,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9952),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9952){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__9952,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9949){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f9949),datascript.parser.postwalk.call(null,self__.vars,f9949),datascript.parser.postwalk.call(null,self__.clauses,f9949),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9950,acc9951){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9950,self__.clauses,datascript.parser.collect.call(null,pred9950,self__.vars,datascript.parser.collect.call(null,pred9950,self__.source,acc9951)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9951){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9951,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__9954){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9954),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__9954),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9954),null,cljs.core.dissoc.call(null,G__9954,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9964,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9966 = (((k9964 instanceof cljs.core.Keyword))?k9964.fqn:null);
switch (G__9966) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9964,else__5090__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Or{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9963){
var self__ = this;
var G__9963__$1 = this;
return (new cljs.core.RecordIter((0),G__9963__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9963){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9967 = cljs.core.keyword_identical_QMARK_;
var expr__9968 = k__5095__auto__;
if(cljs.core.truth_(pred__9967.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__9968))){
return (new datascript.parser.Or(G__9963,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9967.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__9968))){
return (new datascript.parser.Or(self__.source,G__9963,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9967.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9968))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__9963,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9963),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9963){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__9963,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9960){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f9960),datascript.parser.postwalk.call(null,self__.rule_vars,f9960),datascript.parser.postwalk.call(null,self__.clauses,f9960),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9961,acc9962){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9961,self__.clauses,datascript.parser.collect.call(null,pred9961,self__.rule_vars,datascript.parser.collect.call(null,pred9961,self__.source,acc9962)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9962){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc9962,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__9965){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__9965),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__9965),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9965),null,cljs.core.dissoc.call(null,G__9965,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k9975,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__9977 = (((k9975 instanceof cljs.core.Keyword))?k9975.fqn:null);
switch (G__9977) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9975,else__5090__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.And{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9974){
var self__ = this;
var G__9974__$1 = this;
return (new cljs.core.RecordIter((0),G__9974__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__9974){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__9978 = cljs.core.keyword_identical_QMARK_;
var expr__9979 = k__5095__auto__;
if(cljs.core.truth_(pred__9978.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__9979))){
return (new datascript.parser.And(G__9974,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__9974),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__9974){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__9974,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f9971){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f9971),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred9972,acc9973){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred9972,self__.clauses,acc9973);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc9973){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc9973,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__9976){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__9976),null,cljs.core.dissoc.call(null,G__9976,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__4473__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9983 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9983,(0),null);
var next_form = cljs.core.nth.call(null,vec__9983,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__9985 = form;
var fn = cljs.core.nth.call(null,vec__9985,(0),null);
var args = cljs.core.nthnext.call(null,vec__9985,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__4473__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__4461__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4461__auto__)){
return args_STAR_;
} else {
return and__4461__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9987 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__9987,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__9987,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__9990 = form;
var call = cljs.core.nth.call(null,vec__9990,(0),null);
var binding = cljs.core.nth.call(null,vec__9990,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9991 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__9991,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__9991,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9994 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__9994,(0),null);
var next_form = cljs.core.nth.call(null,vec__9994,(1),null);
var vec__9995 = next_form;
var name = cljs.core.nth.call(null,vec__9995,(0),null);
var args = cljs.core.nthnext.call(null,vec__9995,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_9998 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_9998)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_9998)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__10001 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__10001,(0),null);
var next_form = cljs.core.nth.call(null,vec__10001,(1),null);
var vec__10002 = next_form;
var sym = cljs.core.nth.call(null,vec__10002,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__10002,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__10005 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__10005,(0),null);
var next_form = cljs.core.nth.call(null,vec__10005,(1),null);
var vec__10006 = next_form;
var sym = cljs.core.nth.call(null,vec__10006,(0),null);
var vars = cljs.core.nth.call(null,vec__10006,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__10006,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__4461__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4461__auto__)){
return clauses_STAR_;
} else {
return and__4461__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__10015 = clause;
var map__10015__$1 = ((((!((map__10015 == null)))?((((map__10015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10015):map__10015);
var map__10016 = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__10016__$1 = ((((!((map__10016 == null)))?((((map__10016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10016):map__10016);
var required = cljs.core.get.call(null,map__10016__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__10016__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__10015__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__10019_10023 = cljs.core.seq.call(null,clauses);
var chunk__10020_10024 = null;
var count__10021_10025 = (0);
var i__10022_10026 = (0);
while(true){
if((i__10022_10026 < count__10021_10025)){
var clause_10027__$1 = cljs.core._nth.call(null,chunk__10020_10024,i__10022_10026);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_10027__$1], null),form);

var G__10028 = seq__10019_10023;
var G__10029 = chunk__10020_10024;
var G__10030 = count__10021_10025;
var G__10031 = (i__10022_10026 + (1));
seq__10019_10023 = G__10028;
chunk__10020_10024 = G__10029;
count__10021_10025 = G__10030;
i__10022_10026 = G__10031;
continue;
} else {
var temp__4425__auto___10032 = cljs.core.seq.call(null,seq__10019_10023);
if(temp__4425__auto___10032){
var seq__10019_10033__$1 = temp__4425__auto___10032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10019_10033__$1)){
var c__5276__auto___10034 = cljs.core.chunk_first.call(null,seq__10019_10033__$1);
var G__10035 = cljs.core.chunk_rest.call(null,seq__10019_10033__$1);
var G__10036 = c__5276__auto___10034;
var G__10037 = cljs.core.count.call(null,c__5276__auto___10034);
var G__10038 = (0);
seq__10019_10023 = G__10035;
chunk__10020_10024 = G__10036;
count__10021_10025 = G__10037;
i__10022_10026 = G__10038;
continue;
} else {
var clause_10039__$1 = cljs.core.first.call(null,seq__10019_10033__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_10039__$1], null),form);

var G__10040 = cljs.core.next.call(null,seq__10019_10033__$1);
var G__10041 = null;
var G__10042 = (0);
var G__10043 = (0);
seq__10019_10023 = G__10040;
chunk__10020_10024 = G__10041;
count__10021_10025 = G__10042;
i__10022_10026 = G__10043;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__10046 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__10046,(0),null);
var next_form = cljs.core.nth.call(null,vec__10046,(1),null);
var vec__10047 = next_form;
var sym = cljs.core.nth.call(null,vec__10047,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__10047,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__10050 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__10050,(0),null);
var next_form = cljs.core.nth.call(null,vec__10050,(1),null);
var vec__10051 = next_form;
var sym = cljs.core.nth.call(null,vec__10051,(0),null);
var vars = cljs.core.nth.call(null,vec__10051,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__10051,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__4461__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4461__auto__)){
return clauses_STAR_;
} else {
return and__4461__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__4473__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
var or__4473__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__4473__auto____$1)){
return or__4473__auto____$1;
} else {
var or__4473__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__4473__auto____$2)){
return or__4473__auto____$2;
} else {
var or__4473__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__4473__auto____$3)){
return or__4473__auto____$3;
} else {
var or__4473__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__4473__auto____$4)){
return or__4473__auto____$4;
} else {
var or__4473__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__4473__auto____$5)){
return or__4473__auto____$5;
} else {
var or__4473__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__4473__auto____$6)){
return or__4473__auto____$6;
} else {
var or__4473__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__4473__auto____$7)){
return or__4473__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__4473__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k10057,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__10059 = (((k10057 instanceof cljs.core.Keyword))?k10057.fqn:null);
switch (G__10059) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10057,else__5090__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10056){
var self__ = this;
var G__10056__$1 = this;
return (new cljs.core.RecordIter((0),G__10056__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__10056){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__10060 = cljs.core.keyword_identical_QMARK_;
var expr__10061 = k__5095__auto__;
if(cljs.core.truth_(pred__10060.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__10061))){
return (new datascript.parser.RuleBranch(G__10056,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10060.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__10061))){
return (new datascript.parser.RuleBranch(self__.vars,G__10056,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__10056),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__10056){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__10056,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f10053){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f10053),datascript.parser.postwalk.call(null,self__.clauses,f10053),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred10054,acc10055){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred10054,self__.clauses,datascript.parser.collect.call(null,pred10054,self__.vars,acc10055));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc10055){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10055,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__10058){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__10058),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__10058),null,cljs.core.dissoc.call(null,G__10058,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k10068,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__10070 = (((k10068 instanceof cljs.core.Keyword))?k10068.fqn:null);
switch (G__10070) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10068,else__5090__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Rule{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10067){
var self__ = this;
var G__10067__$1 = this;
return (new cljs.core.RecordIter((0),G__10067__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__10067){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__10071 = cljs.core.keyword_identical_QMARK_;
var expr__10072 = k__5095__auto__;
if(cljs.core.truth_(pred__10071.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__10072))){
return (new datascript.parser.Rule(G__10067,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10071.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__10072))){
return (new datascript.parser.Rule(self__.name,G__10067,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__10067),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__10067){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__10067,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f10064){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f10064),datascript.parser.postwalk.call(null,self__.branches,f10064),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred10065,acc10066){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred10065,self__.branches,datascript.parser.collect.call(null,pred10065,self__.name,acc10066));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc10066){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10066,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__10069){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__10069),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__10069),null,cljs.core.dissoc.call(null,G__10069,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__10075_SHARP_){
return (p1__10075_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__10076_SHARP_){
return (p1__10076_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__10079 = form;
var head = cljs.core.nth.call(null,vec__10079,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__10079,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__10080 = head;
var name = cljs.core.nth.call(null,vec__10080,(0),null);
var vars = cljs.core.nthnext.call(null,vec__10080,(1));
var name_STAR_ = (function (){var or__4473__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__4473__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__10087 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__10089 = null;
var count__10090 = (0);
var i__10091 = (0);
while(true){
if((i__10091 < count__10090)){
var b = cljs.core._nth.call(null,chunk__10089,i__10091);
var vars_10093 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_10093))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_10093)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__10094 = seq__10087;
var G__10095 = chunk__10089;
var G__10096 = count__10090;
var G__10097 = (i__10091 + (1));
seq__10087 = G__10094;
chunk__10089 = G__10095;
count__10090 = G__10096;
i__10091 = G__10097;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10087);
if(temp__4425__auto__){
var seq__10087__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10087__$1)){
var c__5276__auto__ = cljs.core.chunk_first.call(null,seq__10087__$1);
var G__10098 = cljs.core.chunk_rest.call(null,seq__10087__$1);
var G__10099 = c__5276__auto__;
var G__10100 = cljs.core.count.call(null,c__5276__auto__);
var G__10101 = (0);
seq__10087 = G__10098;
chunk__10089 = G__10099;
count__10090 = G__10100;
i__10091 = G__10101;
continue;
} else {
var b = cljs.core.first.call(null,seq__10087__$1);
var vars_10102 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_10102))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_10102)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__10103 = cljs.core.next.call(null,seq__10087__$1);
var G__10104 = null;
var G__10105 = (0);
var G__10106 = (0);
seq__10087 = G__10103;
chunk__10089 = G__10104;
count__10090 = G__10105;
i__10091 = G__10106;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__5245__auto__ = (function datascript$parser$parse_rules_$_iter__10116(s__10117){
return (new cljs.core.LazySeq(null,(function (){
var s__10117__$1 = s__10117;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10117__$1);
if(temp__4425__auto__){
var s__10117__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10117__$2)){
var c__5243__auto__ = cljs.core.chunk_first.call(null,s__10117__$2);
var size__5244__auto__ = cljs.core.count.call(null,c__5243__auto__);
var b__10119 = cljs.core.chunk_buffer.call(null,size__5244__auto__);
if((function (){var i__10118 = (0);
while(true){
if((i__10118 < size__5244__auto__)){
var vec__10122 = cljs.core._nth.call(null,c__5243__auto__,i__10118);
var name = cljs.core.nth.call(null,vec__10122,(0),null);
var branches = cljs.core.nth.call(null,vec__10122,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__10118,vec__10122,name,branches,c__5243__auto__,size__5244__auto__,b__10119,s__10117__$2,temp__4425__auto__){
return (function (p1__10107_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__10107_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__10107_SHARP_),null,null,null));
});})(i__10118,vec__10122,name,branches,c__5243__auto__,size__5244__auto__,b__10119,s__10117__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__10119,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__10124 = (i__10118 + (1));
i__10118 = G__10124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10119),datascript$parser$parse_rules_$_iter__10116.call(null,cljs.core.chunk_rest.call(null,s__10117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10119),null);
}
} else {
var vec__10123 = cljs.core.first.call(null,s__10117__$2);
var name = cljs.core.nth.call(null,vec__10123,(0),null);
var branches = cljs.core.nth.call(null,vec__10123,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__10123,name,branches,s__10117__$2,temp__4425__auto__){
return (function (p1__10107_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__10107_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__10107_SHARP_),null,null,null));
});})(vec__10123,name,branches,s__10117__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__10116.call(null,cljs.core.rest.call(null,s__10117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5245__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5087__auto__,k__5088__auto__){
var self__ = this;
var this__5087__auto____$1 = this;
return cljs.core._lookup.call(null,this__5087__auto____$1,k__5088__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5089__auto__,k10129,else__5090__auto__){
var self__ = this;
var this__5089__auto____$1 = this;
var G__10131 = (((k10129 instanceof cljs.core.Keyword))?k10129.fqn:null);
switch (G__10131) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10129,else__5090__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5101__auto__,writer__5102__auto__,opts__5103__auto__){
var self__ = this;
var this__5101__auto____$1 = this;
var pr_pair__5104__auto__ = ((function (this__5101__auto____$1){
return (function (keyval__5105__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,cljs.core.pr_writer,""," ","",opts__5103__auto__,keyval__5105__auto__);
});})(this__5101__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5102__auto__,pr_pair__5104__auto__,"#datascript.parser.Query{",", ","}",opts__5103__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10128){
var self__ = this;
var G__10128__$1 = this;
return (new cljs.core.RecordIter((0),G__10128__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5085__auto__){
var self__ = this;
var this__5085__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5081__auto__){
var self__ = this;
var this__5081__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5091__auto__){
var self__ = this;
var this__5091__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5082__auto__){
var self__ = this;
var this__5082__auto____$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_imap.call(null,this__5082__auto____$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5083__auto__,other__5084__auto__){
var self__ = this;
var this__5083__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4461__auto__ = other__5084__auto__;
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = (this__5083__auto____$1.constructor === other__5084__auto__.constructor);
if(and__4461__auto____$1){
return cljs.core.equiv_map.call(null,this__5083__auto____$1,other__5084__auto__);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5096__auto__,k__5097__auto__){
var self__ = this;
var this__5096__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5097__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5096__auto____$1),self__.__meta),k__5097__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5097__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5094__auto__,k__5095__auto__,G__10128){
var self__ = this;
var this__5094__auto____$1 = this;
var pred__10132 = cljs.core.keyword_identical_QMARK_;
var expr__10133 = k__5095__auto__;
if(cljs.core.truth_(pred__10132.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__10133))){
return (new datascript.parser.Query(G__10128,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10132.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__10133))){
return (new datascript.parser.Query(self__.find,G__10128,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10132.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__10133))){
return (new datascript.parser.Query(self__.find,self__.with$,G__10128,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10132.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__10133))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__10128,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5095__auto__,G__10128),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5099__auto__){
var self__ = this;
var this__5099__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5086__auto__,G__10128){
var self__ = this;
var this__5086__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__10128,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5092__auto__,entry__5093__auto__){
var self__ = this;
var this__5092__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5093__auto__)){
return cljs.core._assoc.call(null,this__5092__auto____$1,cljs.core._nth.call(null,entry__5093__auto__,(0)),cljs.core._nth.call(null,entry__5093__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5092__auto____$1,entry__5093__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__8618__auto__,f10125){
var self__ = this;
var this__8618__auto____$1 = this;
var new__8619__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f10125),datascript.parser.postwalk.call(null,self__.with$,f10125),datascript.parser.postwalk.call(null,self__.in$,f10125),datascript.parser.postwalk.call(null,self__.where,f10125),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__8618__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__8620__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__8619__auto__,meta__8620__auto__);
} else {
return new__8619__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___8621__auto__,pred10126,acc10127){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect.call(null,pred10126,self__.where,datascript.parser.collect.call(null,pred10126,self__.in$,datascript.parser.collect.call(null,pred10126,self__.with$,datascript.parser.collect.call(null,pred10126,self__.find,acc10127))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___8621__auto__,acc10127){
var self__ = this;
var ___8621__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc10127,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__5121__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__5121__auto__,writer__5122__auto__){
return cljs.core._write.call(null,writer__5122__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__10130){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__10130),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__10130),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__10130),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__10130),null,cljs.core.dissoc.call(null,G__10130,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__10136 = parsed;
var G__10137 = q;
var G__10138 = cljs.core.next.call(null,qs);
parsed = G__10136;
key = G__10137;
qs = G__10138;
continue;
} else {
var G__10139 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__10140 = key;
var G__10141 = cljs.core.next.call(null,qs);
parsed = G__10139;
key = G__10140;
qs = G__10141;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_10148 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_10149 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_10150 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_10151 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_10152 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_10148,with_vars_10149),clojure.set.union.call(null,where_vars_10151,in_vars_10150));
var shared_10153 = clojure.set.intersection.call(null,find_vars_10148,with_vars_10149);
if(cljs.core.empty_QMARK_.call(null,unknown_10152)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_10152)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_10152,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_10153)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_10153)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_10153,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_10154 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_10155 = datascript.parser.collect.call(null,((function (in_vars_10154){
return (function (p1__10142_SHARP_){
return (p1__10142_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_10154))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_10156 = datascript.parser.collect.call(null,((function (in_vars_10154,in_sources_10155){
return (function (p1__10143_SHARP_){
return (p1__10143_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_10154,in_sources_10155))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__4461__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_10154);
if(cljs.core.truth_(and__4461__auto__)){
var and__4461__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_10155);
if(cljs.core.truth_(and__4461__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_10156);
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_10157 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_10157))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_10158 = datascript.parser.collect.call(null,(function (p1__10144_SHARP_){
return (p1__10144_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_10159 = datascript.parser.collect.call(null,((function (in_sources_10158){
return (function (p1__10145_SHARP_){
return (p1__10145_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_10158))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_10160 = clojure.set.difference.call(null,where_sources_10159,in_sources_10158);
if(cljs.core.empty_QMARK_.call(null,unknown_10160)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_10160)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_10160,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__10146_SHARP_){
return (p1__10146_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__10147_SHARP_){
return (p1__10147_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map