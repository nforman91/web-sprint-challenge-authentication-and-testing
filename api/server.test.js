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

// afterAll(async () => {
//     await db.destroy()
// })

test('is testing environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

describe('Tests', () => {
  describe('findBy()', () => {
    test('INCOMPLETE find users', async () => {
      // expect().toMatchObject()
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
    test('INCOMPLETE returns the correct one', () => {
      // expect(data).toMatchObject({ id: 1, username: 'nathan', password: 1234 })
    })
    test('INCOMPLETE returns a real one', () => {
      // expect(data).toBeTruthy()
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
      // const joke = await Jokes.add(joke1)
      // expect(joke).toMatchObject({ id: 1, username: 'tommy', password: 123 })
    })
  })
})
