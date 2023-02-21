const {
  Telegraf,
  Scenes: { Stage },
  Composer,
} = require("telegraf");
const titles = require("telegraf-steps").titlesGetter(__dirname + "/Titles");
const getUser = require("./Utils/getUser");
const tOrmCon = require("./db/connection");

const mainStage = new Stage(
  [
    ...require("./scenes/mainScene"),

    require("./scenes/adminScenes/adminScene"),
    require("./scenes/adminScenes/adminsScene"),
    require("./scenes/adminScenes/importScene"),
  ],
  {
    default: "clientScene",
  }
);

mainStage.start(async (ctx) => ctx.scene.enter("clientScene"));

mainStage.hears(titles.getValues("BUTTON_BACK_USER"), (ctx) =>
  ctx.scene.enter("clientScene")
);
mainStage.hears(titles.getValues("BUTTON_CLIENT_MENU"), async (ctx) => {
  await ctx.replyWithKeyboard("BACK_CLIENT_TITLE", "remove_keyboard");
  ctx.scene.enter("clientScene");
});

const adminStage = new Stage([
  //require("./scenes/adminScenes/adminScene"),
  // require("./scenes/adminScenes/adminsScene"),
  //require("./scenes/adminScenes/adsLinkScene"),
  //require("./scenes/adminScenes/claimsScene"),
  //require("./scenes/adminScenes/confirmCertificate"),
]);

mainStage.hears(titles.getValues("BUTTON_BACK_ADMIN"), (ctx) => {
  ctx.scene.enter("adminScene");
});

mainStage.on("web_app_data", (ctx) => {
  console.log(ctx);
  ctx.replyWithTitle("ITEM_INFO_TITLE");
});

mainStage.action("admin", (ctx) => ctx.scene.enter("adminScene"));

const stages = new Composer();

stages.use(Telegraf.chatType("private", mainStage.middleware()));
stages.use(Telegraf.chatType("private", adminStage.middleware()));

module.exports = stages;