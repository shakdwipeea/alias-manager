// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('datascript.pull_api');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_parser');
datascript.pull_api.into_BANG_ = (function datascript$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,transient_coll,items);
});
datascript.pull_api._PLUS_default_limit_PLUS_ = (1000);
datascript.pull_api.initial_frame = (function datascript$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"multi?","multi?",-749311069),new cljs.core.Keyword(null,"eids","eids",1546550700),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"kvps","kvps",65308317),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"results","results",-1134170113)],[multi_QMARK_,eids,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)]);
});
datascript.pull_api.subpattern_frame = (function datascript$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.call(null,datascript.pull_api.initial_frame.call(null,pattern,eids,multi_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});
datascript.pull_api.reset_frame = (function datascript$pull_api$reset_frame(frame,eids,kvps){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__10254 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
var G__10254__$1 = ((cljs.core.seq.call(null,kvps))?cljs.core.conj_BANG_.call(null,G__10254,kvps):G__10254);
return G__10254__$1;
})());
});
datascript.pull_api.push_recursion = (function datascript$pull_api$push_recursion(rec,attr,eid){
var map__10257 = rec;
var map__10257__$1 = ((((!((map__10257 == null)))?((((map__10257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10257):map__10257);
var depth = cljs.core.get.call(null,map__10257__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var seen = cljs.core.get.call(null,map__10257__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return cljs.core.assoc.call(null,rec,new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.update.call(null,depth,attr,cljs.core.fnil.call(null,cljs.core.inc,(0))),new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,eid));
});
datascript.pull_api.seen_eid_QMARK_ = (function datascript$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"seen","seen",-518999789)], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datascript.pull_api.pull_seen_eid = (function datascript$pull_api$pull_seen_eid(frame,frames,eid){
if(cljs.core.truth_(datascript.pull_api.seen_eid_QMARK_.call(null,frame,eid))){
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)));
} else {
return null;
}
});
datascript.pull_api.single_frame_result = (function datascript$pull_api$single_frame_result(key,frame){
var G__10260 = new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame);
var G__10260__$1 = (((G__10260 == null))?null:cljs.core.persistent_BANG_.call(null,G__10260));
var G__10260__$2 = (((G__10260__$1 == null))?null:cljs.core.get.call(null,G__10260__$1,key));
return G__10260__$2;
});
datascript.pull_api.recursion_result = (function datascript$pull_api$recursion_result(frame){
return datascript.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534),frame);
});
datascript.pull_api.recursion_frame = (function datascript$pull_api$recursion_frame(parent,eid){
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(parent);
var rec = datascript.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.call(null,datascript.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","recursion","datascript.pull-api/recursion",-1897884534)),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datascript.pull_api.pull_recursion_frame = (function datascript$pull_api$pull_recursion_frame(db,p__10261){
var vec__10264 = p__10261;
var frame = cljs.core.nth.call(null,vec__10264,(0),null);
var frames = cljs.core.nthnext.call(null,vec__10264,(1));
var temp__4423__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto__){
var eids = temp__4423__auto__;
var frame__$1 = datascript.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),datascript.pull_api.recursion_result.call(null,frame));
var eid = cljs.core.first.call(null,eids);
var or__4473__auto__ = datascript.pull_api.pull_seen_eid.call(null,frame__$1,frames,eid);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return cljs.core.conj.call(null,frames,frame__$1,datascript.pull_api.recursion_frame.call(null,frame__$1,eid));
}
} else {
var kvps = datascript.pull_api.recursion_result.call(null,frame);
var results = (function (){var G__10265 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
var G__10265__$1 = ((cljs.core.seq.call(null,kvps))?cljs.core.conj_BANG_.call(null,G__10265,kvps):G__10265);
return G__10265__$1;
})();
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"results","results",-1134170113),results));
}
});
datascript.pull_api.recurse_attr = (function datascript$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__10268 = parent;
var map__10268__$1 = ((((!((map__10268 == null)))?((((map__10268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10268):map__10268);
var recursion = cljs.core.get.call(null,map__10268__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var pattern = cljs.core.get.call(null,map__10268__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var depth = cljs.core.get.call(null,cljs.core.get.call(null,recursion,new cljs.core.Keyword(null,"depth","depth",1768663640)),attr,(0));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.call(null,frames,parent);
} else {
return datascript.pull_api.pull_recursion_frame.call(null,db,cljs.core.conj.call(null,frames,parent,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"multi?","multi?",-749311069),multi_QMARK_,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"recursion","recursion",-749738765),recursion,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null)));
}
});
var pattern_10270 = (new datascript.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datascript.pull_api.expand_frame = ((function (pattern_10270){
return (function datascript$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datascript.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.call(null,datascript.pull_api.subpattern_frame.call(null,pattern_10270,eids,multi_QMARK_,attr_key),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});})(pattern_10270))
;
datascript.pull_api.pull_attr_datoms = (function datascript$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__10272){
var vec__10278 = p__10272;
var parent = cljs.core.nth.call(null,vec__10278,(0),null);
var frames = cljs.core.nthnext.call(null,vec__10278,(1));
var limit = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"limit","limit",-1355822363),datascript.pull_api._PLUS_default_limit_PLUS_);
var found = cljs.core.not_empty.call(null,(function (){var G__10279 = datoms;
var G__10279__$1 = (cljs.core.truth_(limit)?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,limit),G__10279):G__10279);
return G__10279__$1;
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datascript.db.ref_QMARK_.call(null,db,attr);
var component_QMARK_ = (ref_QMARK_) && (datascript.db.component_QMARK_.call(null,db,attr));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datascript.db.multival_QMARK_.call(null,db,attr):!(component_QMARK_));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__10278,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__10278,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__10278,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__10278,parent,frames))
);
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"subpattern","subpattern",45002743))){
return cljs.core.conj.call(null,frames,parent,datascript.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"subpattern","subpattern",45002743).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.call(null,datom_val,found),multi_QMARK_,attr_key));
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return datascript.pull_api.recurse_attr.call(null,db,attr_key,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__4461__auto__ = component_QMARK_;
if(and__4461__auto__){
return forward_QMARK_;
} else {
return and__4461__auto__;
}
})())){
return cljs.core.conj.call(null,frames,parent,datascript.pull_api.expand_frame.call(null,parent,eid,attr_key,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found)));
} else {
var as_value = (function (){var G__10280 = datom_val;
var G__10280__$1 = ((ref_QMARK_)?cljs.core.comp.call(null,((function (G__10280,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__10278,parent,frames){
return (function (p1__10271_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[p1__10271_SHARP_]);
});})(G__10280,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__10278,parent,frames))
,G__10280):G__10280);
return G__10280__$1;
})();
var single_QMARK_ = !(multi_QMARK_);
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,parent,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key,(function (){var G__10281 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,as_value),found);
var G__10281__$1 = ((single_QMARK_)?cljs.core.first.call(null,G__10281):G__10281);
return G__10281__$1;
})()));

}
}
}
} else {
return cljs.core.conj.call(null,frames,(function (){var G__10282 = parent;
var G__10282__$1 = ((cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))?cljs.core.update.call(null,G__10282,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts)):G__10282);
return G__10282__$1;
})());
}
});
datascript.pull_api.pull_attr = (function datascript$pull_api$pull_attr(db,spec,eid,frames){
var vec__10284 = spec;
var attr_key = cljs.core.nth.call(null,vec__10284,(0),null);
var opts = cljs.core.nth.call(null,vec__10284,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),attr_key)){
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword("db","id","db/id",-1388397098),eid));
} else {
return frames;
}
} else {
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.call(null,attr_key,attr);
var results = ((forward_QMARK_)?datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datascript.pull_api.pull_attr_datoms.call(null,db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datascript.pull_api.filter_reverse_attrs = cljs.core.filter.call(null,(function (p__10285){
var vec__10286 = p__10285;
var k = cljs.core.nth.call(null,vec__10286,(0),null);
var v = cljs.core.nth.call(null,vec__10286,(1),null);
return cljs.core.not_EQ_.call(null,k,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(v));
}));
datascript.pull_api.expand_reverse_subpattern_frame = (function datascript$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datascript.pull_api.subpattern_frame.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),rattrs,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459));
});
datascript.pull_api.expand_result = (function datascript$pull_api$expand_result(frames,kvps){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),datascript.pull_api.into_BANG_,cljs.core.persistent_BANG_.call(null,kvps)));
});
datascript.pull_api.pull_expand_reverse_frame = (function datascript$pull_api$pull_expand_reverse_frame(db,p__10287){
var vec__10289 = p__10287;
var frame = cljs.core.nth.call(null,vec__10289,(0),null);
var frames = cljs.core.nthnext.call(null,vec__10289,(1));
return datascript.pull_api.expand_result.call(null,frames,datascript.pull_api.into_BANG_.call(null,new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154).cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__4473__auto__ = datascript.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datascript.pull-api","expand-rev","datascript.pull-api/expand-rev",2143627459),frame);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datascript.pull_api.pull_expand_frame = (function datascript$pull_api$pull_expand_frame(db,p__10290){
var vec__10293 = p__10290;
var frame = cljs.core.nth.call(null,vec__10293,(0),null);
var frames = cljs.core.nthnext.call(null,vec__10293,(1));
var temp__4423__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto__){
var datoms_by_attr = temp__4423__auto__;
var vec__10294 = cljs.core.first.call(null,datoms_by_attr);
var attr = cljs.core.nth.call(null,vec__10294,(0),null);
var datoms = cljs.core.nth.call(null,vec__10294,(1),null);
var opts = cljs.core.get.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datascript.pull_api.pull_attr_datoms.call(null,db,attr,attr,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.rest)));
} else {
var temp__4423__auto____$1 = cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,datascript.pull_api.filter_reverse_attrs,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
if(cljs.core.truth_(temp__4423__auto____$1)){
var rattrs = temp__4423__auto____$1;
var frame__$1 = cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand-rev","expand-rev",1249112650),new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154),new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.conj.call(null,frames,frame__$1,datascript.pull_api.expand_reverse_subpattern_frame.call(null,frame__$1,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs));
} else {
return datascript.pull_api.expand_result.call(null,frames,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datascript.pull_api.pull_wildcard_expand = (function datascript$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by.call(null,(function (d){
return d.a;
}),datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__10298 = frame;
var map__10298__$1 = ((((!((map__10298 == null)))?((((map__10298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10298):map__10298);
var attr = cljs.core.get.call(null,map__10298__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var recursion = cljs.core.get.call(null,map__10298__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var rec = (function (){var G__10300 = recursion;
var G__10300__$1 = ((cljs.core.some_QMARK_.call(null,attr))?datascript.pull_api.push_recursion.call(null,G__10300,attr,eid):G__10300);
return G__10300__$1;
})();
return datascript.pull_api.pull_expand_frame.call(null,db,cljs.core.conj.call(null,frames,frame,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)),new cljs.core.Keyword(null,"eid","eid",559519930),eid,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.seq.call(null,datoms),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec], null)));
});
datascript.pull_api.pull_wildcard = (function datascript$pull_api$pull_wildcard(db,frame,frames){
var map__10303 = frame;
var map__10303__$1 = ((((!((map__10303 == null)))?((((map__10303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10303):map__10303);
var eid = cljs.core.get.call(null,map__10303__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var pattern = cljs.core.get.call(null,map__10303__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var or__4473__auto__ = datascript.pull_api.pull_seen_eid.call(null,frame,frames,eid);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return datascript.pull_api.pull_wildcard_expand.call(null,db,frame,frames,eid,pattern);
}
});
datascript.pull_api.pull_pattern_frame = (function datascript$pull_api$pull_pattern_frame(db,p__10305){
while(true){
var vec__10307 = p__10305;
var frame = cljs.core.nth.call(null,vec__10307,(0),null);
var frames = cljs.core.nthnext.call(null,vec__10307,(1));
var temp__4423__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto__){
var eids = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(frame))){
return datascript.pull_api.pull_wildcard.call(null,db,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"eid","eid",559519930),cljs.core.first.call(null,eids),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),frames);
} else {
var temp__4423__auto____$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__4423__auto____$1){
var specs = temp__4423__auto____$1;
var spec = cljs.core.first.call(null,specs);
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.rest.call(null,specs)));
return datascript.pull_api.pull_attr.call(null,db,spec,cljs.core.first.call(null,eids),new_frames);
} else {
var G__10308 = db;
var G__10309 = cljs.core.conj.call(null,frames,datascript.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),cljs.core.not_empty.call(null,cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__10308;
p__10305 = G__10309;
continue;
}
}
} else {
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)));
}
break;
}
});
datascript.pull_api.pull_pattern = (function datascript$pull_api$pull_pattern(db,frames){
while(true){
var G__10314 = (((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)).fqn:null);
switch (G__10314) {
case "expand":
var G__10319 = db;
var G__10320 = datascript.pull_api.pull_expand_frame.call(null,db,frames);
db = G__10319;
frames = G__10320;
continue;

break;
case "expand-rev":
var G__10321 = db;
var G__10322 = datascript.pull_api.pull_expand_reverse_frame.call(null,db,frames);
db = G__10321;
frames = G__10322;
continue;

break;
case "pattern":
var G__10323 = db;
var G__10324 = datascript.pull_api.pull_pattern_frame.call(null,db,frames);
db = G__10323;
frames = G__10324;
continue;

break;
case "recursion":
var G__10325 = db;
var G__10326 = datascript.pull_api.pull_recursion_frame.call(null,db,frames);
db = G__10325;
frames = G__10326;
continue;

break;
case "done":
var vec__10315 = frames;
var f = cljs.core.nth.call(null,vec__10315,(0),null);
var remaining = cljs.core.nthnext.call(null,vec__10315,(1));
var result = (function (){var G__10316 = cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(f));
var G__10316__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"multi?","multi?",-749311069).cljs$core$IFn$_invoke$arity$1(f)))?cljs.core.first.call(null,G__10316):G__10316);
return G__10316__$1;
})();
if(cljs.core.seq.call(null,remaining)){
var G__10327 = db;
var G__10328 = cljs.core.conj.call(null,cljs.core.rest.call(null,remaining),(function (){var G__10317 = cljs.core.first.call(null,remaining);
var G__10317__$1 = (cljs.core.truth_(result)?cljs.core.update.call(null,G__10317,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(f),result):G__10317);
return G__10317__$1;
})());
db = G__10327;
frames = G__10328;
continue;
} else {
return result;
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)))].join('')));

}
break;
}
});
datascript.pull_api.pull_spec = (function datascript$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10329_SHARP_){
return datascript.db.entid_strict.call(null,db,p1__10329_SHARP_);
})),eids);
return datascript.pull_api.pull_pattern.call(null,db,cljs.core._conj.call(null,cljs.core.List.EMPTY,datascript.pull_api.initial_frame.call(null,pattern,eids__$1,multi_QMARK_)));
});
datascript.pull_api.pull = (function datascript$pull_api$pull(db,selector,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.pull_api.pull_spec.call(null,db,datascript.pull_parser.parse_pull.call(null,selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(db,selector,eids){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.pull_api.pull_spec.call(null,db,datascript.pull_parser.parse_pull.call(null,selector),eids,true);
});

//# sourceMappingURL=pull_api.js.map