import * as _ from 'lodash';
import { sign, verify, decode } from 'jsonwebtoken';
import { env } from '../config/env';

export function isPlainObject(testVar: any): boolean {
  // eslint-disable-next-line sonarjs/prefer-single-boolean-return
  if (testVar === null || testVar === undefined || typeof testVar !== 'object' || Array.isArray(testVar) || typeof testVar?.getMonth === 'function') {
    return false;
  }
  return true;
}

export async function streamToString(stream: any, encoding: BufferEncoding): Promise<string> {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk: any) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err: any) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString(encoding)));
  });
}

/**
 * Runs tasks in parallel with workers
 *
 * @param {Array<any>} data array of data for tasks.
 * @param {number} workerCount number of parallel workers
 * @param {any} ctx
 * @param {(doc, ctx) => void} task task function gets document/element from array an context in params
 */
export async function runWithWorkers(data: Array<any>, workerCount: number, ctx: any, task: (doc, ctx) => void) {
  for (let i = 0; i < data.length; i++) {
    const workers = [];
    console.log(`COMPLETED=${i}/${data.length}`);
    for (let j = 0; j < workerCount; j++) {
      if (i >= data.length) {
        break;
      }
      const wDoc = data[i];
      const worker = async () => {
        const doc = _.cloneDeep(wDoc);
        await task.call(this, doc, ctx);
      };
      workers.push(worker());
      i++;
    }
    i--;
    if (workers.length) {
      await Promise.all(workers);
    }
  }
  console.log(`COMPLETED=${data.length}/${data.length}`);
}

export function objectIdFromDate(date: Date) {
  return Math.floor(date.getTime() / 1000).toString(16) + '0000000000000000';
}

export function dateFromObjectId(objectId: string) {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
}

export function toUnixTimestamp(date: Date) {
  return !!date ? Math.floor(date.getTime() / 1000) : 0;
}

export function safeJsonParse(inputString: string, defaultResult = null) {
  try {
    defaultResult = JSON.parse(inputString);
  } catch (err) {
    // console.warn('JSON parse failed and was handled by default value.');
  }
  return defaultResult;
}

export function checkEmail(email: string) {
  const regex =
    // eslint-disable-next-line security/detect-unsafe-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
  return regex.test(email);
}

/**
 * JWT token
 * @param subject
 * @param data
 * @param expiresIn default 1d, 'never', or pass numeric or string representation of timestamp
 * @param secret
 * @returns
 */
export function generateJwtToken(subject: string, data: object, expiresIn = '1d', secret?: string) {
  if (!subject && !expiresIn) {
    return sign({ ...data }, secret ? secret : env.APP_SECRET);
  } else if (expiresIn == 'never') {
    return sign({ ...data }, secret ? secret : env.APP_SECRET, {
      subject
    });
  }
  return sign({ ...data }, secret ? secret : env.APP_SECRET, {
    subject,
    expiresIn
  });
}

export function parseJwtToken(subject: string, token: string, secret?: string) {
  return verify(token, secret ? secret : env.APP_SECRET, { subject }) as any;
}

export function decodeJwtToken(token: string) {
  return decode(token) as any;
}

export function generatePassword(length: number) {
  return generateRandomString(length, true);
}

export function generateRandomString(length: number, includeSpecialChars = false) {
  const specialChars = '@#$&*€%';
  let charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if (includeSpecialChars) {
    charset = charset + specialChars;
  }

  let str = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    str += charset.charAt(Math.floor(Math.random() * n));
  }
  return str;
}

export function dateToSqlString(date: Date): string {
  return date.toISOString().replace(/T/, ' ').replace(/Z/, '');
}

// // DO NOT SET RETURN TYPE AS IT WILL MESS WITH CI/CD BUILD!
// export function getFaker() {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   return require('@faker-js/faker').faker;
// }
// export function getEnumKey<TEnum>(
//   enumerator: TEnum,
//   value: TEnum[keyof TEnum]
// ): string | TEnum[keyof TEnum] {
//   return Object.keys(enumerator).find((key) => enumerator[key] === value);
// }

export function getArgs() {
  return process.argv.reduce((args, arg) => {
    // long arg
    if (arg.slice(0, 2) === '--') {
      const longArg = arg.split('=');
      const longArgFlag = longArg[0].slice(2);
      const longArgValue = longArg.length > 1 ? longArg[1] : true;
      args[longArgFlag] = longArgValue;
    }
    // flags
    else if (arg[0] === '-') {
      const flags = arg.slice(1).split('');
      flags.forEach((flag) => {
        args[flag] = true;
      });
    }
    return args;
  }, {}) as any;
}

/**
 * Split array into multiple arrays (chunks)
 * @param arr source array
 * @param splitBy num of elements in chunk
 * @returns
 */
export function splitArray<T>(arr: T[], splitBy: number): T[][] {
  const cache = [];
  const tmp = [...arr];
  while (tmp.length) {
    cache.push(tmp.splice(0, splitBy));
  }
  return cache;
}
