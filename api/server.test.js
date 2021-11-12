const db = require('../data/dbConfig')
const request = require('supertest')
const Jokes = require('./jokes/jokes-model')

// beforeAll(async () => {
//     await db.migrate.rollback()
//     await db.migrate.latest()
// })

// beforeEach(async () => {
//     await db.seed.run()
// })

// afterAll(async () => {
//     await db.destroy()
// })

// test('is testing environment', () => {
//   expect(process.env.NODE_ENV).toBe('testing')
// })

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

describe('Tests', () => {
  describe('findBy()', () => {
    test('test1', async () => {
      // expect().toMatchObject()
    })
    test('test2', async () => {
      // expect().toMatchObject()
    })
  })
  describe('findById()', () => {
    test('test1', async () => {
      // expect().toMatchObject()
    })
    test('test2', async () => {
      // expect().toMatchObject()
    })
  })
  describe('add()', () => {
    test('test1', async () => {
      // expect().toMatchObject()
    })
    test('test2', async () => {
      // expect().toMatchObject()
    })
  })
})
