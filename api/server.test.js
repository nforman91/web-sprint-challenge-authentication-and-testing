const server = require('./server')
const db = require('../data/dbConfig')
const request = require('supertest')
const Jokes = require('./jokes/jokes-model')

const joke1 = { username: 'tommy', password: 123 }

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

// beforeEach(async () => {
//     await db.seed.run()
// })

test('is testing environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('Tests', () => {
  describe('findBy()', () => {
    test('INCOMPLETE find users', async () => {
      const res = await request(server).get('/')
      expect(res.body).toHaveLength(2)
    })
    test('INCOMPLETE find correct users', async () => {
      // expect().toMatchObject()
    })
  })
  describe('findById()', () => {
    // let data
    //   beforeAll(async () => {
    //     data = await Jokes.findById('1')
    //   })
    // let data = await Jokes.findById('1')
    test('INCOMPLETE returns the correct one', async () => {
      const res = await request(server).findById('/auth/1')
      expect(res.body).toMatchObject({ id: 1, username: 'nathan', password: 1234 })
      // expect(data).toMatchObject({ id: 1, username: 'nathan', password: 1234 })
    })
    test('INCOMPLETE returns a real one', () => {
      // let joke
      // await Jokes.findById(joke1)
      // jokes = await db('users')
      // expect(jokes).toBeTruthy()
    })
  })
  describe('add()', () => {
    test('adds one new', async () => {
      let joke
      await Jokes.add(joke1)
      jokes = await db('users')
      expect(jokes).toHaveLength(1)
    })
    test('INCOMPLETE created one', async () => {
      const res = await request(server)
        .post('/users').send({ username: 'nathan', password: 1234 })
      expect(res.status).toBe(201)
      // const joke = await Jokes.add(joke1)
      // expect(joke).toMatchObject({ id: 1, username: 'tommy', password: 123 })
    })
  })
})
