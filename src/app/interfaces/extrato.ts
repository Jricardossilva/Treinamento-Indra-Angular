

export interface IExtrato {
    agencia: string;
    dataFim: Date;
    dataIni: Date;
    numConta: string;
    
    descricao?: string;
    tpOperacao?: string;
    valor?: string;
    data?: Date;
}
