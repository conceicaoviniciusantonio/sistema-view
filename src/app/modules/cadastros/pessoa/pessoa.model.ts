export class Pessoa {
    id?: number;
    nome?: string;
    dataNasciemnto?: Date;
    rua?: string;
    cidade?: string;
    cep?: string;
    numero?: string;
    estado?: string;
    telefoneFixo?: string;
    telefoneCelular?: string;
}

export class PessoaConsultaResponse {
    lista?: Pessoa[];
    total?: number;
    paginas?: number;
}