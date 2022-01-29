let handler = async (m) => {
    m.reply(`
┌「 *donasi* 」
├ wa.me/60189830350
├ Digi: 60149431385
├ Umobile: 60189830350
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
