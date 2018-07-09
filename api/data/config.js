require('dotenv').config()

const webServerPort = process.env["SendApi.Port"] || 3000;

const config = require("../services/database").getData("configuration") || {
    webHookUrl: process.env.WEBHOOK_URL || `http://localhost:${webServerPort}/webhook`,
    pageScopeId: process.env.PAGE_SCOPE_ID || "SET_AS_ENV_VAR",
    appSecret: process.env.APP_SECRET || "SET_AS_ENV_VAR",
    pageAccessToken : process.env.PAGE_ACCESS_TOKEN || "SET_AS_ENV_VAR"
};

module.exports = {
    webHookUrl: process.env["SendApi.WebHookUrl"] || config.webHookUrl,
    pageScopeId: process.env["SendApi.PageScopeId"] || config.pageScopeId,
    appSecret: process.env["SendApi.AppSecret"] || config.appSecret,
    port: webServerPort,
    pageAccessToken: config.pageAccessToken
};