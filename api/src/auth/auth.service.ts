import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from '../user/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmailAndPass(email, password);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { userId: user.userId};
        return {
            access_token: this.jwtService.sign(payload),
            token_expiration: new Date(),
            userId: user.userId
        }
    }
}

