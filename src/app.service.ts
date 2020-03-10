import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getWelcome() {
    return  { message: 'Welcome!' }
  }
}
