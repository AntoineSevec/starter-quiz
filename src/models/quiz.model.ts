import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme: string[];
    id: string;
    questions: Question[];
    creationDate?: Date;
}

