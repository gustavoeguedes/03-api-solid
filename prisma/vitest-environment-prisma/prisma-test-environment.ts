import type { Environment } from 'vitest/environments'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Executou')

    return {
      teardown() {
        console.log('Teardown')
      },
    }
  },
}
