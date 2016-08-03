const router = require('koa-router')();

/**
 * @api {get} /rand Request a random hitokoto
 * @apiName GetRandHitokoto
 * @apiGroup Hitokoto
 *
 *
 * @apiSuccess {String} id ID of the Hitokoto.
 * @apiSuccess {String} hitokoto Content of the Hitokoto.
 * @apiSuccess {Date} date Date of the Hitokoto
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id":"111111111",
 *       "hitokoto":"呐，知道么，樱花飘落的速度，是每秒五厘米哦~",
 *       "date":"2016-08-03T15:10:39.878Z"
 *    }
 */
router.get('/rand', ctx => {
  ctx.body = {
    id: '111111111',
    hitokoto: '呐，知道么，樱花飘落的速度，是每秒五厘米哦~',
    date: new Date(),
  };
});

module.exports = router;
