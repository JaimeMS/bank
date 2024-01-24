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
export class Recibo {
  private _codigo: string;
  public constructor() {
    if (stryMutAct_9fa48("42")) {
      {}
    } else {
      stryCov_9fa48("42");
      this._codigo = this.gerarCodigo();
    }
  }
  public get codigo(): string {
    if (stryMutAct_9fa48("43")) {
      {}
    } else {
      stryCov_9fa48("43");
      return this._codigo;
    }
  }
  private gerarCodigo(): string {
    if (stryMutAct_9fa48("44")) {
      {}
    } else {
      stryCov_9fa48("44");
      return Math.floor(stryMutAct_9fa48("45") ? Math.random() * 899999 - 100000 : (stryCov_9fa48("45"), (stryMutAct_9fa48("46") ? Math.random() / 899999 : (stryCov_9fa48("46"), Math.random() * 899999)) + 100000)).toString();
    }
  }
}