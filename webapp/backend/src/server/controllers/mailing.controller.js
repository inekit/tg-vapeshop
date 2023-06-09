const tOrmCon = require("../../db/connection");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function add(ctx) {
  return async (req, res, next) => {
    const { text } = req.body;

    const connection = await tOrmCon;

    const users = await connection
      .query("select id from users")
      .catch((e) => {}); // [{ id: 296846972 }]; /*

    const previewBinary = req.files?.preview?.data;

    for (let user of users) {
      if (previewBinary)
        await ctx.telegram
          .sendPhoto(
            user.id,
            {
              source: previewBinary,
            },
            {
              caption: text.replaceAll(/(\<p\>)|(\<\/p\>)$/g, () => ""),
              parse_mode: "HTML",
            }
          )
          .catch((e) => {
            console.log(e);
          });
      else
        await ctx.telegram
          .sendMessage(
            user.id,
            text.replaceAll(/(\<p\>)|(\<\/p\>)$/g, () => ""),
            {
              parse_mode: "HTML",
            }
          )
          .catch((e) => {
            //console.log(e);
          });
      await delay(50);
    }

    res.send({ error: null });
  };
}

module.exports = {
  add,
};
