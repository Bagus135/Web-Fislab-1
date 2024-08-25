
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  nrp: 'nrp',
  fullname: 'fullname',
  nickname: 'nickname',
  description: 'description',
  title: 'title',
  password: 'password',
  gender: 'gender',
  role: 'role',
  contact: 'contact',
  ig: 'ig',
  github: 'github',
  profilPic: 'profilPic',
  email: 'email',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
};

exports.Prisma.KelompokScalarFieldEnum = {
  userId: 'userId',
  nomorKel: 'nomorKel',
  nrp: 'nrp',
  fullname: 'fullname'
};

exports.Prisma.NilaiScalarFieldEnum = {
  userID: 'userID',
  kelompokid: 'kelompokid'
};

exports.Prisma.Praktikum1ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum2ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum3ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum4ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum5ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum6ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum7ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum8ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum9ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.Praktikum10ScalarFieldEnum = {
  userId: 'userId',
  kelompokId: 'kelompokId',
  aslabId: 'aslabId',
  aslab: 'aslab',
  name: 'name',
  noJudul: 'noJudul',
  nrp: 'nrp',
  PreLab: 'PreLab',
  InLab: 'InLab',
  Abstrak: 'Abstrak',
  Pendahuluan: 'Pendahuluan',
  Metodologi: 'Metodologi',
  Pembahasan: 'Pembahasan',
  Kesimpulan: 'Kesimpulan',
  Format: 'Format',
  nilaiTotal: 'nilaiTotal',
  comment: 'comment'
};

exports.Prisma.JudulAslabScalarFieldEnum = {
  id: 'id',
  idAslab: 'idAslab',
  kodeJudul: 'kodeJudul',
  noJudul: 'noJudul',
  judul: 'judul',
  Aslab: 'Aslab'
};

exports.Prisma.WeekScheduleScalarFieldEnum = {
  no: 'no',
  idJudulAslab: 'idJudulAslab',
  noJudul: 'noJudul',
  week: 'week',
  kelompokId: 'kelompokId'
};

exports.Prisma.JadwalScalarFieldEnum = {
  no: 'no',
  idJudulAslab: 'idJudulAslab',
  noJudul: 'noJudul',
  kelompokid: 'kelompokid',
  date: 'date',
  hour: 'hour'
};

exports.Prisma.LinkScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  link: 'link',
  shortLink: 'shortLink',
  createdAt: 'createdAt',
  creatorId: 'creatorId'
};

exports.Prisma.InfoScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  judul: 'judul',
  createdAt: 'createdAt',
  creatorName: 'creatorName'
};

exports.Prisma.FinalscoreScalarFieldEnum = {
  userId: 'userId',
  totalscore: 'totalscore',
  kelompokId: 'kelompokId',
  nrp: 'nrp',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.Prisma.ModelName = {
  User: 'User',
  Kelompok: 'Kelompok',
  Nilai: 'Nilai',
  Praktikum1: 'Praktikum1',
  Praktikum2: 'Praktikum2',
  Praktikum3: 'Praktikum3',
  Praktikum4: 'Praktikum4',
  Praktikum5: 'Praktikum5',
  Praktikum6: 'Praktikum6',
  Praktikum7: 'Praktikum7',
  Praktikum8: 'Praktikum8',
  Praktikum9: 'Praktikum9',
  Praktikum10: 'Praktikum10',
  JudulAslab: 'JudulAslab',
  WeekSchedule: 'WeekSchedule',
  Jadwal: 'Jadwal',
  Link: 'Link',
  Info: 'Info',
  finalscore: 'finalscore'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
