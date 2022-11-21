const tg = window.Telegram.WebApp

export const useTelegram = () => {
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    console.log(tg.initDataUnsafe)
    console.log(tg.initDataUnsafe?.query_id)
    return {
        onClose,
        onToggleButton,
        tg, 
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
