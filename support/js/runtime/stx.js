// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.

function stx_colon_atom(datum,loc) { plt.Kernel.Struct.call(this, "make-stx_colon_atom", [datum,loc]);this.datum = datum;
this.loc = loc; }
                    stx_colon_atom.prototype = new plt.Kernel.Struct();

stx_colon_atom.prototype.isEqual = function(other) {
              if (other != null && other != undefined && other instanceof stx_colon_atom) {
                return ((plt.Kernel.equal_question_((stx_colon_atom_dash_loc(this)),(stx_colon_atom_dash_loc(other))))&&((plt.Kernel.equal_question_((stx_colon_atom_dash_datum(this)),(stx_colon_atom_dash_datum(other))))&&plt.types.Logic.TRUE));
              } else {
                return false;
              }
           } 
function make_dash_stx_colon_atom(id0,id1) { return new stx_colon_atom(id0,id1); }
function stx_colon_atom_dash_datum(obj) {     if (stx_colon_atom_question_ (obj)) {        return obj.datum;     } else {         throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx_colon_atom_dash_datum: not a stx:atom: ~s', [obj]));     } }
function stx_colon_atom_dash_loc(obj) {     if (stx_colon_atom_question_ (obj)) {        return obj.loc;     } else {         throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx_colon_atom_dash_loc: not a stx:atom: ~s', [obj]));     } }
function stx_colon_atom_question_(obj) { 
              return obj != null && obj != undefined && obj instanceof stx_colon_atom; }
function stx_colon_list(elts,loc) { plt.Kernel.Struct.call(this, "make-stx_colon_list", [elts,loc]);this.elts = elts;
this.loc = loc; }
                    stx_colon_list.prototype = new plt.Kernel.Struct();

stx_colon_list.prototype.isEqual = function(other) {
              if (other != null && other != undefined && other instanceof stx_colon_list) {
                return ((plt.Kernel.equal_question_((stx_colon_list_dash_loc(this)),(stx_colon_list_dash_loc(other))))&&((plt.Kernel.equal_question_((stx_colon_list_dash_elts(this)),(stx_colon_list_dash_elts(other))))&&plt.types.Logic.TRUE));
              } else {
                return false;
              }
           } 
function make_dash_stx_colon_list(id0,id1) { return new stx_colon_list(id0,id1); }
function stx_colon_list_dash_elts(obj) {     if (stx_colon_list_question_ (obj)) {        return obj.elts;     } else {         throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx_colon_list_dash_elts: not a stx:list: ~s', [obj]));     } }
function stx_colon_list_dash_loc(obj) {     if (stx_colon_list_question_ (obj)) {        return obj.loc;     } else {         throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('stx_colon_list_dash_loc: not a stx:list: ~s', [obj]));     } }
function stx_colon_list_question_(obj) { 
              return obj != null && obj != undefined && obj instanceof stx_colon_list; }
function stx_question_(x) { return ((stx_colon_atom_question_(x))||(stx_colon_list_question_(x))); }
function stx_dash_e(a_dash_stx) { return ((stx_colon_atom_question_(a_dash_stx)) ?
 (stx_colon_atom_dash_datum(a_dash_stx)) :
 ((stx_colon_list_question_(a_dash_stx)) ?
 (stx_colon_list_dash_elts(a_dash_stx)) :
 (plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),(plt.types.String.makeInstance("Fell out of cond")))))); }
function stx_dash_loc(a_dash_stx) { return ((stx_colon_atom_question_(a_dash_stx)) ?
 (stx_colon_atom_dash_loc(a_dash_stx)) :
 ((stx_colon_list_question_(a_dash_stx)) ?
 (stx_colon_list_dash_loc(a_dash_stx)) :
 (plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),(plt.types.String.makeInstance("Fell out of cond")))))); }
function stx_dash_begins_dash_with_question_(a_dash_stx, a_dash_sym) { return ((stx_colon_atom_question_(a_dash_stx)) ?
 plt.types.Logic.FALSE :
 ((stx_colon_list_question_(a_dash_stx)) ?
 ((plt.Kernel.not((plt.Kernel.empty_question_((stx_colon_list_dash_elts(a_dash_stx))))))&&(plt.Kernel.symbol_question_((plt.Kernel.first((stx_colon_list_dash_elts(a_dash_stx))))))&&(plt.Kernel.symbol_equal__question_((plt.Kernel.first((stx_colon_list_dash_elts(a_dash_stx)))),a_dash_sym))) :
 (plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),(plt.types.String.makeInstance("Fell out of cond")))))); }
(function() { 
((function (toplevel_dash_expression_dash_show0) { 





 }))(plt.Kernel.identity)
})();