import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Administrator } from '../entities/Administrator';
import { Users } from '../entities/Users';
import { jwtConstants } from './key';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  async generateJwtToken(user: Users): Promise<string> {
    const payload = { email: user.userName, password: user.userPassword }
    return this.jwtService.sign(payload, {
      secret: jwtConstants.jwt_refresh_secret,
    });
  }

  async generateJwtTokenAdmin(user: Administrator): Promise<string> {
    const payload = { email: user.email, password: user.password };
    return this.jwtService.sign(payload, {
      secret: jwtConstants.jwt_refresh_secret,
    });
  }

  async verifyJwtToken(token: string): Promise<any> {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: jwtConstants.jwt_refresh_secret,
      });
      return decoded;
    } catch (error) {
      console.error('Failed to verify token:', error);
      throw new Error('Invalid or expired token');
    }
  }
}
