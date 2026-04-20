const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'play.applemc.fun', // apna server IP
    username: 'rajpro0998',
    viewDistance: 'tiny'
  })

  bot.on('spawn', () => {
    console.log('Joined')

    setTimeout(() => bot.chat('/login rudra'), 4000)
    setTimeout(() => bot.chat('/server banana'), 10000)
    setTimeout(() => bot.chat('/warp afk'), 16000)

    setInterval(() => {
      bot.swingArm('right')
    }, 15000)
  })

  // tu command de sakta hai game se
  bot.on('chat', (username, message) => {
    if (username === 'rajpro0998' && message.startsWith('!')) {
      bot.chat(message.slice(1))
    }
  })

  bot.on('end', () => setTimeout(startBot, 8000))
  bot.on('error', () => {})
}

startBot()
