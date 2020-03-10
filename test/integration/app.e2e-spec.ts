import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from '../../src/app.module'

describe('(e2e): Users', () => {
  let app: INestApplication
  let server: any

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()

    server = app.getHttpServer()
  })

  it('should access a list of 30 users from Github and find developer rafaelcalhau', async () => {
    const response = await request(server)
      .get('/api/users?since=17502026')

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(30)
    expect(response.body[0].login).toBe('rafaelcalhau')
  })

  it('should access the dev rafaelcalhau details from Github', async () => {
    const response = await request(server)
      .get('/api/users/rafaelcalhau')

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body.name).toBe('Rafael Calhau')
  })

  it('should access the dev rafaelcalhau repositories', async () => {
    const response = await request(server)
      .get('/api/users/rafaelcalhau/repos')

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThan(0)
  })
})