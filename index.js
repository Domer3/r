const WebSocket = require('ws');
const fetch = require('node-fetch');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', ws => {
  ws.on('message', async message => {
    const { data } = JSON.parse(message);
    await fetch("https://discord.com/api/webhooks/1385804672023134362/Ljj3QpiGnE84XjsaS97_CEmTXzvqxdKEJZ9qgRp5eTFW5NcaHeP01VcfQ843ihXsMCPo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: data })
    });
  });
});
