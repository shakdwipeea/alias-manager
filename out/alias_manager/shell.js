// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('alias_manager.shell');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
alias_manager.shell.exec = (function alias_manager$shell$exec(command){
var child_ps = cljs.nodejs.require.call(null,"child_process");
return child_ps.exec(command,((function (child_ps){
return (function (error,stdout,stderr){
return cljs.core.println.call(null,((cljs.core.empty_QMARK_.call(null,stdout))?stderr:stdout));
});})(child_ps))
);
});

//# sourceMappingURL=shell.js.map