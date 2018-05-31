module.exports = async function (robot) {
  const app = robot.route()

  app.get('/:installation/graphiql', async (req, res) => {
    const github = await robot.auth()
    const { token } = (await github.apps.createInstallationToken({ installation_id: req.params.installation })).data
    robot.log(token)
    res.render(process.cwd() + '/views/graphiql.hbs', { token })
  })
}
