var botConnection = new BotChat.DirectLine({
    secret: "BKtMDrqs2Kc.cwA.tBg.kiYukVMCLcVySGzyDAt6FCJy_4gcK2EeHOY6JOjT26A"
});

BotChat.App({
    botConnection: botConnection,
    user: { id: 'Jan Kowalski' },
    bot: { id: 'botid' },
    resize: 'detect'
}, document.getElementById("bot"));

botConnection.activity$
    .filter(activity => activity.type === "event" && activity.name === "changeBackground")
    .subscribe(activity => changeBackgroundColor(activity.value))

const postButtonMessage = () => {
    botConnection
        .postActivity({type: "event", value: "", from: {id: "me" }, name: "buttonClicked"})
        .subscribe(id => console.log("success"));
}