import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly connection: Connection) {}

  async listTables(): Promise<string[]> {
    const tables = await this.connection.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = DATABASE()
    `);
    console.log(tables);
    return tables.map((table: { TABLE_NAME: string }) => table.TABLE_NAME.toLocaleLowerCase().replace("_", "-"));
  }
}
