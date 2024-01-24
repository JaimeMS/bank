// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { NegocioErro } from "../error/NegocioErro";
export class NumeroConta {
  private _numero: string;
  public constructor(numero: string) {
    if (stryMutAct_9fa48("31")) {
      {}
    } else {
      stryCov_9fa48("31");
      if (stryMutAct_9fa48("34") ? false : stryMutAct_9fa48("33") ? true : stryMutAct_9fa48("32") ? this.temSeisDigitos(numero) : (stryCov_9fa48("32", "33", "34"), !this.temSeisDigitos(numero))) throw new NegocioErro(stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), "número de conta inválida"));
      this._numero = numero;
    }
  }
  public get numero(): string {
    if (stryMutAct_9fa48("36")) {
      {}
    } else {
      stryCov_9fa48("36");
      return this._numero;
    }
  }
  private temSeisDigitos(numero: string): boolean {
    if (stryMutAct_9fa48("37")) {
      {}
    } else {
      stryCov_9fa48("37");
      const regExp: RegExp = stryMutAct_9fa48("41") ? /^\D{6}$/ : stryMutAct_9fa48("40") ? /^\d$/ : stryMutAct_9fa48("39") ? /^\d{6}/ : stryMutAct_9fa48("38") ? /\d{6}$/ : (stryCov_9fa48("38", "39", "40", "41"), /^\d{6}$/);
      return regExp.test(numero);
    }
  }
}