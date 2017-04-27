/* eslint-env mocha */
const assert = require('assert')
const isPm2 = require('.')

describe('is-pm2', function () {
  beforeEach(function () {
    delete process.env['PM2_HOME']
    delete process.env['PM2_JSON_PROCESSING']
    delete process.env['PM2_CLI']
  })

  it('should return true if process.env.PM2_HOME exists', function () {
    process.env['PM2_HOME'] = ''
    assert.ok(isPm2())
  })

  it('should return true if process.env.PM2_JSON_PROCESSING exists', function () {
    process.env['PM2_JSON_PROCESSING'] = ''
    assert.ok(isPm2())
  })

  it('should return true if process.env.PM2_CLI exists', function () {
    process.env['PM2_CLI'] = ''
    assert.ok(isPm2())
  })

  it('should return false is no pm2 env var exists', function () {
    assert.equal(isPm2(), false)
  })
})
