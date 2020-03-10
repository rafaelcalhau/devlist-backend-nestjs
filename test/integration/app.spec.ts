import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from '../../src/app.controller'
import { AppService } from '../../src/app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  it('should access a simple response with welcome message', () => {
    const expected = {"message": "Welcome!"}
    expect(appController.getWelcome()).toEqual(expected)
  })
})
