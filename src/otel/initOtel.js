try {
  const { WebTracerProvider } = require('@opentelemetry/sdk-trace-web')

  const provider = new WebTracerProvider()
  provider.register()

  module.exports = {
    tracer: provider.getTracer('example-app-tracer')
  }
} catch (e) {
  module.exports = {
    tracer: null
  }
}
