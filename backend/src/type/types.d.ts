namespace Express {
    export interface Request{
        user : {
            id: string;
            nrp: string;
            fullname: string;
            nickname: string | null;
            description: string | null;
            gender: $Enums.Gender;
            role: int;
            contact: string | null;
            profilPic: string | null;
            email: string | null;
            createdAt: Date;
            updateAt: Date;
        },
        praktikan : {
            kelompok : number;
        }
    }
}

interface getScorePraktikanfromAslab{
    userId: string;
    kelompokId: string;
    aslabId: string;
    aslab: string;
    nilai1: number;
    nilai2: number;
    nilai3: number;
    nilai4: number;
    nilai5: number;
    nilaiTotal: number;
    comment: string;
}
