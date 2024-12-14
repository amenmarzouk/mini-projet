import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';

@Injectable()
export class AppService {
  async all_employe() {
    const filePath = path.resolve(__dirname, './data/employe.csv');

    const results: any[] = [];

    const stream = fs.createReadStream(filePath).pipe(csv());

    for await (const data of stream) {
      results.push(data);
    }

    return results;
  }
}
