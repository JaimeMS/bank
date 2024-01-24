import { NegocioErro } from "../error/NegocioErro";

export class NumeroConta {
    private _numero: string;

    public constructor(numero: string) {
        if(!this.temSeisDigitos(numero))
            throw new NegocioErro("número de conta inválida");

        this._numero = numero;
    }

    public get numero(): string {
        return this._numero;
    }

    private temSeisDigitos(numero: string): boolean {
        const regExp: RegExp = /^\d{6}$/;
        return regExp.test(numero);
    }
}