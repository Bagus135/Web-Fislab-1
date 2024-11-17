interface AuthUserTypes{
    id: string;
    nrp: string;
    fullname: string;
    nickname: string | null;
    description: string | null;
    gender: 'male'| 'female';
    role: number;
    title : number[]
    github : string|null;
    ig : string|null;
    contact: string | null;
    profilPic: string | null;
    email: string | null;
    createdAt: Date;
    updateAt: Date;
}

interface ProfileTypes{
    id: string;
    nrp: string;
    fullname: string;
    nickname: string | null;
    description: string | null;
    gender: 'male'| 'female';
    role: number;
    title : number[]
    github : string|null;
    ig : string|null;
    contact: string | null;
    profilPic: string | null;
    email: string | null;
    createdAt: Date;
    updateAt: Date;
}

interface AxiosErr {
    code: string;
    message : string;
    response : {
        data : {
            error : string;
        }
        status : number;
        statusText : string;
    }
}

interface SignUpInputs {
    nrp: string;
    fullname: string;
    password : string;
    confirmPassword : string;
    gender : string
}

interface PraktikanScore {
    userID : string;
    kelompokid : string;
    nilaiRataRata : number;
    praktikum1 : DetailScorePraktikum;
    praktikum2 : DetailScorePraktikum;
    praktikum3 : DetailScorePraktikum;
    praktikum4 : DetailScorePraktikum;
    praktikum5 : DetailScorePraktikum;
    praktikum6 : DetailScorePraktikum;
    praktikum7 : DetailScorePraktikum;
    praktikum8 : DetailScorePraktikum;
    praktikum9 : DetailScorePraktikum;
    praktikum10 : DetailScorePraktikum;
}

interface DetailScorePraktikum {
    userId :string; 
    kelompokId : number;
    aslabId : string;
    aslab :string;
    name :string;
    noJudul : number; 
    nrp :string;
    PreLab :number?;
    InLab :number? ;
    Abstrak :number? ;
    Pendahuluan :number? ;
    Metodologi :number? ;
    Pembahasan :number? ;
    Kesimpulan :number? ;
    Format :number? ; 
    nilaiTotal :number? ;
    comment : string?;
}

interface PraktikanSchedule{
    JudulAslab: {
        id: string;
        idAslab: string;
        kodeJudul: string;
        noJudul: number;
        judul: string;
        Aslab: string;
    };
    Schedule: {
        idJudulAslab: string;
        kelompokid: string;
        date: string;
        hour : string;
    };
    idJudulAslab: string;
    kelompokId: string ;
    week: int
}

interface getShortLink {
    createdAt : string
    creatorId : string
    description: string;
    link : strring;
    shortLink : string;
    title : string;
    id: number;
}

interface AllUsers {
    fullname : string 
    gender : string 
    id : string 
    nrp : string;
    role : number
    title : string[]
}

interface PraktikanGroupRes{
    userId: string;
    nomorKel: string;
    nrp: string;
    fullname: string;
}

interface JudulAslabRes{
    id: string;
    idAslab: string;
    kodeJudul: string;
    noJudul: number;
    judul: string;
    Aslab: string;
}

interface AslabSessionRes {
    JudulAslab: {
        id: string;
        idAslab: string;
        kodeJudul: string;
        noJudul: number;
        judul: string;
        Aslab: string;
    };
    no: number;
    idJudulAslab: string;
    week: number;
    kelompokId: number;
}

interface aslabScoringDetails {
    userId :string; 
    kelompokId : number;
    aslabId : string;
    aslab :string;
    name :string;
    noJudul : number; 
    nrp :string;
    PreLab :number?;
    InLab :number? ;
    Abstrak :number? ;
    Pendahuluan :number? ;
    Metodologi :number? ;
    Pembahasan :number? ;
    Kesimpulan :number? ;
    Format :number? ; 
    nilaiTotal :number? ;
    comment : string?;
}

interface AslabSchedule{
    JudulAslab: {
        id: string;
        idAslab: string;
        kodeJudul: string;
        noJudul: number;
        judul: string;
        Aslab: string;
    };
    Schedule: {
        no: number;
        idJudulAslab: string;
        kelompokid: number;
        date: string;
        hour : string;
    } ;
    idJudulAslab: string;
    kelompokId: string ;
    noJudul : int;
    week: int;
    no : int
}

interface getAllAslabSchedule{
    aslabIds: {
        no: number;
        idJudulAslab: string;
        noJudul: number;
        week: number;
        kelompokId: number;
    };
    no: number;
    idJudulAslab: string;
    kelompokid: number;
    date: string;
    hour : string;
    no : number
}


interface getViewPraktikumAdminRes{
    aslab : string, 
    nilaiTotal : number, 
    kelompokId : number, 
    aslabId:string,
    nrp:string,
    noJudul:number,
    name : string
}

interface getViewScoreAdmin{
    nama: any;
    nrp: any;
    userID: string;
    kelompokid: number;
    nilaiRataRata : number;
    praktikum1 : getViewPraktikumAdminRes;
    praktikum2 : getViewPraktikumAdminRes;
    praktikum3 : getViewPraktikumAdminRes;
    praktikum4 : getViewPraktikumAdminRes;
    praktikum5 : getViewPraktikumAdminRes;
    praktikum6 : getViewPraktikumAdminRes;
    praktikum7 : getViewPraktikumAdminRes;
    praktikum8 : getViewPraktikumAdminRes;
    praktikum9 : getViewPraktikumAdminRes;
    praktikum10 : getViewPraktikumAdminRes;
}

interface AnnounceTypeRes {
    id: number;
    title: string;
    description: string;
    judul: string;
    createdAt: Date;
    creatorName: string;
}

interface getJudulAslabRes {
    id: string;
    idAslab: string;
    kodeJudul: string;
    noJudul: number;
    judul: string;
    Aslab: string;
}