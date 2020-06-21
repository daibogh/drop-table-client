export interface Program {
    name: string
    description?: string
    hours?: number
    category?: string
    disciplines: Discipline[]
    created_at?: string
    deleted_at?: string
    id: number
    parameters: Parameter[]
  }
  
  export interface Discipline { id?: number; name: string; category: string }
  
  export interface Parameter{
    id?: number
    name?: string
    weight: number
    value?: string
  }
  export interface NewProgram {
    name: string
    description?: string
    hours?: number
    category?: string
    disciplines: number[]
    created_at?: string
    deleted_at?: string
    parameters?:Parameter[]
  }
  
  export interface Error{
    ok:boolean;
    error_code:string;
    error:  HTTPValidationError;
  }
  export interface HTTPValidationError {
    detail?: ValidationError[]
  }
  
  export interface ValidationError{ loc: string[]; msg: string; type: string }

  export interface MiniDiscipline {
    id: number;
    name: string;
  }

  export interface YearDiff {
    added: MiniDiscipline[],
    removed: MiniDiscipline[]
  }

  export interface YearStats {
    diff: YearDiff,
    rating?: 0
  }

  export interface Stats {
    ok: boolean;
    data: YearStats[]
  }